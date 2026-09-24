/**
 * Post as the agent. Dry run by default: prints what would be sent and what it
 * would cost. Add --send to actually post.
 *
 *   ANUS_ENV_FILE=/path/to/keys.env node agent/x/post.mjs "text"          # dry run
 *   ANUS_ENV_FILE=/path/to/keys.env node agent/x/post.mjs --send "text"   # posts
 *   ... --reply-to <post id>                                              # as a reply
 */
import { XClient } from './client.mjs';
import { postCost } from './prices.mjs';
import { config } from '../config.mjs';

const args = process.argv.slice(2);
const send = args.includes('--send');
const replyIdx = args.indexOf('--reply-to');
const replyTo = replyIdx >= 0 ? args[replyIdx + 1] : undefined;
const skip = new Set(replyIdx >= 0 ? [replyIdx, replyIdx + 1] : []);
const text = args
  .filter((a, i) => a !== '--send' && !skip.has(i))
  .join(' ')
  .trim();

if (!text) {
  console.error('Nothing to post.');
  process.exit(1);
}
const length = [...text].length;
if (length > 280) {
  console.error(`Too long: ${length} characters, the limit is 280.`);
  process.exit(1);
}

const x = new XClient();
const cost = postCost(text);
console.log(`Text (${length}/280):\n---\n${text}\n---`);
console.log(
  `Cost: $${cost}. Spent today: $${x.budget.spentToday()} of $${x.budget.capUsd}.`,
);

if (!send) {
  console.log(
    x.budget.canSpend(cost)
      ? 'Dry run: fits the budget. Add --send to post.'
      : "Dry run: would exceed today's budget.",
  );
  process.exit(0);
}

try {
  const res = await x.call('POST', '/2/tweets', {
    body: {
      text,
      ...(replyTo ? { reply: { in_reply_to_tweet_id: replyTo } } : {}),
    },
    costUsd: cost,
    what: replyTo ? `reply to ${replyTo}` : 'post',
  });
  const username = config.x.username;
  console.log(`Posted: https://x.com/${username}/status/${res.data.id}`);
} catch (err) {
  console.error(err.message);
  process.exit(err.code === 'BUDGET' ? 2 : 1);
}

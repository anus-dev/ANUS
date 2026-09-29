import assert from 'node:assert/strict';
import { test } from 'node:test';
import { TRAILER, gitHasTrailer, withTrailer } from '../lib/coauthor.mjs';

const t = `--trailer '${TRAILER}'`;

test('adds the trailer to a plain commit', () => {
  assert.equal(withTrailer('git commit -m "fix"'), `git commit ${t} -m "fix"`);
});

test('every commit in a chain, git -C and -c forms', () => {
  assert.equal(withTrailer('git add -A && git commit -m a'), `git add -A && git commit ${t} -m a`);
  assert.equal(withTrailer('git -C repo commit -am x'), `git -C repo commit ${t} -am x`);
  assert.equal(withTrailer("git -c user.name='A B' commit -m x"), `git -c user.name='A B' commit ${t} -m x`);
  assert.equal(withTrailer('git commit -m a; git commit --amend --no-edit'), `git commit ${t} -m a; git commit ${t} --amend --no-edit`);
});

test('leaves other commands and repeats alone', () => {
  assert.equal(withTrailer('git commit-tree abc'), 'git commit-tree abc');
  assert.equal(withTrailer('git status'), 'git status');
  assert.equal(withTrailer('npm test'), 'npm test');
  const once = withTrailer('git commit -m a');
  assert.equal(withTrailer(once), once);
});

test('git 2.32 or newer only', () => {
  assert.equal(gitHasTrailer('git version 2.39.5 (Apple Git-154)'), true);
  assert.equal(gitHasTrailer('git version 2.32.0'), true);
  assert.equal(gitHasTrailer('git version 2.25.1'), false);
  assert.equal(gitHasTrailer('git version 3.0.0'), true);
  assert.equal(gitHasTrailer(''), false);
});

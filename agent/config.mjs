/**
 * The one place the agent's body learns whose body it is.
 * Fork this repository, change config.json, keep the code.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const path = fileURLToPath(new URL('./config.json', import.meta.url));
export const config = JSON.parse(readFileSync(path, 'utf8'));

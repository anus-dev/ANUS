#!/usr/bin/env node
import { main } from '../lib/main.mjs';

await main(process.argv.slice(2));

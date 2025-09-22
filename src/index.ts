#!/usr/bin/env node

import readline from 'readline';
import { OpenAI } from 'openai';

const apiKey = process.env.OPENAI_KEY;
if (!apiKey) {
  console.error('Missing OPENAI_KEY');
  process.exit(1);
}

const openai = new OpenAI({ apiKey });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async function () {
  const messages: { role: 'user' | 'assistant'; content: string }[] = [];
  while (true) {
    const content = await new Promise<string>(resolve => {
      rl.question('\n    ', resolve);
    });
    if (!content) {
      rl.close();
      break;
    }
    messages.push({ role: 'user', content });
    try {
      const completion = await openai.chat.completions.parse({
        model: 'gpt-5-nano',
        messages,
      });
      const reply = completion.choices[0]?.message?.content || '[empty]';
      console.log(`\n${reply}`);
      messages.push({ role: 'assistant', content: reply });
    } catch (err) {
      console.error(err);
    }
  }
})();

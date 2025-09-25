# Clai - Bare-bones OpenAI in the terminal

I just wanted software I can trust - with only 42 lines of TypeScript, you can probably trust it too.

```bash
echo OPENAI_KEY= > .env
nano .env
pnpm i
pnpm build
pnpm link --global
# use "clai" in the terminal anywhere thereafter
# optional argument to select model e.g. "clai gpt-5"
```
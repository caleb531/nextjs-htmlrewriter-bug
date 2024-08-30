# nextjs-htmlrewriter-bug

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) which attempts to reproduce an issue I am having importing the WASM-based `htmlrewriter` package into a NextJS project.

If you open the app, you will see a form into which you can enter some HTML.
When you click the Submit button, the HTML should be sent to the
`/api/html-rewriter` and processed by the `HTMLRewriter` class. However, when NextJS tries to compile the route in real time, a WASM import error is thrown.

```
./node_modules/.pnpm/htmlrewriter@0.0.9/node_modules/htmlrewriter/vercel.js
Attempted import error: './dist/html_rewriter_bg.wasm?module' does not contain a default export (imported as 'wasm').
```

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser, then click the Submit button to see the error.

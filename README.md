## Features

- Tech Stack - Next.js 14, ReactJS 18, CSS modules, TypeScript
- No external third party library is used to create calendar view.
- React Context is used for state management
- Features like - disabled past dates, navigation to today's view in a single click, SEO score 100 etc

## Screenshots

![performance](./blob/performance-matrix.png?raw=true)
![desktop](./blob/desktop-responsive-ui.png?raw=true)
![mobile](./blob/mobile-responsive-ui.png?raw=true)

## Codebase breakdown

- Entry point - page.tsx
- components folder - Client side components and other reusable elements
- contexts folder - To store Context Provider file
- lib folder - data constants and utility functions
- types folder - TS interfaces and types

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

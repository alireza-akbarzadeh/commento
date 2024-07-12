<p align="center">
  <h1>It Bazar</h1>
</p>

## Table of Contents

- [Getting Started](#getting-started)
- [Introduction](#introduction)
- [Development Tools](#development-tools)
- [Testing](#testing)
- [Deployment](#deployment)
- [Scripts Overview](#scripts-overview)
- [Roadmap](#roadmap)
  - [UI](#ui)
  - [Hooks and Utilities](#hooks-and-utilities)
  - [Code Quality](#code-quality)
  - [Testing app](#testing-app)
- [Contributing](#contributing)
- [Platform, Build, and Deployment Status](#platform-build-and-deployment-status)
- [License](#license)

## Introduction

it bazar is marketplace for buying and selling products.

## Getting Started

To get started with this app, follow these steps:

1. Fork & clone the repository:

   ```bash
   git clone https://github.com/<your_username>/it-bazar.git
   ```

2. Install the dependencies:

   ```bash
   bun install
   ```

3. Run the development server:

   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> [!NOTE]  
> I use [Neode](https://github.com/adam-cowley/neode) for managing application data in this project. Ensure that

## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `start`: Starts the production server
- `format`: Formats the code with Prettier
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `story`: Starts the Storybook server
- `build-story`: Builds the Storybook for deployment
<!-- - `test`: Runs unit and integration tests
- `test:ui`: Runs end-to-end tests in headless mode
- `coverage`: checking for how many of your code is tested -->

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [iconmoon](https://icomoon.io/) – Beautifully simple, pixel-perfect icons
- [`vazirmatn`](https://github.com/rastikerdar/vazirmatn) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://github.com/rastikerdar/vazirmatn) – React Component to lazy load images and other components/elements. Supports IntersectionObserver and includes a HOC to track window scroll position to improve performance.

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

## 🚀 Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/5f2f5a67-5ed3-4c1f-a60f-969373eaa7b9/deploy-status)](https://app.netlify.com/sites/it-bazar/deploys)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise)

### Contributing

The devtools community is possible thanks to thousands of kind volunteers like you. We welcome all contributions to the community and are excited to welcome you aboard.

Recent Contributions:

![Alt](https://repobeats.axiom.co/api/embed/1aef2bf4570efff1b67e8cd368d640180b823713.svg 'Repobeats analytics image')

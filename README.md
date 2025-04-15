# File Structure: 
----------- 
/app
│── /(dashboard)
│   │── page.tsx  →  "/dashboard"
│── /(products)
│   │── add/page.tsx  →  "/add"
│   │── add-model/page.tsx  →  "/add-model"
│   │── bulk-entry/page.tsx  →  "/bulk-entry"
│   │── one-by-one/page.tsx  →  "/one-by-one"
│   │── model-wise/page.tsx  →  "/model-wise"
│── /(lost-damage)
│   │── add-damage-loss/page.tsx  →  "/add-damage-loss"
│   │── add-repair/page.tsx  →  "/add-repair"
│   │── in-repair/page.tsx  →  "/in-repair"
│   │── lost-damage-products/page.tsx  →  "/lost-damage-products"
│── /(orders)
│   │── all-orders/page.tsx  →  "/all-orders"
│   │── product-wise/page.tsx  →  "/product-wise"
│   │── add-orders/page.tsx  →  "/add-orders"
│   │── add-accessories-orders/page.tsx  →  "/add-accessories-orders"
│── /(assigned-terminals)
│   │── page.tsx  →  "/assigned-terminals"
│── /(live-base)
│   │── page.tsx  →  "/live-base"
│── /(businesses)
│   │── page.tsx  →  "/businesses"
│── /(role-permissions)
│   │── add-user/page.tsx  →  "/add-user"
│   │── users/page.tsx  →  "/users"
│   │── roles/page.tsx  →  "/roles"
│── /(account)
│   │── page.tsx  →  "/account"
│── /(settings)
│   │── page.tsx  →  "/settings"
-----------

# Project Name
.
[Brief project description]

## Development Guidelines

### Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- Shadcn UI
- Zustand (state management)
- Zod (data validation)


### Key Principles

- Write concise, technical Javascript code with accurate examples
- Prefer iteration and modularization over code duplication
- Use descriptive variable names

### Naming Conventions

- Use lowercase with dashes for directories (e.g., `components/auth-wizard`)
- Favor named exports for components
- Use camelCase for variables and functions
- Use PascalCase for component names

### Syntax and Formatting

- Use the "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals
- Use declarative JSX

### UI and Styling

- Use Shadcn UI, Radix, and Tailwind for components and styling
- Implement responsive design with Tailwind CSS (mobile-first approach)
- Use colors from the global.css file

### Performance Optimization

- Minimize 'use client', 'useEffect', and 'setState'
- Favor React Server Components (RSC)
- Fetch data on the server side
- Use Server Actions for Post, Put, Delete requests
- Use Nextjs SSR and SSG if possible
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Implement Blur Data URL for images
- Use loading skeletons where needed
- Use Next.js Streaming where necessary
- Optimize images:
  - Use WebP format
  - Include accurate size data

- Prefer Tailwind/CSS over JavaScript for styling and animations

### State Management

- Use Zustand for state management

### Key Conventions

- Optimize Web Vitals (LCP, CLS, FID)
- Limit 'use client' usage:
  - Use in child components when necessary
  - Favor server components and Next.js SSR
  - Avoid for data fetching or state management

For more details on data fetching, rendering, and routing, refer to the [Next.js documentation](https://nextjs.org/docs).

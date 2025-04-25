# File Structure: 
----------- 


# Project Name
.
[Paymentsave Inventory

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


## Folder and Routing Conventions: 


## 🔧 Branch Name Conventions

| Type      | Purpose                          | Example                                      |
|-----------|----------------------------------|----------------------------------------------|
| `feature` | New feature                      | `feature/shaima-user-dashboard`              |
| `bugfix`  | Fixing a bug                     | `bugfix/shaima-fix-login-error`              |
| `hotfix`  | Urgent fix on production         | `hotfix/shaima-fix-payment-crash`            |
| `release` | Preparing a release version      | `release/v1.2.0`                             |
| `chore`   | Cleanup, config, or refactoring  | `chore/shaima-update-eslint-config`          |
| `docs`    | Documentation changes            | `docs/shaima-api-guide-update`               |
| `test`    | Adding or editing tests          | `test/shaima-auth-flow-tests`                |

## ✅ Naming Tips

- Always use **lowercase** letters.
- Use **hyphens** (`-`) to separate words.
- Keep branch names **concise and descriptive**.
- **Prefix** with the branch type.
- Add **your name** for tracking ownership in team environments.

## 📌 Real-World Examples

| Task                                   | Branch Name                             |
|----------------------------------------|------------------------------------------|
| Add new subscription page              | `feature/shaima-subscription-page`       |
| Fix invoice date issue                 | `bugfix/shaima-fix-invoice-date`         |
| Prepare version 2.0 release            | `release/v2.0.0`                          |
| Update ESLint configuration            | `chore/shaima-update-eslint-config`      |
| Add unit tests for auth flow           | `test/shaima-auth-flow-tests`            |

## 🧹 After Merging

- ✅ Once your pull request is **merged**, **delete the branch** to keep your repository clean and prevent confusion.
- Most platforms like GitHub, GitLab, and Bitbucket offer a **"Delete branch"** button after merging — use it!



# mlogs - Blog Application 

This Blog Application is a full-stack web application that allows users to sign up, sign in, create, read, update, and delete blog posts. The application uses React for the frontend, Hono for the backend, and various libraries for functionality such as authentication and data fetching.

## Tech Stack 
### Backend
- Cloudflare for serverless deployments
- Hono (alternative for nodejs)
- Zod for user validation 
- PostgresSQL as database
- Prisma as ORM

### Frontend 
- Vite
- React + Typescript
- Tailwind CSS for styling
- React Router DOM for routing
- React Loading Skeleton for skeletons 

## Project Structure 
```bash
.
├── Readme.md
├── backend
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── controllers
│   │   │   ├── admin.controller.ts
│   │   │   └── public.controller.ts
│   │   ├── index.ts
│   │   ├── middlewares
│   │   │   ├── authAdminMiddleware.ts
│   │   │   └── authMIdddleware.ts
│   │   ├── routes
│   │   │   ├── adminRoutes.ts
│   │   │   ├── getblogRoutes.ts
│   │   │   └── userRoutes.ts
│   │   └── utils
│   │       ├── encryption.ts
│   │       └── prismaClient.ts
│   ├── tsconfig.json
│   ├── wrangler.toml
│   └── wrangler.toml.example
├── common
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── createBlogInput.ts
│   │   ├── index.ts
│   │   ├── signinInput.ts
│   │   ├── signupInput.ts
│   │   └── updateBlogInput.ts
│   └── tsconfig.json
└── frontend
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── backendUrl.ts
    │   ├── components
    │   │   ├── Blog.tsx
    │   │   ├── BlogFooter.tsx
    │   │   ├── Button.tsx
    │   │   ├── InputBox.tsx
    │   │   ├── Navbar.tsx
    │   │   └── UnitBlog.tsx
    │   ├── context
    │   │   └── AuthContext.tsx
    │   ├── hooks
    │   │   ├── useFetchBlogs.ts
    │   │   ├── useLogout.ts
    │   │   ├── useSignIn.ts
    │   │   ├── useSignup.ts
    │   │   └── useUnitBlog.ts
    │   ├── index.css
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── BlogPage.tsx
    │   │   ├── Home.tsx
    │   │   ├── Signin.tsx
    │   │   ├── Signup.tsx
    │   │   └── UnitBlogPage.tsx
    │   └── utils
    │       ├── FullBlogSkeleton.tsx
    │       ├── blogSkeleton.tsx
    │       └── dateExtractor.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vercel.json
    └── vite.config.ts


```
## Setup and Installation

### Clone the repository

``` 
git clone https://github.com/dev-mayanktiwari/mlogs.git
```

### Backend
```
cd mlogs/backend
npm i

```

### Create a wrangler.toml file from the wrangler.toml.example and setup prisma.

### Frontend
```
cd mlogs/frontend
npm i
```

## References
- Hono [https://hono.dev/docs/]
- Prisma connection pooling [https://www.prisma.io/docs/orm/prisma-client/deployment/edge/deploy-to-cloudflare]
- Cloudflare [https://www.cloudflare.com/en-gb/connectivity-cloud/]
- Axios [https://axios-http.com/docs/intro]
- Tailwind [https://tailwindcss.com/docs/installation/framework-guides]
- React Router DOM [https://reactrouter.com/en/main]
- React Loading Skeleton [https://github.com/dvtng/react-loading-skeleton]






## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devmayank-tiwari/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/devmayanktiwari)


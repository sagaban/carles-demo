# Carles Demo

Example app working with react

## 0. Install dependencies

- NVM (o FNM) to handle node versions
- Install node
- We will use npm (instead of pnpm/yarn/bun)

## 1. Star creating a React app with Vite and Typescript

### Alternatives

- Angular
- Vue
- Svelte
- SolidJS

`npm create vite@latest carles-demo -- --template react-ts`

`npm install`

`npm run dev`

## 2. Add linters

`npm install --save-dev eslint-plugin-react-x`

`npm install --save-dev eslint-plugin-react-dom`

`npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`

## 3. Install MUI

### Alternatives

- [shadcn](https://ui.shadcn.com/)
- [DaisyUI](https://daisyui.com/)
- [Ant Design](https://ant.design/)
- [Chakra UI](https://chakra-ui.com/)
- [Shadow Panda](https://shadow-panda.dev/)

[instructions](https://mui.com/material-ui/getting-started/installation/)

`npm install @mui/material @emotion/react @emotion/styled`

`npm install @mui/icons-material`

`npm i --save-dev @types/node`

### Add a template as example

> Source: https://mui.com/material-ui/getting-started/templates/

## 4. React router

### Alternatives

- [TanStack Router](https://tanstack.com/router)

[instructions for declarative routing](https://reactrouter.com/start/declarative/installation/)

`npm install --save react-router`

Here, as an example, I added:

- Basic routing
- Routes with a layout
- Nested routes
- Routes with URL params

## 5. TanStack Router (aka React Query)

`npm install --save @tanstack/react-query`

`npm install --save axios`

Things added:

- Restructure index components and routes
- Add api service, hooks and mocks
- Simulate an api all using TanStack query

## 6. Add Zustand for State management

### Alternatives

[React's native context](https://react.dev/learn/managing-state)
[Jotai](https://jotai.org/)
[Redux](https://redux.js.org/)

[instructions](https://zustand.docs.pmnd.rs/getting-started/introduction/)

`npm install --save zustand`

Things added:

- The `Testimonials` sections is now a modal
- Use Zustand to toggle the modal open/close

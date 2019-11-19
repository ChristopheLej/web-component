# Create a solution with lerna and 3 projects inside:

-Prerequisites:

Lerna and stencil must be installed in global

```
npm install --g lerna
```

## 1. Create lerna project

```
mkdir web-components
cd web-components
npx lerna init
```

## 2. Create a javascript library called "components-ui" with stencil

```
cd packages
npm init stencil
```

choose component
enter a name for library : components-ui

```
cd components-ui
yarn add @stencil/core@latest --save-exact
yarn add @stencil/sass --dev
yarn add classnames
yarn add @types/classnames
```

Modify `stencil.config.ts` for adding plugin sass

Create your component (in my sample, it's a button) and modify index.html for showing the new component

Launch the application with

```
yarn run start
```

Build the components library and create a link

```
yarn run build
yarn link
```

## 3. Create a react application called "react-app"

```
cd packages
npx create-react-app react-app
```

Link the library with application

```
cd react-app
yarn link "components-ui"
```

Modify `index.js` and `app.js` for adding the component and start the app

```
yarn run start
```

## 4. Create a angular application called "angular-app"

```
cd packages
ng new angular-app
```

Link the library with application

```
cd angular-app
yarn link "components-ui"
```

Modify `main.ts`, `app.component.html` and `app.component.ts` for adding the component

Modify `app.module.ts` for adding `CUSTOM_ELEMENTS_SCHEMA` and start the app

```
yarn run start
```

**Now you have a components library compatible with react and angular application (and more...)**

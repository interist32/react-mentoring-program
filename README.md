# EPAM React Global Mentoring Program

<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="100px"/>

## How to run
To play around this project clone the repository and then run:
```
npm install

# to run in development mode
npm start

# to run in production mode
npm run serve:prod
```

## Task list
- [Task 1](https://codesandbox.io/s/vigilant-gareth-8hn8v?file=/src/App.js):
  - Use `create-react-app`
  - Create components in different ways: 
    - React.createElement
    - React.Component
    - React.PureComponent
    - Functional Component
- Task 2:
  - Configuring Webpack
    - Using of ENV variables (cross-env)
    - Babel configuration for parsing JSX syntax
    - Configuration splitting for DEV/PROD environments
- Task 3:
  - Create UI for Home Page
  - Use PropTypes
  - Use ErrorBoundary component
  - Use Layout components
- Task 4:
  - Create UI for Modal dialogs
  - Use stateless/stateful approach
  - Use React syntethic events
  - Use lifecycle methods
- Task 5:
  - Create UI for Movie Details
  - Use `useState` hook
  - Use `useCallback` hook
  - Use `useEffect` hook
  - Use custom hook
- Task 6:
  - Use [API server](https://github.com/VarvaraZadnepriak/MoviesAPI.ReactJS) to fetch data from.
  - Make real requests to API-server
  - Use redux
  - Implement CRUD operations for movies
  - Implement sorting + filtering
- Task 7:
  - Use `formik` to implement Add/Edit movie forms
  - Implement validation
  - Use hooks from `formik`
- Task 8:
  - Add Routing
  - Add 404 handling
  - Use `react-router-dom` library
- Task 9:
  - Add snapshot test for presentational component
  - Cover any reducer with Unit-test
  - Add coverage reporting
  - Cover Add movie dialog with unit-test
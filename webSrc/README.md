# manager_app (front-end)
front-end implemented in Angular which will run on the client's browser, providing a graphical user interface that enables the user to view the employees' data and send requests to query and update the employees' data.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## components
All components are located in ./src/app 

1. data-table - component for displaying tabular data
2. dropdown - component providing a dropdown widget
3. employee-data-filter-form - component providing a form what allows the user to update filters applied to employee data
4. employee-data-tab - component that displays the detailed employee data 
5. loading-indicator - component displaying a spinner to indicate that the app is loading
6. tables-tab - component that displays the raw table data
7. tooltip - component that displays a tooltip

## services
All services are located in .src/app/services

1. database - service providing interaction with the database by sending requests to the application back end

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Angular with lazy-loading, service http and cache service

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Authors
[Rodrigo da Silva Luz](https://github.com/rodrigodasilvaluz)

## Contact

<div>
  <a href="https://www.linkedin.com/in/rodrigo-da-silva-luz-b2a88555" target="_blank"><img loading="lazy" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>

## Project description

This project was created as an example of querying data from different alternative databases.

### Database used

* [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Code scaffolding command lines used in the terminal, to generate modules with lazy-loading, services and interceptors

```bash
ng new angular-lazy-loading-service-cache
ng generate module pages/home --route home --module app.module
ng generate service pages/home/home
ng generate service shared/services/cache-resolver
ng generate interceptor shared/interceptors/cache
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

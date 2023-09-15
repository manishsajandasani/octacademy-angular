- What is Angular?
  - It's a frontend JS framework to build client side applications using HTML, CSS, and JavaScript.
- What is SPA?
  - Stands for Single Page Application.
  - A SPA is an app that doesn't need to reload the page during its use and it works withing a web browser.
- What is Angular CLI?
  - It's a Command Line Interface tool that is used to **Create, Compile, Update, Develop, Scaffold, and Maintain** an Angular Application directly from the Command Shell.
- How to setup Angular CLI?
  - cmd: `npm install -g @angular/cli`
  - cmd: `ng version || ng v`
- Generate an Angular App using Angular CLI?
  - cmd: `ng new <project-name>`
  - cmd: `ng serve`
  - cmd: `ng serve -port 4300`
- About Angular Project's File Structure A-Z
  - tslint.json
  - tsconfig.spec.json
  - tsconfig.app.json
  - tsconfig.json
  - README.md
  - package.json
  - node_modules folder
  - package-lock.json
  - karma.conf.js
  - angular.json
  - .gitignore
  - .editorconfig
  - .browserslistrc
  - e2e folder
  - src folder
    - app
      - app-routing.module.ts
      - app.component.css
      - app.component.html
      - app.component.spec.ts
      - app.component.ts
      - app.module.ts
    - assets
      - .gitkeep
    - environments
      - environment.prod.ts
      - environment.ts
    - favicon.ico
    - index.html
    - main.ts
    - polyfills.ts
    - styles.css
    - test.ts
- What is Angular Component & How to use it?
  - Angular framework is a component based frontend framework
  - Components are the main building block of an Angular app
  - Without components we cannot build a proper angular app
  - A component is a combination of data html template and logics
  - A component represent an area of a view that shows inside the browser
  - A component gets loaded inside the browser
- How to Create Angular Component From Scratch?
- Generate Components using Angular CLI?

```js
cmd: ng g c post
CREATE src/app/post/post.component.html (19 bytes)
CREATE src/app/post/post.component.spec.ts (545 bytes)
CREATE src/app/post/post.component.ts (194 bytes)
CREATE src/app/post/post.component.css (0 bytes)
UPDATE src/app/app.module.ts (549 bytes)
```

- How to Add HTML Markups and Styles to a component [Component Decorator, template, templateUrl, styles, styleUrls]
- Implementation of OnInit Interface and ngOnInit (method and Life Cycle Hook)

```js
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    console.log("Loaded");
  }
}
```

- Angular Data Binding

  - In order to use the variables of `.ts file` into the `.html file` of a component, you have to create the scope. In Angular you can create the scope with this `{{  }}`. Ex. `{{ title }}`. This is what we call `Data Binding` or `String Interpolation` in Angular.
  - Inside these curly braces we can put any valid JavaScript code. Some examples are:
    - `{{ 100 + 50 }}`
    - `{{ 2*5 }}`
    - `{{ null == undefined }}`
    - `{{ null === undefined }}`
    - `{{ undefined }}`
    - `{{ 3 / 0 }}`

- How to Communicate or (Sharing Data) Between Two Components

  - Parent to child Component via `@input Decorator`. `@Input Decorator` is used to share data between Parent Component and a Child Component.
  - Child to Parent Component Via `@ViewChild Decorator`
  - Child to Parent when there is Event, using the `@Output Decorator` and `Event Emitter`. This approach is ideal when we want to share data changes that occur on things like button clicks, form entries, and other user events.

- Data Display and Event Handling
  - Angular Data Binding Methods: For Data Binding we use `Brackets []` and for Event Binding we use `Parenthesis ()`
    - String Interpolation {{  }}: It is used to show dynamic data inside the HTML page.
    - Property Binding
    - CSS Class Binding
    - CSS Style Binding
    - Event Binding
    - Event Filtering
    - Template Variable
  - Angular Two Way Data Binding
  - Handle Events like click, keyup, filtering etc.

# ng2-fiix-layout
An Angular2 Layout Components by Fiix Applications

## Prolong and Motivation
I'll start with a DISCLAIMER: I'm not a web developer and I don't pretend to be one.  
Once upon a time our company needed a new (big and complex) web app to manage our administrative operations.  
I thought to myself here is an opportunity to learn something new...  
I had a good experience with Angular 1 (from another project) and I loved what Microsoft did with TypeScript (used it a lot with Node.js development).  
So why not using Angular2? and honestly I've loved it (after few hours spent on understanding the whole "quick start" installation of Angular).  
As a Google fan I've used Angular Material for my last project, but since Angular Material2 is still WIP, I tried to use flexbox, bootstrap, frow and many more 3rd party libs  
that provide layout directives/css classes. And you know what? I've hated it! WTF do I care about main/cross axis, row/columns having to memorize css classes based on the orientation of
those fu**in divs.  
So I've decided to create my own layout components based on Android layouts (I know that are not perfect but there are still better then CSS).  
This is why I've created this repository and shared it with the rest of the world, In order to use the great Angular2 community to create (finally!) an easy to use layout components.  
So feel free to contact me for new features, suggestions and try to fork it.  

## Installation
Well installation is pretty easy, use npm to install the module:
```bash
npm install ng2-fiix-layout --save
```

and import the FiixLayoutModule to your app root module:   
(don't forget to include CUSTOM_ELEMENTS_SCHEMA if you want to use my directives)
```typescript
import {FiixLayoutModule} from "ng2-fiix-layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...  
    FiixLayoutModule.forRoot() <-
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] <-
})
export class AppModule {...}
```

That's all! you can start using the layout components.

## Frame Layout

## Linear Layout

## Developers
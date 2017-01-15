# ng2-fiix-layout
An Angular2 Layout Components by Fiix Applications

## Prolong and Motivation
I'll start with a DISCLAIMER: I'm not a web developer and I don't pretend to be one.  
Once upon a time our company ask me to build a new (big and complex) web app to manage our administrative operations.  
I thought to myself here is an opportunity to learn something new...  
I had a good experience with Angular 1 (from another project) and I loved what Microsoft did with TypeScript (used it a lot with Node.js development).  
So why not using Angular2? and honestly I've loved it (after spending few hours on understanding the whole "quick start" installation of Angular).  
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
The Frame Layout is a container that holds items inside a container so each items can be place at 9 predefined anchors:  
Top Left, Top Center, Top Right, Center Left, Center Center, Center Right, Bottom Left, Bottom Center and Bottom Right.  
The best usage of it, is to display some content with overlays views for example:  

[![Example of frame layout](https://s28.postimg.org/rwmrssy25/frame_1.jpg)](https://postimg.org/image/l66ajdaw9/)  
In the example you can see that:  
* User 0 - is using the Top-Center anchor.
* skip - is using the Bottom-Left anchor.
* like - is using the Bottom-Right anchor.
* Image 0 - is using the Center-Center anchor.

### Usage example
The following code is used to create the layout shown above^.
```html
<!-- Define a new Frame Layout --> 
<fx-frame-layout style="background: mediumblue; color: white; height: 200px; width: 200px;"                                                      
            [padding]="'20px'"
          >
    <!-- Using the Top-Center anchor -->          
    <top-center>
      <div style="padding: 10px;">User 1</div>
    </top-center>
            
    <!-- Using the Center-Center anchor -->
    <center-center>
      Image 1
    </center-center>

    <!-- Using the Bottom-Left anchor -->
    <bottom-left>
      <div style="padding: 10px;">skip</div>
    </bottom-left>

    <!-- Using the Bottom-Right anchor -->
    <bottom-right>
      <div style="padding: 10px;">like</div>
    </bottom-right>

</fx-frame-layout>
```

### Modifiers
#### Anchors
Use Angular2 content transclusion to layout items in specific anchors. The anchors are:  
 *  <top-left></top-left>
 *  <top-center></top-center>
 *  <top-right></top-right>
 *  <center-left></center-left>
 *  <center-center></center-center>
 *  <center-right></center-right>
 *  <bottom-left></bottom-left>
 *  <bottom-center></bottom-center>
 *  <bottom-right></bottom-right>

#### Inputs
Use Angular2 property binding to change the layout params of this container:
 * height (string) - a css expression describing the height of the element.
 * width (string) - a css expression describing the width of the element.
 * max-h (string) - a css expression describing the max height of the element.
 * max-w (string) - a css expression describing the max width of the element.
 * min-h (string) - a css expression describing the min height of the element.
 * min-w (string) - a css expression describing the min width of the element.
 * padding (string) - a css expression describing the padding of the content inside the element. (not affecting the anchors padding).
 * margin (string) - a css expression describing the margins of the element.
 * scroll-x, scroll-y (boolean) - controls the overflow of the container in the x,y axis. true for auto, false for hidden.
 

## Linear Layout
(Documentation WIP, but you can see the [Source code](https://github.com/matang28/ng2-fiix-layout/blob/master/src/components/linear-layout.component.ts) for examples.)

## Custom Directives
(Documentation WIP, but you can see the [Source code](https://github.com/matang28/ng2-fiix-layout/tree/master/src/directives) for examples.)

## Developers
First clone/fork this repository to get the source code and install the dependencies:

```bash
git clone https://github.com/matang28/ng2-fiix-layout.git
cd ng2-fiix-layout
npm install
```

We use Gulp.js to build the project so you can find the build file at gulpfile.js. You can run the build process using:

```bash
npm run build
```

This will create a dist folder at the root level with the compiled JavaScript file, TypeScript definition files and the CSS stylesheets.  

###Folder structure
```
-- example <- an example Angular2 app that uses the lib and shows some example usage
-- src <- the lib source files
----- commons <- common classes
----- components <- components live here
----- directives <- directives live here
----- styles <- styles live here
---- index.ts
---- lib.module.ts <-- the Angular2 library module to be imported
- gulpfile.js <- the gulp build file.
- ng2-fiix-layout.ts <- the main barrel file.
- package.json <- if you don't know close don't bother to clone.
- tsconfig.json <- if you don't know close don't bother to clone.
```

## Whats Next?
* Implement media query service to support device (size) aware API.
* Z order directive.
* You tell me...
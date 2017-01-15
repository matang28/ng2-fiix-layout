import {Component, ViewEncapsulation} from "@angular/core";
import {BaseLayout} from "../commons/base-layout-params.class";

/**
 * A frame layout is a layout that can overlay HTML elements at 9 anchor points:
 * 1) Top Left
 * 2) Top Center
 * 3) Top Right
 * 4) Center Left
 * 5) Center
 * 6) Center Right
 * 7) Bottom Left
 * 8) Bottom Center
 * 9) Bottom Right
 *
 * @example You can use Angular2 'ng-content' selectors to position the items:
 *
 <fx-frame-layout>
 No selector, just display the content starting from the top left corner.

 <top-left>
 T-Left
 </top-left>

 <top-center>
 T-Cent
 </top-center>

 <top-right>
 T-Right
 </top-right>

 <center-left>
 C-Left
 </center-left>

 <center-center>
 C-Cent
 </center-center>

 <center-right>
 C-Right
 </center-right>

 <bottom-left>
 B-Left
 </bottom-left>

 <bottom-center>
 B-Cent
 </bottom-center>

 <bottom-right>
 B-Right
 </bottom-right>

 </fx-frame-layout>
 *
 */
@Component({
    selector: 'fx-frame-layout',
    template: `

<!-- The main container of the Frame layout -->
<div class="fx-block-container"
     [style.min-height]="minHeight"
     [style.max-height]="maxHeight"
     [style.height]="getHeight()"
     [style.min-width]="minWidth"
     [style.max-width]="maxWidth"
     [style.width]="width"
     [style.overflow-x]="overflowX"
     [style.overflow-y]="overflowY"     
     [style.margin]="margin"
>
  
  <!-- Any content of the frame layout -->
  <div class="fx-block-canvas" [style.padding]="padding">
    <ng-content></ng-content>
  </div>

  <!-- Top-Left Anchor -->
  <div class="fx-block-top-left">
    <ng-content select="top-left"></ng-content>
  </div>

  <!-- Top-Center Anchor -->
  <div class="fx-block-top-center">
    <ng-content select="top-center"></ng-content>  
  </div>
  
  <!-- Top-Right Anchor -->
  <div class="fx-block-top-right">
    <ng-content select="top-right"></ng-content>
  </div>  
 
  <!-- Center-Left Anchor -->  
  <div class="fx-block-center-left">
    <ng-content select="center-left"></ng-content>
  </div>

  <!-- Center-Center Anchor -->
  <div class="fx-block-center-center">
    <ng-content select="center-center"></ng-content>
  </div>

  <!-- Center-Right Anchor -->
  <div class="fx-block-center-right">
    <ng-content select="center-right"></ng-content>
  </div>      

  <!-- Bottom-Left Anchor -->
  <div class="fx-block-bottom-left">
    <ng-content select="bottom-left"></ng-content>
  </div>
  
  <!-- Bottom-Center Anchor -->
  <div class="fx-block-bottom-center">
    <ng-content select="bottom-center"></ng-content>  
  </div>

  <!-- Bottom-Right Anchor -->
  <div class="fx-block-bottom-right">
    <ng-content select="bottom-right"></ng-content>
  </div>
</div>
  `,
    styleUrls: ['../styles/abs-layout.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FrameLayoutComponent extends BaseLayout {}

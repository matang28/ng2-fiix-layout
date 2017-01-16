import {Component, ViewEncapsulation, Input} from "@angular/core";
import {BaseLayout} from "../commons/base-layout-params.class";

const HORIZONTAL_LAYOUT = "horizontal";
const VERTICAL_LAYOUT = "vertical";

/**
 * A linear layout is a layout that aligns all children in a single direction, vertically or horizontally.
 * You can specify the layout direction with the 'orientation' modifier.
 * The linear layout implementation relies on CSS Flex-Box so you can distribute the containing items
 * using flex-box CSS modifiers OR using the FlexSize directive (recommended).
 *
 * To avoid confusion of main/cross axis alignment the linear layout exposes two modifiers:
 * 1) Gravity-X - how the items should be layout in the x-axis.
 * 2) Gravity-Y - how the items should be layout in the y-axis.
 * The x,y axis will be converted based on the orientation of the layout.
 *
 * The values of the gravity modifiers are shortcuts for the 'real' flex-box values, so that:
 * 1) flex-start -> start
 * 2) flex-end -> end
 * 3) center -> center
 * 4) stretch -> fill
 * 5) baseline -> baseline
 * 6) space-between -> between
 * 7) space-around -> around
 *
 * @example This example code will create a layout with a sidebar (width 20%) and a content view (width 70%), the gravity-x on the parent layout
 * will distribute the remaining space (100-20-70=10%) around this items
 * so we getting something like this:
 * --------------------------------------------
 * |///+            +                     +///|
 * |///+            +                     +///|
 * |///+  Side bar  +    Content View     +///|
 * |///+    (20%)   +       (70%)         +///|
 * |///+            +                     +///|
 * |///+            +                     +///|
 * --------------------------------------------

 <fx-linear-layout
 [orientation]="'horizontal'"
 [min-h]="'720px'"
 [max-h]="'100vh'"
 [gravity-x]="'center'"
 [gravity-y]="'fill""
 >

 <fx-linear-layout style="background-color: red;"
 [flex]="'20%'"
 [orientation]="'vertical'"
 [h]
 >
 I'm a 20% column and I'm my children will be align vertically.
 </fx-linear-layout>

 <fx-linear-layout style="background-color: red;"
 [flex]="'70%'"
 [orientation]="'vertical'"
 [h]
 >
 I'm a 80% column and I'm my children will be align vertically.
 </fx-linear-layout>

 </fx-linear-layout>

 */
@Component({
    selector: 'fx-linear-layout',
    template: `
<div class="fx-flex-container fx-flex-item" 
     [ngClass]="getOrientationClass()"
     [style.min-height]="minHeight"
     [style.max-height]="maxHeight"
     [style.height]="getHeight()"
     [style.min-width]="minWidth"
     [style.max-width]="maxWidth"
     [style.width]="width"
     [style.overflow-x]="overflowX"
     [style.overflow-y]="overflowY"
     [style.padding]="padding"
     [style.margin]="margin"
  >
  <ng-content></ng-content>
</div>
  `,
    styles: [`
.fx-flex-container{
  box-sizing: border-box;
}

.fx-flex-item {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.fx-flex-item > div{
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}

.fx-flex-row{
  flex-direction: row;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
}

.fx-flex-column{
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
}

.fx-gravity-between{
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.fx-gravity-around{
  -webkit-justify-content: space-around;
  justify-content: space-around;
}

.fx-gravity-start{
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

.fx-gravity-end{
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}

.fx-gravity-center{
  -webkit-justify-content: center;
  justify-content: center;
}

.fx-align-start{
  align-items: flex-start;
  -webkit-align-items: flex-start;
}

.fx-align-end{
  align-items: flex-end;
  -webkit-align-items: flex-end;
}

.fx-align-center{
  align-items: center;
  -webkit-align-items: center;
}

.fx-align-stretch{
  align-items: stretch;
  -webkit-align-items: stretch;
}

.fx-align-baseline{
  align-items: baseline;
  -webkit-align-items: baseline;
}

.fx-wrap {
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}

.fx-nowrap {
  flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
}

`],
    encapsulation: ViewEncapsulation.Emulated
})
export class LinearLayoutComponent extends BaseLayout{

    /**
     * Defines the orientation of the layout
     * @type {string} can be either vertical or horizontal.
     */
    private _layoutOrientation: string = HORIZONTAL_LAYOUT;

    /**
     * Controls the flex box justify content parameter.
     */
    private _justifyContent: string = "fx-gravity-start";

    /**
     * Controls the flex box align items parameter.
     */
    private _alignItems: string = "fx-align-start";

    /**
     * Controls the flexbox wrap mode
     */
    private _wrap: string = "fx-nowrap";

    /**
     * Sets the value of the orientation
     * @param value 'vertical' or 'horizontal'
     */
    @Input("orientation")
    set layoutOrientation(value: string) {
        if(value==HORIZONTAL_LAYOUT || value==VERTICAL_LAYOUT){
            this._layoutOrientation = value;
        }
    }

    /**
     * Sets the gravity of the x-axis based on the layout orientation.
     */
    @Input("gravity-x")
    set gravityX(value: string){
        if(this._layoutOrientation==VERTICAL_LAYOUT){
            this.setAlignItems(value);
        }
        else{
            this.setJustifyContent(value);
        }
    }

    /**
     * Sets the gravity of the y-axis based on the layout orientation.
     */
    @Input("gravity-y")
    set gravityY(value: string){
        if(this._layoutOrientation==VERTICAL_LAYOUT){
            this.setJustifyContent(value);
        }
        else{
            this.setAlignItems(value);
        }
    }

    /**
     * Sets if the children should wrap when there is not enough space
     */
    @Input("wrap")
    set wrap(value:boolean){
        this._wrap = (value ? 'fx-wrap' : 'fx-nowrap');
    }

    private setAlignItems(value: string): void{
        switch (value){
            case "end":
                this._alignItems = "fx-align-end";
                break;
            case "center":
                this._alignItems = "fx-align-center";
                break;
            case "baseline":
                this._alignItems = "fx-gravity-baseline";
                break;
            case "fill":
                this._alignItems = "fx-align-stretch";
                break;
            default:
                this._alignItems = "fx-align-start";
                break;
        }
    }

    private setJustifyContent(value: string): void{
        switch (value){
            case "between":
                this._justifyContent = "fx-gravity-between";
                break;
            case "around":
                this._justifyContent = "fx-gravity-around";
                break;
            case "end":
                this._justifyContent = "fx-gravity-end";
                break;
            case "center":
                this._justifyContent = "fx-gravity-center";
                break;
            default:
                this._justifyContent = "fx-gravity-start";
                break;
        }
    }

    private getOrientationClass(): string{
        return `
            ${this._layoutOrientation==HORIZONTAL_LAYOUT ? "fx-flex-row" : "fx-flex-column"} 
            ${this._justifyContent} 
            ${this._alignItems} 
            ${this._wrap}
    `;
    }
}

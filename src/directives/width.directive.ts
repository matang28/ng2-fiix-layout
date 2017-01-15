import {Directive, HostBinding, Input} from "@angular/core";


/**
 * A directive to set an HTML element width.
 * If none is set the default is to match the parent width.
 */
@Directive({
    selector: '[w]'
})
export class WidthDirective{

    @Input('w')
    @HostBinding('style.width')
    w: string = '100%';

}

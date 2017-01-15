import {Directive, HostBinding, Input} from "@angular/core";

/**
 * A directive to set an HTML element height.
 * If none is set the default is to match the parent height.
 */
@Directive({
    selector: '[h]'
})
export class HeightDirective{

    @Input('h')
    @HostBinding('style.height')
    w: string = '100%';

}

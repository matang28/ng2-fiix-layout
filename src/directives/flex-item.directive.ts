import {Directive, Input, HostBinding, ElementRef} from "@angular/core";

/**
 * A directive to control flex items layout properties.
 */
@Directive({
    selector: '[flex]'
})
export class FlexItemDirective{

    /**
     * Controls the flex-basis property.
     * @type {string} size value (px, vh, vp, em, %, etc...)
     */
    @HostBinding('style.flex-basis')
    @HostBinding('style.-webkit-flex-basis')
    @Input('flex')
    basis: string = 'auto';

    /**
     * Controls the flex-grow property.
     * @type {number} positive integer.
     */
    @HostBinding('style.flex-grow')
    @HostBinding('style.-webkit-flex-grow')
    @Input()
    grow: number = 0;

    /**
     * Controls the flex-shrink property.
     * @type {number} positive integer
     */
    @HostBinding('style.flex-shrink')
    @HostBinding('style.-webkit-flex-shrink')
    @Input()
    shrink: number = 1;

    /**
     * Controls the flex align-self property.
     */
    @HostBinding('style.align-self')
    private _gravity: string = 'inherit';

    constructor(private el: ElementRef) {}

    @Input("gravity")
    set gravity(value: string) {
        switch (value){
            case 'start':
                this._gravity = 'flex-start';
                break;
            case 'center':
                this._gravity = 'center';
                break;
            case 'end':
                this._gravity = 'flex-end';
                break;
            case 'fill':
                this._gravity = 'stretch';
                break;
            case 'baseline':
                this._gravity = 'baseline';
                break;
            default:
                this._gravity = 'inherit';
                break;
        }
    }
}

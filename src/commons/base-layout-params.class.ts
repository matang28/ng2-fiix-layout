import {LayoutParams} from "./layout-params.interface";
import {Input} from "angular2/src/core/metadata";

/**
 * An abstract class to implement layout properties defaults and angular binding.
 */
export abstract class BaseLayout implements LayoutParams{

    @Input('height')
    height: string = '100%';

    @Input('width')
    width: string = '100%';

    @Input('max-h')
    maxHeight: string = '100%';

    @Input('max-w')
    maxWidth: string = '100%';

    @Input('min-h')
    minHeight: string = '100%';

    @Input('min-w')
    minWidth: string = '100%';

    @Input('padding')
    padding: string = '0';

    @Input('margin')
    margin: string = '0';

    overflowX: string = 'hidden';

    overflowY: string = 'hidden';

    @Input("scroll-y")
    set scrollableY(value: boolean){
        this.overflowY = (value ? 'auto' : 'hidden');
    }

    @Input("scroll-x")
    set scrollableX(value: boolean){
        this.overflowX = (value ? 'auto' : 'hidden');
    }

    /**
     * A helper method to get the height based on the max-height.
     */
    getHeight(): string{

        if(this.maxHeight!='100%' && this.height=='100%'){
            return this.maxHeight;
        }

        return this.height;
    }
}

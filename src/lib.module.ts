import {NgModule, ModuleWithProviders} from "@angular/core";
import {LinearLayoutComponent} from "./components/linear-layout.component";
import {FrameLayoutComponent} from "./components/frame-layout.component";
import {WidthDirective} from "./directives/width.directive";
import {HeightDirective} from "./directives/height.directive";
import {FlexItemDirective} from "./directives/flex-item.directive";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FlexItemDirective,
        HeightDirective,
        WidthDirective,
        LinearLayoutComponent,
        FrameLayoutComponent
    ],
    exports: [
        FlexItemDirective,
        HeightDirective,
        WidthDirective,
        LinearLayoutComponent,
        FrameLayoutComponent
    ],
    schemas: []
})
export class FiixLayoutModule {

    /**
     * Gets the module to load for app-root module.
     */
    static forRoot(): ModuleWithProviders  {
        return {
            ngModule: FiixLayoutModule,
            providers: []
        };
    }
}

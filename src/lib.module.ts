import {NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LinearLayoutComponent} from "./components/linear-layout.component";
import {FrameLayoutComponent} from "./components/frame-layout.component";
import {WidthDirective} from "./directives/width.directive";
import {HeightDirective} from "./directives/height.directive";
import {FlexItemDirective} from "./directives/flex-item.directive";

/**
 * Internal Components should be declared here.
 */
const INTERNAL_COMPONENTS = [];

/**
 * Exported Components should be declared here.
 */
const EXPORTED_COMPONENTS = [
    LinearLayoutComponent,
    FrameLayoutComponent
];

/**
 * Internal Directives should be declared here.
 */
const INTERNAL_DIRECTIVES = [];

/**
 * Exported Directives should be declared here.
 */
const EXPORTED_DIRECTIVES = [
    FlexItemDirective,
    HeightDirective,
    WidthDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...INTERNAL_DIRECTIVES,
        ...EXPORTED_DIRECTIVES,
        ...INTERNAL_COMPONENTS,
        ...EXPORTED_COMPONENTS
    ],
    exports: [
        ...EXPORTED_DIRECTIVES,
        ...EXPORTED_COMPONENTS
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

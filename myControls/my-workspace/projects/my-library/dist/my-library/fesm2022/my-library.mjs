import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class LibraryComponent {
    /** @nocollapse */ static ɵfac = function LibraryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LibraryComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: LibraryComponent, selectors: [["my-library-library-component"]], decls: 12, vars: 0, consts: [[1, "library-component-container"]], template: function LibraryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, "Welcome to My Library Component!");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(3, "p");
            i0.ɵɵtext(4, "This is a reusable Angular library component.");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "ul")(6, "li");
            i0.ɵɵtext(7, "Easy to use");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(8, "li");
            i0.ɵɵtext(9, "Customizable");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(10, "li");
            i0.ɵɵtext(11, "Ready for integration");
            i0.ɵɵdomElementEnd()()();
        } }, styles: ["h1[_ngcontent-%COMP%]{color:#1976d2;font-family:Arial,sans-serif}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LibraryComponent, [{
        type: Component,
        args: [{ selector: 'my-library-library-component', template: "\r\n<div class=\"library-component-container\">\r\n\t<h1>Welcome to My Library Component!</h1>\r\n\t<p>This is a reusable Angular library component.</p>\r\n\t<ul>\r\n\t\t<li>Easy to use</li>\r\n\t\t<li>Customizable</li>\r\n\t\t<li>Ready for integration</li>\r\n\t</ul>\r\n</div>\r\n", styles: ["h1{color:#1976d2;font-family:Arial,sans-serif}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LibraryComponent, { className: "LibraryComponent", filePath: "lib/library-component/library-component.component.ts", lineNumber: 8 }); })();

class MyLibraryModule {
    /** @nocollapse */ static ɵfac = function MyLibraryModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MyLibraryModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MyLibraryModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibraryModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, LibraryComponent],
                exports: [LibraryComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyLibraryModule, { imports: [CommonModule, LibraryComponent], exports: [LibraryComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { LibraryComponent, MyLibraryModule };
//# sourceMappingURL=my-library.mjs.map

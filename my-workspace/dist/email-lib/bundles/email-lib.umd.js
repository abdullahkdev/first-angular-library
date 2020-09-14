(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('email-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['email-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/email-lib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmailLibService = /** @class */ (function () {
        function EmailLibService() {
        }
        EmailLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EmailLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ EmailLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EmailLibService_Factory() { return new EmailLibService(); }, token: EmailLibService, providedIn: "root" });
        return EmailLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/email-lib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmailLibComponent = /** @class */ (function () {
        function EmailLibComponent() {
        }
        /**
         * @return {?}
         */
        EmailLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        EmailLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-email-lib',
                        template: "\n    <p>\n      email-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        EmailLibComponent.ctorParameters = function () { return []; };
        return EmailLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/email-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmailLibModule = /** @class */ (function () {
        function EmailLibModule() {
        }
        EmailLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [EmailLibComponent],
                        imports: [],
                        exports: [EmailLibComponent]
                    },] }
        ];
        return EmailLibModule;
    }());

    exports.EmailLibComponent = EmailLibComponent;
    exports.EmailLibModule = EmailLibModule;
    exports.EmailLibService = EmailLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=email-lib.umd.js.map

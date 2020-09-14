import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/email-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmailLibService = /** @class */ (function () {
    function EmailLibService() {
    }
    EmailLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EmailLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ EmailLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EmailLibService_Factory() { return new EmailLibService(); }, token: EmailLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [EmailLibComponent],
                    imports: [],
                    exports: [EmailLibComponent]
                },] }
    ];
    return EmailLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: email-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EmailLibComponent, EmailLibModule, EmailLibService };
//# sourceMappingURL=email-lib.js.map

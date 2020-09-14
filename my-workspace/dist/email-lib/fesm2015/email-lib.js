import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/email-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmailLibService {
    constructor() { }
}
EmailLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EmailLibService.ctorParameters = () => [];
/** @nocollapse */ EmailLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EmailLibService_Factory() { return new EmailLibService(); }, token: EmailLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/email-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmailLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EmailLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-email-lib',
                template: `
    <p>
      email-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
EmailLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/email-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmailLibModule {
}
EmailLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EmailLibComponent],
                imports: [],
                exports: [EmailLibComponent]
            },] }
];

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

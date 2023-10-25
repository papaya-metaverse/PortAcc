"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLAIM_TYPES = exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
exports.CLAIM_TYPES = {
    sid: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid',
};
//# sourceMappingURL=constants.js.map
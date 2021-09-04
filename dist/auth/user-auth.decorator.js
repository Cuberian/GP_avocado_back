"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqUser = void 0;
const common_1 = require("@nestjs/common");
exports.ReqUser = common_1.createParamDecorator((data, req) => {
    console.log(req.user);
    return req.user;
});
//# sourceMappingURL=user-auth.decorator.js.map
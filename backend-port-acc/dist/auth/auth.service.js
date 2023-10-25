"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_response_dto_1 = require("../dto/user-response.dto");
const config_1 = require("@nestjs/config");
const constants_1 = require("./constants");
const user_service_1 = require("../user/user.service");
const utils_service_1 = require("../utils/utils.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(configService, usersService, utilsService, jwtService) {
        this.configService = configService;
        this.usersService = usersService;
        this.utilsService = utilsService;
        this.jwtService = jwtService;
    }
    async registerExt(registrationData) {
        let existingUser = await this.usersService.findByEmail(registrationData.email);
        if (existingUser != null) {
            const tokens = this.getTokens(existingUser);
            await this.usersService.updateRefreshToken(existingUser.id, await this.utilsService.hash(tokens.refreshToken));
            return {
                user: user_response_dto_1.UserResponseDto.fromEntity(existingUser),
                tokens: tokens,
            };
        }
        await this.usersService.validateUserDuplication(registrationData.email, registrationData.nickname);
        const { pubkey, privatekey } = await this.usersService.generateWallet();
        let newUser = {
            id: 0,
            pubkey: pubkey,
            privatekey: privatekey,
            email: registrationData.email,
            extAuthAccessToken: registrationData.accessToken,
        };
        const user = await this.usersService.save(newUser);
        const tokens = this.getTokens(user);
        await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            user: user_response_dto_1.UserResponseDto.fromEntity(user),
            tokens: tokens,
        };
    }
    getTokens(user) {
        const payload = {};
        payload[constants_1.CLAIM_TYPES.sid] = user.id;
        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get("JWT_ACCESS_SECRET"),
            expiresIn: '1d',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get("JWT_REFRESH_SECRET"),
            expiresIn: '7d',
        });
        return {
            accessToken,
            refreshToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        user_service_1.UserService,
        utils_service_1.UtilsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
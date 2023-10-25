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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const utils_service_1 = require("../utils/utils.service");
const constants_1 = require("../auth/constants");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_response_dto_1 = require("../dto/user-response.dto");
const ethers_1 = require("ethers");
let UserService = class UserService {
    constructor(userRepository, jwtService, configService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUserDuplication(email, errorMessage = 'email already exists') {
        if (email) {
            const userWithSameEmail = await this.userRepository.exist({
                where: [{ email }],
            });
            if (userWithSameEmail)
                utils_service_1.UtilsService.throwHttpException(common_1.HttpStatus.FORBIDDEN, errorMessage);
        }
    }
    async generateWallet() {
        const provider = await ethers_1.ethers.getDefaultProvider(this.configService.get("PROVIDER"));
        const wallet = await ethers_1.ethers.Wallet.createRandom(provider);
        return {
            pubkey: wallet.address,
            privatekey: wallet.privateKey
        };
    }
    async existByEmail(email) {
        return this.userRepository.exist({
            where: { email },
        });
    }
    async findByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
        });
    }
    async findByIds(ids) {
        return this.userRepository.findBy({ id: (0, typeorm_2.In)(ids) });
    }
    async findById(id) {
        return this.userRepository.findOne({
            where: { id: (0, typeorm_2.Equal)(id) },
        });
    }
    async getUserById(userId) {
        const user = await this.findById(userId);
        return user_response_dto_1.UserResponseDto.fromEntity(user);
    }
    async save(user) {
        return this.userRepository.save(user);
    }
    async getUserByToken(token) {
        const payload = this.jwtService.decode(token);
        const id = payload[constants_1.CLAIM_TYPES.sid];
        return user_response_dto_1.UserResponseDto.fromEntity(await this.findById(id));
    }
    async updateRefreshToken(userId, refreshToken) {
        return await this.userRepository.update(userId, {
            refreshToken: refreshToken,
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], UserService);
//# sourceMappingURL=user.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = void 0;
class UserResponseDto {
    static fromEntity(user, hasAvatar = true, hasBanner = true) {
        const dto = new UserResponseDto();
        dto.id = user.id;
        dto.email = user.email;
        dto.pubkey = user.pubkey;
        return dto;
    }
}
exports.UserResponseDto = UserResponseDto;
//# sourceMappingURL=user-response.dto.js.map
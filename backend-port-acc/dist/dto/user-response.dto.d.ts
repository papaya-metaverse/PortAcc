import { User } from '../user/user.entity';
export declare class UserResponseDto {
    id: number;
    email: string;
    pubkey: string;
    static fromEntity(user: User | UserResponseDto, hasAvatar?: boolean, hasBanner?: boolean): UserResponseDto;
}

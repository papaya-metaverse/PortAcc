import { User } from '../user/user.entity';
export class UserResponseDto {
  id: number;
  email: string;
  pubkey: string

  public static fromEntity(user: User | UserResponseDto, hasAvatar: boolean = true, hasBanner: boolean = true): UserResponseDto {
    const dto = new UserResponseDto();
    dto.id = user.id;
    dto.email = user.email;
    dto.pubkey = user.pubkey;
    return dto;
  }
}
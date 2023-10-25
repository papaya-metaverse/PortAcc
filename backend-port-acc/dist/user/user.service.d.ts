import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from "@nestjs/config";
import { UserResponseDto } from 'src/dto/user-response.dto';
export declare class UserService {
    private userRepository;
    private jwtService;
    private configService;
    constructor(userRepository: Repository<User>, jwtService: JwtService, configService: ConfigService);
    validateUserDuplication(email: any, errorMessage?: string): Promise<void>;
    generateWallet(): Promise<{
        pubkey: string;
        privatekey: string;
    }>;
    existByEmail(email: any): Promise<boolean>;
    findByEmail(email: string): Promise<User | undefined>;
    findByIds(ids: number[]): Promise<User[] | undefined>;
    findById(id: number): Promise<User | undefined>;
    getUserById(userId: number): Promise<UserResponseDto>;
    save(user: any): Promise<User | undefined>;
    getUserByToken(token: string): Promise<UserResponseDto>;
    updateRefreshToken(userId: any, refreshToken: string): Promise<import("typeorm").UpdateResult>;
}

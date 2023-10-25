import { UserResponseDto } from '../dto/user-response.dto';
import { ConfigService } from "@nestjs/config";
import { ExtRegistrationDto } from "../dto/ext-registration.dto";
import { UserService } from 'src/user/user.service';
import { UtilsService } from 'src/utils/utils.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private configService;
    private usersService;
    private utilsService;
    private jwtService;
    constructor(configService: ConfigService, usersService: UserService, utilsService: UtilsService, jwtService: JwtService);
    registerExt(registrationData: ExtRegistrationDto): Promise<{
        user: UserResponseDto;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    private getTokens;
}

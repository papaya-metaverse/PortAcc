import {HttpException, HttpStatus, Inject, Injectable, UnauthorizedException} from '@nestjs/common';

import {User} from '../user/user.entity';

import {UserResponseDto} from '../dto/user-response.dto';

import {ConfigService} from "@nestjs/config";
import {CLAIM_TYPES} from './constants';
import {ExtRegistrationDto} from "../dto/ext-registration.dto";
import { UserService } from 'src/user/user.service';
import { UtilsService } from 'src/utils/utils.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

  constructor(
    private configService: ConfigService,
    private usersService: UserService,
    private utilsService: UtilsService,
    private jwtService: JwtService,
  ) {}

  async registerExt(registrationData: ExtRegistrationDto) {
    let existingUser = await this.usersService.findByEmail(registrationData.email);
    if (existingUser != null) {
      const tokens = this.getTokens(existingUser);
      await this.usersService.updateRefreshToken(existingUser.id, await this.utilsService.hash(tokens.refreshToken));
      
      return {
        user: UserResponseDto.fromEntity(existingUser),
        tokens: tokens,
      };
    }

    await this.usersService.validateUserDuplication(registrationData.email, registrationData.nickname);
    const {pubkey, privatekey} = await this.usersService.generateWallet()
    //TODO Keygen generation
    let newUser: User = {
        id: 0,
        pubkey: pubkey,
        privatekey: privatekey,
        email: registrationData.email,
        extAuthAccessToken: registrationData.accessToken,
    }

    const user = await this.usersService.save(newUser);

    const tokens = this.getTokens(user);
    await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      user: UserResponseDto.fromEntity(user),
      tokens: tokens,
    };
}

  private getTokens(user: User) {
    const payload = {};
    payload[CLAIM_TYPES.sid] = user.id;

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>("JWT_ACCESS_SECRET"),
      expiresIn: '1d',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>("JWT_REFRESH_SECRET"),
      expiresIn: '7d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

}

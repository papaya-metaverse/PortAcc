import {forwardRef, HttpException, HttpStatus, Inject, Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Equal, ILike, In, Repository} from 'typeorm';
import { User } from './user.entity';
import { UtilsService } from '../utils/utils.service';
import { CLAIM_TYPES } from '../auth/constants';
import { JwtService } from '@nestjs/jwt';
import {ConfigService} from "@nestjs/config";
import { UserResponseDto } from 'src/dto/user-response.dto';
import { Wallet } from 'ethers';
import { ethers } from 'ethers';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
        private configService: ConfigService,
  ) {
  }

  async validateUserDuplication(email, errorMessage = 'email already exists') {
    if (email) {
      const userWithSameEmail = await this.userRepository.exist({
        where: [{ email }],
      });
      if (userWithSameEmail)
        UtilsService.throwHttpException(HttpStatus.FORBIDDEN, errorMessage);  
    }  
  }

  async generateWallet() {
    const provider = await ethers.getDefaultProvider( this.configService.get<string>("PROVIDER"));
    const wallet = await ethers.Wallet.createRandom(provider)
    return {
        pubkey: wallet.address,
        privatekey: wallet.privateKey
    }
  }


  async existByEmail(email): Promise<boolean> {
    return this.userRepository.exist({
      where: { email },
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async findByIds(ids: number[]): Promise<User[] | undefined> {
    return this.userRepository.findBy({ id: In(ids) });
  }

  async findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { id: Equal(id) },
    });
  }

  async getUserById(userId: number): Promise<UserResponseDto> {
    const user: User = await this.findById(userId);
    return UserResponseDto.fromEntity(user);
  }

  async save(user: any): Promise<User | undefined> {
    return this.userRepository.save(user);
  }

  getUserByToken(token: string) {
    const payload = this.jwtService.decode(token);
    const id = payload[CLAIM_TYPES.sid];
    return this.findById(id);
  }

  async updateRefreshToken(userId, refreshToken: string) {
    return await this.userRepository.update(userId, {
      refreshToken: refreshToken,
    });
  }
}

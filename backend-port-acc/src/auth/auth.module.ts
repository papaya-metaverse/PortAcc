import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UtilsModule } from '../utils/utils.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {GoogleStrategy} from "./google-auth.guard";
import {JwtStrategy} from "./jwt-strategy";

@Module({
  imports: [
    UserModule,
    PassportModule,
    UtilsModule,
    ConfigModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(configurationService: ConfigService){
        return {
          secret: configurationService.get<string>("JWT_ACCESS_SECRET"),
          signOptions: { expiresIn: '60m' },
        }
      }
    }),
  ],
  providers: [AuthService, GoogleStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

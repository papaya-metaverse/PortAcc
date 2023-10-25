import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UtilsModule } from '../utils/utils.module';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import {ConfigService} from "@nestjs/config";
import {AuthModule} from "../auth/auth.module";
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UtilsModule,
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
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}

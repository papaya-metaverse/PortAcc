import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Logger,
    Param,
    Post,
    Query,
    Req,
    Res,
    UseGuards,
  } from '@nestjs/common';

  import {AuthService} from './auth.service';
  import {AuthGuard} from "@nestjs/passport";
  import {ExtRegistrationDto} from "../dto/ext-registration.dto";
  import {Response} from "express";
  import {ConfigService} from "@nestjs/config";
  import {ApiOkResponse, ApiTags} from '@nestjs/swagger';

  @ApiTags('auth')
  @Controller('auth')
  export class AuthController {
    
    constructor(
        private authService: AuthService,
        private configService: ConfigService
    ) 
    {}

    @UseGuards(AuthGuard('google'))
    @Get('google')
    @ApiOkResponse()
    async googleAuth(@Req() req) {}
      
    @Get('callback/google')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req, @Res({ passthrough: true }) response: Response) {
  
      let registrationData: ExtRegistrationDto = {
        nickname: req.user.firstName + req.user.lastName,
        accessToken: req.user.accessToken,
        email: req.user.email,

      }
      let result = await this.authService.registerExt(registrationData);
      response.cookie('access-token', result.tokens.accessToken, {
        maxAge: 60000,
        sameSite: true,
        secure: false,
      });
      response.cookie('refresh-token', result.tokens.refreshToken, {
        maxAge: 60000,
        sameSite: true,
        secure: false,
      });
      const extAuthSuccess = this.configService.get<string>('EXTERNAL_AUTH_SUCCESS');
      response.redirect(extAuthSuccess)
    }
}
import {
    Body,
    Controller,
    Delete, forwardRef,
    Get, HttpException, Inject, Logger,
    Param,
    Post,
    Put, Query,
    Req, UploadedFile,
    UseGuards, UseInterceptors,
  } from '@nestjs/common';
  import {ApiBearerAuth, ApiOkResponse, ApiTags, refs} from '@nestjs/swagger';
  import { UserService } from './user.service';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  
  @ApiTags('user')
  @Controller('user')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth("JWT")
  export class UserController {
    constructor(
        private userService: UserService,
    ) {}
  
    @Get('current')
    async getCurrentUser(@Req() req) {
      const [type, token] = req.headers.authorization?.split(' ') ?? [];
      const userByToken = await this.userService.getUserByToken(token);
      return userByToken;
    }
  
    @Get(':userId')
    getUser(@Param('userId') userId: number) {
      return this.userService.getUserById(userId);
    }
}
  
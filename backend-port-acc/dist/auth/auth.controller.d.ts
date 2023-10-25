import { AuthService } from './auth.service';
import { Response } from "express";
import { ConfigService } from "@nestjs/config";
export declare class AuthController {
    private authService;
    private configService;
    constructor(authService: AuthService, configService: ConfigService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any, response: Response): Promise<void>;
}

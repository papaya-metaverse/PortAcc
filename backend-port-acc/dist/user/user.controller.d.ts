import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getCurrentUser(req: any): Promise<import("../dto/user-response.dto").UserResponseDto>;
    getUser(userId: number): Promise<import("../dto/user-response.dto").UserResponseDto>;
}

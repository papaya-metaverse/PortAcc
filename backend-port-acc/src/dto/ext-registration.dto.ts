import {IsEmail, IsNotEmpty, Length, MinLength} from "class-validator";

export class ExtRegistrationDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @MinLength(6)
    accessToken: string;
    @IsNotEmpty()
    @Length(3, 20)
    nickname: string;
}
import { IsNumber, IsString } from "class-validator";
import { JwtPermission } from "../interfaces/jwtPermission.interface";

export class LoginResponseDto {

    @IsNumber()
    id: number;

    @IsString()
    username: string;

    userType: string;

    permission: JwtPermission[];

    @IsString()
    accessToken: string;

    @IsNumber()
    expireIn: number;
}
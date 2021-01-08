import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class LoginRequestDto {

    @ApiProperty({
        example: 'example@example.com',
        description: 'User email'
    })  
    @IsString()
    readonly username: string;

    @ApiProperty({
        example: 'ASJHD78d#',
        description: 'User password'
    })
    @IsString()
    readonly password: string;
}
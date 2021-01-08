import { BaseJwtPayload } from "./baseJwtPayload.interface";

export interface JwtPayload extends BaseJwtPayload{
    accessToken: string;
    expireIn: number;
} 
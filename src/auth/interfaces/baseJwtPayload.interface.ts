import { JwtPermission } from "./jwtPermission.interface";

export interface BaseJwtPayload{
    id: number;
    username: string;
    permission: JwtPermission[];
}
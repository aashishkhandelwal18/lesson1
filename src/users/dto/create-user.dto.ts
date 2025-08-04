import { IsEmail , IsEnum , IsNotEmpty , IsString } from "class-validator";
export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name : string;
    @IsEmail()
    email : string;
    @IsEnum(['ENGINEER' , 'ADMIN' , 'INTERN'] , {
        message : 'Valid role is required'
    })
    role: 'ENGINEER' | 'ADMIN' | 'INTERN'
} 
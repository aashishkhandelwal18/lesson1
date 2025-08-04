import { Injectable , NotFoundException } from '@nestjs/common';


import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
            {
                id : 1,
                name : "John Doe",
                email : "John@gmail.com",
                role : "INTERN"
            } , {
                id : 2,
                name : "Alice",
                email : "alice@gmail.com",
                role : "ENGINNER"
            } , {
                id : 3,
                name : "Justin",
                email : "justin@gmail.com",
                role : "ADMIN"
            } , {
                id : 4,
                name : "Krish",
                email : "krish@gmail.com",
                role : "ENGINNER"
           }
       ]

       findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){

            const rolesAr = this.users.filter(user => user.role === role)
            if(rolesAr.length === 0) throw new NotFoundException('User role is unable here')
            return rolesAr
        }

        return this.users
       }    

       findOne(id: number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException("User is unable here")
        return user
       }

       create(createUserDto: CreateUserDto){
            const userByHighestId = [... this.users].sort((a,b) => b.id - a.id)
            const newUser = {
                id : userByHighestId[0].id + 1,  
                ...createUserDto
            }
            this.users.push(newUser)
            return newUser
       }

       update(id: number , updateUserDto:UpdateUserDto){
            this.users = this.users.map(user => {
                if(user.id === id){
                     return { ...user , ...updateUserDto }
                }
                return user
            })
            return this.findOne(id)
       }

       delete(id: number){
        const removeUser = this.findOne(id)
        this.users = this.users.filter(user => user.id!==id)
        return removeUser
       }
}

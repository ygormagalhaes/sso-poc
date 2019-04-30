import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class SsoService {

    private readonly users: Map<string, UserDTO> = new Map();

    add(user: UserDTO) {
        this.users.set(user.login, user);
        return user.login;
    }

    get(login: string): UserDTO {
        return this.users.get(login);
    }
}

import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class SsoService {

    private readonly users: Map<number, UserDTO> = new Map();

    add(user: UserDTO) {
        const key = new Date().getUTCMilliseconds();
        this.users.set(key, user);
        return key;
    }

    get(key: number): UserDTO {
        const user = this.users.get(key);
        if (!user) {
            throw new Error('Usuário não está em cache.');
        }
        return user;
    }
}

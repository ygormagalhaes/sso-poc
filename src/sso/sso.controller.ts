import { SsoService } from './sso.service';
import { UserDTO } from './user.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('sso')
export class SsoController {

    constructor(private readonly ssoService: SsoService) {}

    @Post()
    login(@Body() user: UserDTO) {
        return this.ssoService.add(user);
    }
}

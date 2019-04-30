import { SsoService } from './sso.service';
import { UserDTO } from './user.dto';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';

@Controller('sso')
export class SsoController {

    constructor(private readonly ssoService: SsoService) {}

    @Post()
    async login(@Body() user: UserDTO) {
        return this.ssoService.add(user);
    }

    @Get(':key')
    async get(@Param('key') key: number): Promise<UserDTO> {
        return this.ssoService.get(key);
    }
}

import { UserDTO } from './user.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('sso')
export class SsoController {

    @Post()
    login(@Body() user: UserDTO) {

    }
}

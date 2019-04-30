import { UserDTO } from './user.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { SsoService } from './sso.service';

describe('SsoService', () => {
  let service: SsoService;
  let user: UserDTO;

  beforeAll(() => {
    user = {
      login: 'ygor',
      senha: '123',
    };
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SsoService],
    }).compile();

    service = module.get<SsoService>(SsoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve adicionar um novo usuário ao cache', () => {
    service.add(user);
    expect(service.get(user.login)).toEqual(user);
  });

});

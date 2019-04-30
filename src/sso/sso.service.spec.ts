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

  it('deve adicionar um novo usuário ao cache', () => {
    const key = service.add(user);
    expect(service.get(key)).toEqual(user);
  });

  it('deve lançar uma exceção caso não exista um usuário com a key especificada', () => {
    expect(() => {
      service.get(123);
    }).toThrowError();
  });

});

import { SsoService } from './sso.service';
import { Test, TestingModule } from '@nestjs/testing';
import { SsoController } from './sso.controller';

describe('Sso Controller', () => {
  let controller: SsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsoController],
      providers: [SsoService],
    }).compile();

    controller = module.get<SsoController>(SsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

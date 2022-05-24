import { Test, TestingModule } from '@nestjs/testing';
import { FillingController } from './filling.controller';
import { FillingService } from './filling.service';

describe('FillingController', () => {
  let controller: FillingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FillingController],
      providers: [FillingService],
    }).compile();

    controller = module.get<FillingController>(FillingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { LupaComponentsModule } from './lupa-components.module';

describe('Go1ComponentsModule', () => {
  let go1ComponentsModule: LupaComponentsModule;

  beforeEach(() => {
    go1ComponentsModule = new LupaComponentsModule();
  });

  it('should create an instance', () => {
    expect(go1ComponentsModule).toBeTruthy();
  });
});

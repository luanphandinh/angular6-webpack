import { CommonComponentsModule } from './common-components.module';

describe('Go1ComponentsModule', () => {
  let go1ComponentsModule: CommonComponentsModule;

  beforeEach(() => {
    go1ComponentsModule = new CommonComponentsModule();
  });

  it('should create an instance', () => {
    expect(go1ComponentsModule).toBeTruthy();
  });
});

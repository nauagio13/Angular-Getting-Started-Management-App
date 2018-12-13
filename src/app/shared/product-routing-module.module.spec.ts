import { ProductRoutingModuleModule } from './product-routing-module.module';

describe('ProductRoutingModuleModule', () => {
  let productRoutingModuleModule: ProductRoutingModuleModule;

  beforeEach(() => {
    productRoutingModuleModule = new ProductRoutingModuleModule();
  });

  it('should create an instance', () => {
    expect(productRoutingModuleModule).toBeTruthy();
  });
});

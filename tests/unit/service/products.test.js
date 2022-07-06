const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../services/products');
const productsModel = require('../../../models/products');

describe('createProductService insere produto no DB', () => {
  const payloadProduct = {
    name: 'sabão de coco'
  };

  const response = {
    id: 1,
    name: 'sabão de coco'
  };

  before(async () => {
    const modelsResponse = 1;
    sinon.stub(productsModel, 'addProductModel').resolves(modelsResponse);
  });

  after(async () => {
    productsModel.addProductModel.restore();
  });

  it('retorna um objeto', async () => {
    const response = await productsService.createProductService(payloadProduct);
    expect(response).to.be.a('object');
  });

  it('retorna um objeto com as propiedades nome e id', async () => {
    const response = await productsService.createProductService(payloadProduct);
    expect(response).to.have.property('id');
    expect(response).to.have.property('name');
  })

  it('nome e id do objeto correspondem ao produto adicionado', async () => {
    const response = await productsService.createProductService(payloadProduct);
    expect(response.name).to.equal('sabão de coco');
    expect(response.id).to.equal(1);
  })
})
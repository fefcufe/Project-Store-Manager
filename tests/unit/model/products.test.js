const { expect } = require('chai');
const productsModel = require('../../../models/products');
const sinon = require('sinon');
const connection = require('../../../models/connection');

describe(' addProductModel insere um novo produto no BD', () => {
  const payloadProduct = {
    name: 'sabão de coco'
  };

  before(async () => {
    const executeResponse = [{ insertedId: 1 }];
    sinon.stub(connection, 'execute').resolves(executeResponse);
  })

  after(async () => {
    connection.execute.restore();
  })


  describe('produto é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await productsModel.addProductModel(payloadProduct)
      expect(response).to.be.a('object');
      
    });

    it('objeto retornado possui id e nome do produto adicionado', async () => {
      const response = await productsModel.addProductModel(payloadProduct);
      expect(response).to.have.property('id').to.equal(1);
      expect(response).to.have.property('name');
    })
  });

});
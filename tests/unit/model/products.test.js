const { expect } = require('chai');
const productsModel = require('../../../models/products');
const sinon = require('sinon');
const connection = require('../../../models/connection');

describe(' addProductModel insere um novo produto no BD', () => {
  const payloadProduct = {
    name: 'sabão de coco'
  };

  before( async () => {
    const executeResponse = [{ insertId: 1 }];
    sinon.stub(connection, 'execute').resolves(executeResponse);
  })

  after( async () => {
    connection.execute.restore();
  })


  describe('quando existe um produto', () => {
    
    it('retorna o id gerado', async () => {
      const response = await productsModel.addProductModel(payloadProduct)
      expect(response).to.be.equal(1);
    });
  });
});
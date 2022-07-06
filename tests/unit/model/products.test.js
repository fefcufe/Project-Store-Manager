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

describe('getAllProducts', () => {
  
  describe('possui produtos', () => {
    const executeResponse =
    [
      [
        {
          "id": 1,
          "name": "Martelo de Thor",
        },
        {
          "id": 2,
          "name": "Traje de encolhimento",
        }
      ]
    ];
  
    before(async () => {
      sinon.stub(connection, 'execute').resolves(executeResponse);
    });

    after(async () => {
      connection.execute.restore();
    })

    it('retorna um array de objetos', async () => {

      const response = await productsModel.getAllProducts();
      expect(response).to.be.a('array').with.lengthOf(2);
    });
  });

  describe('não possui produtos', () => {
    const executeResponseEmpty = [[]];

    before(async () => {
      sinon.stub(connection, 'execute').resolves(executeResponseEmpty);
    });

    after(async () => {
      connection.execute.restore();
    })

    it('retorna um array vazio', async () => {
      const response = await productsModel.getAllProducts();
      expect(response).to.be.empty;
    });
  })
})
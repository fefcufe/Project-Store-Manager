const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../controllers/products');
const productsService = require('../../../services/products');

describe('addNewProduct', () => {
  const response = {};
  const request = {};
  const badRequest = { message: '"name" is required' }
  const unprocessableEntity = { message: '"name" length must be at least 5 characters long' }

  describe('quando é chamada com payload vazio', () => {

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    })

    it('controller é chamado com código 400', async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('resposta é um objeto com mensagem de erro correta', async () => {
      await productsController.addNewProduct(request, response);
      expect(response.json.calledWith(badRequest)).to.be.equal(true);
    })
  })

  describe('quando é chamada com payload inválido', () => {
    before(() => {
      request.body = {
        name: 'óleo',
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    })

    it('controller é chamado com código 422', async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(422)).to.be.equal(true);
    });

    it('resposta é um objeto com mensagem de erro correta', async () => {
      await productsController.addNewProduct(request, response);
      expect(response.json.calledWith(unprocessableEntity)).to.be.equal(true);
    });
  })

  describe('quando é chamada com payload válido', () => {
    const responseService = {
      id: 1,
      name: 'Jurupinga',
    }
    before(() => {
      request.body = {
        name: 'Jurupinga',
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'createProductService').resolves(responseService);
    });

    after(() => {
      productsService.createProductService.restore();
    });

    it('controller é chamado com código 201', async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('resposta é um objeto com nome e id do produto adicionado', async () => {
      await productsController.addNewProduct(request, response);
      expect(response.json.calledWith(responseService)).to.be.equal(true);
    })
  })
});

describe('getAllController', () => {
  const response = {};
  const request = {};
  const responseService =
  [
    {
      "id": 1,
      "name": "Martelo de Thor",
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
    }
  ];
  
  describe('quando não existem produtos no DB', () => {
    const responseService = [];

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAllService').resolves(responseService);
    });

    after(() => {
      productsService.getAllService.restore();
    });

    it('getAll é chamada com código 200', async () => {
      await productsController.getAllController(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('getAll retorna um objeto json com um array vazio', async () => {
      await productsController.getAllController(request, response);
      expect(response.json.calledWith(responseService)).to.be.equal(true);
    }) 
  })

  describe('quando existem produtos no DB', () => {
    const responseService =
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
  
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAllService').resolves(responseService);
    });

    after(() => {
      productsService.getAllService.restore();
    });

    it('getAll é chamada com código 200', async () => {
      await productsController.getAllController(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('getAll retorna um objeto json com um array com 2 objetos', async () => {
      await productsController.getAllController(request, response);
      expect(response.json.calledWith(responseService)).to.be.equal(true);
    }) 

  })
})
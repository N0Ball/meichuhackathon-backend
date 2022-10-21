const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const {
    getDepartments
} = require("../controller/department.controller");
const { departments } = require('./_dummy');

describe('Test /department', () => { 
    
    describe('Get Departments info', () => {

        it('Should return all departments when query with no arguments', async () => {
            const req = mockRequest({query:{}});
            const res = mockResponse();

            await getDepartments(req, res);

            sinon.assert.calledWith(res.status, 200);
            sinon.assert.calledOnce(res.json);
            expect(res.result).to.deep.includes({ did: 'D01', name: 'QA' });
            expect(res.result).to.deep.includes({ did: 'D02', name: 'RD' });
            expect(res.result).to.deep.includes({ did: 'D04', name: 'PM' });
        });

        
        it('Should return one departments when query with limit 1', async () => {
            const req = mockRequest({query:{
                limit: 1
            }});
            const res = mockResponse();

            await getDepartments(req, res);

            sinon.assert.calledWith(res.status, 200);
            sinon.assert.calledOnce(res.json);
            expect(res.result).eql([departments[0]]);
        });
        
        it('Should return departments execpt first when query with skip 1', async () => {
            const req = mockRequest({query:{
                skip: 1
            }});
            const res = mockResponse();

            await getDepartments(req, res);

            sinon.assert.calledWith(res.status, 200);
            sinon.assert.calledOnce(res.json);
            console.log(res.result, departments[1]);
            expect(res.result).to.not.deep.includes(departments[0]);
            expect(res.result).to.deep.includes(departments[1]);
            expect(res.result).to.deep.includes(departments[2]);
        });
        
        it('Should return second departments when query with skip 1, limit 1', async () => {
            const req = mockRequest({query:{
                skip: 1,
                limit: 1
            }});
            const res = mockResponse();

            await getDepartments(req, res);

            sinon.assert.calledWith(res.status, 200);
            sinon.assert.calledOnce(res.json);
            expect(res.result).to.eql([departments[1]]);
        });
        
        it('Should return empty array when result out of bound', async () => {
            const req = mockRequest({query:{
                skip: 10,
                limit: 100
            }});
            const res = mockResponse();

            await getDepartments(req, res);

            sinon.assert.calledWith(res.status, 200);
            sinon.assert.calledOnce(res.json);
            expect(res.result).to.eql([]);
        });

    });

});
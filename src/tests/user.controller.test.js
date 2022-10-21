const chai = require('chai');
const mongoose = require('mongoose');
const sinon = require('sinon');
const expect = chai.expect;

const {
    getUser
} = require("../controller/user.controller");

const connectDB = require('../db/connection');
const UserDB = require("../model/user.model");
const DepartmentDB = require("../model/department.model");
const departmentRelationsDB = require("../model/departmentRelation.model");

const {
    users,
    departments,
    departmentRelations
} = require("./dummy");

describe('Test /user', () => {

    const mockRequest = (data) => {
        return data
    }
    const mockResponse = () => {
        const res = {};
        res.result = sinon.stub().returns(res);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        return res;
    }
    const mockNext = () => {
        const next = sinon.stub();
        return next;
    }

    before( async () => {
        await connectDB();
        await UserDB.deleteMany({});
        await DepartmentDB.deleteMany({});
        await departmentRelationsDB.deleteMany({});
        await UserDB.insertMany(users);
        await DepartmentDB.insertMany(departments);
        await departmentRelationsDB.insertMany(departmentRelations);
    });

    after( () => {
        mongoose.disconnect();
    });

    describe('Test get user info with uid', () => {

        users.forEach( (user) => {
            it(`should return a valid user with uid ${user.uid}`, async () => {

                const req = mockRequest({
                    params: {
                        uid: user.uid
                    }
                });
                const res = mockResponse();
                const next = mockNext();

                await getUser(req, res, next);

                sinon.assert.calledOnce(next);

                expect(res.result).includes({uid: user.uid});

            });
        })

        it('should return null if no user found', async () => {

                const req = mockRequest({
                    params: {
                        uid: "FAKE_USER_UID"
                    }
                });
                const res = mockResponse();
                const next = mockNext();

                await getUser(req, res, next);

                sinon.assert.calledWith(res.status, 404);
                sinon.assert.calledOnce(res.json);
                sinon.assert.calledWith(res.json, {
                    detail: "User not found"
                });
        })

    });

    describe('Test get user info with rfid', () => {

        users.forEach( (user) => {
            it(`should return a valid user with rfid ${user.RFID_id}`, async () => {

                const req = mockRequest({
                    params: {
                        rfid: user.RFID_id
                    }
                });
                const res = mockResponse();
                const next = mockNext();

                await getUser(req, res, next);

                sinon.assert.calledOnce(next);

                expect(res.result).includes({uid: user.uid});

            });
        })

        it('should return null if no user found', async () => {

                const req = mockRequest({
                    params: {
                        rfid: "FAKE_USER_RFID"
                    }
                });
                const res = mockResponse();
                const next = mockNext();

                await getUser(req, res, next);

                sinon.assert.calledWith(res.status, 404);
                sinon.assert.calledOnce(res.json);
                sinon.assert.calledWith(res.json, {
                    detail: "User not found"
                });
        })

    });

})
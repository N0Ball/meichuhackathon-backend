const mongoose = require('mongoose');
const sinon = require('sinon');

const connectDB = require('../db/connection');
const UserDB = require("../model/user.model");
const DepartmentDB = require("../model/department.model");
const departmentRelationsDB = require("../model/departmentRelation.model");


const {
    users,
    departments,
    departmentRelations
} = require("./_dummy");

global.mockRequest = (data) => {
    return data
}
global.mockResponse = () => {
    const res = {};
    res.result = sinon.stub().returns(res);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    return res;
}
global.mockNext = () => {
    const next = sinon.stub();
    return next;
}

beforeEach( async () => {
    await connectDB();
    await UserDB.deleteMany({});
    await DepartmentDB.deleteMany({});
    await departmentRelationsDB.deleteMany({});
    await UserDB.insertMany(users);
    await DepartmentDB.insertMany(departments);
    await departmentRelationsDB.insertMany(departmentRelations);
});

afterEach( () => {
    mongoose.disconnect();
});
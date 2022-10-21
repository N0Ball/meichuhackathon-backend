const chai = require('chai');
const connectDB = require('../db/connection');
const mongoose = require('mongoose');
const expect = chai.expect;

const {
    getUserByUid,
    getUserByRFID,
} = require("../controller/user.controller");

const UserDB = require("../model/user.model");
const DepartmentDB = require("../model/department.model");
const departmentRelationsDB = require("../model/departmentRelation.model");

const {
    users,
    departments,
    departmentRelations
} = require("./dummy");

describe('Test /user', () => {

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
                const result = await getUserByUid(user.uid);
                expect(result.uid).to.equal(user.uid);
            });
        })

        it('should return null if no user found', async () => {
            const result = await getUserByUid('C0DEDEAD');
            expect(result).to.equal(null);
        })

    });

    describe('Test get user info with rfid', () => {


        users.forEach( (user) => {
            it(`should return a valid user with rfid ${user.RFID_id}`, async () => {
                const result = await getUserByRFID(user.RFID_id);
                expect(result.uid).to.equal(user.uid);
            });
        })

        it('should return null if no user found', async () => {
            const result = await getUserByRFID('F4K3_RF1D');
            expect(result).to.equal(null);
        })

    });

})
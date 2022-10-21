const DepartmentCRUD = require("../crud/department.crud");

exports.getDepartments = async (req, res) => {

    const departments = await DepartmentCRUD.getDepartments(req.query.skip || 0, req.query.limit || 10);

    res.result = []
    departments.forEach(e => {
        res.result.push({
            did: e.did,
            name: e.name
        });
    });

    res.status(200).json({
        detail: res.result
    });

}

exports.departmentInfoField = async (req, res) => {

}
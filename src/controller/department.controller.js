const DepartmentCRUD = require("../crud/department.crud");

exports.departmentInfoField = (department) => {
    return {
        did: department.did,
        name: department.name       
    }
}

exports.getDepartments = async (req, res) => {

    const departments = await DepartmentCRUD.getDepartments(req.query.skip || 0, req.query.limit || 10);

    res.result = []
    departments.forEach(e => {
        res.result.push(this.departmentInfoField(e));
    });

    res.status(200).json({
        detail: res.result
    });

}

exports.getDepartment = async (req, res) => {

    const department = await DepartmentCRUD.getDepartmentByDid(req.params.did);

    if (department === null){
        return res.status(404).json({
            detail: "Department not found"
        });
    }

    res.result = this.departmentInfoField(department);

    return res.status(200).json({
        detail: res.result
    });

}
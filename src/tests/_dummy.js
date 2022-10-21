exports.users = [
    {
        uid: "E010101",
        name: "Shio Ming",
        email: "shioming@tsmc.gmail.com",
        RFID_id: "DEADBEEF",
        status:1,
    },
    {
        uid: "E285392",
        name: "Shio Hua",
        email: "Hua392@tsmc.gmail.com",
        RFID_id: "DEADC0DE",
        status:1,
    },
    {
        uid: "E2593829",
        name: "Shio Luo",
        email: "luo0329@tsmc.gmail.com",
        RFID_id: "DADAFACE",
        status:1,
    },
    {
        uid: "E096096",
        name: "Gia Ming",
        email: "ming0324@tsmc.gmail.com",
        RFID_id: "0U0U0U",
        status:1,
    }
];

exports.departments = [
    {
        did: "D01",
        name: "QA",
    },
    {
        did: "D02",
        name: "RD",
    },
    {
        did: "D04",
        name: "PM"
    }
]

exports.departmentRelations = [
    {
        uid: "E010101",
        did: "D01",
        role: "admin"
    },
    {
        uid: "E2593829",
        did: "D01",
        role: "employee"
    },
    {
        uid: "E096096",
        did: "D01",
        role: "employee"
    },
    {
        uid: "E285392",
        did: "D02",
        role: "employee"
    }
]
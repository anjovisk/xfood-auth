const users = [
    {
        _id: 1,
        email: "admin@mail.com",
        password: "$2b$10$u/xCHvKLKzSv/34iTp3WaunsLtIIOvlFKXcb8oUdS9hJkU/REpxGu",
        firstName: "Admin",
        lastName: null,
        role: {
            value: "admin",
            name: "Administrator"
        },
        registerDate: new Date()
    },
    {
        _id: 2,
        email: "user@mail.com",
        password: "$2b$10$fzwRt/C2Oud2X4FHA6cxIur7h53OOiFtBybMehZD.LvKUXDsbDb.C",
        firstName: "User",
        lastName: null,
        role: {
            value: "user",
            name: "User"
        },
        registerDate: new Date()
    }
];

module.exports = { users };
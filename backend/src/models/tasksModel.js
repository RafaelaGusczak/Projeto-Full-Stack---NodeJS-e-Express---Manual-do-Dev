const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM taks');
    return tasks;
};

module.exports = {
    getAll
};
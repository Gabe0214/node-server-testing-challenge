const db =require('../data/db')

module.exports = {
    find,
    insert,
    findbyId,
    remove
}


function find(){
    return db('teachers').select('*')
}

function insert(teacher){
    return db('teachers').insert(teacher, "id")
    .then(([id]) => findbyId(id).first())
}

function findbyId(id){
    return db('teachers').where({id})
}

function remove(id){
    return db('teachers').delete(id)
}
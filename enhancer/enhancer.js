module.exports ={
    repair,
    
}

function repair(object){
    return {
        ...object,
        durability: 100,
    }
}
module.exports ={
    repair,
    itemTitle
}

const armor = {
    name: 'Shield',
    type: 'armor',
    durability: 100,
    enhancement: 0
}
const weapon = {
    name: 'Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 0
}


function repair(item){
    return {
        ...item,
        durability: 100,
    }
}

function enhancer(item){
    // Item Enhancement Caps


    
    //item.enhacement <= 20 
    //item.durability <= 100
    // item.enahncement <15 ? item.durability >= 20 : null
    // 19>= item.enahncement >=15 ? item.durability >= 0 : null
}

// item.enhancement === 0
// item.enhancement <= 20
// item.type armor cannot fail before item.enhancement = 5
// item.type weapon cannot fail before item.enhancement = 7
// item.name = item.enhancement === 0 ? { ...item, name: item.name } :{ ...item, name: [`+${item.enhancement}`]item.name } 


//Item Durability caps


//Item type function
// item.type === armor || weapon

//Item title function
function itemTitle(item){
    let title = item.name;
    let level = item.enhancement;
    level === 16 ? level = "PRI" : level === 17 ? level = "DUO" : level === 18 ? level = "TRI" : level === 19 ? level = "TET" : level === 20 ? level = "PEN" : null;
    return level === 0 ? { ...item, name: title } : item.enhancement > 15 ? { ...item, name: `[${level}]${title}`} :  { ...item, name: `[+${level}]${title}`} 
    
}
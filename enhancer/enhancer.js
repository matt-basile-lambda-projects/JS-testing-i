module.exports ={
    repair,
    itemTitle,
    enhancerFinal,
    itemType,
    durabilityRange,
    enhanceRange
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

function enhancerFinal(item){
    // Item Enhancement Caps
    
    const type = itemType(item.type)
    
    const eRange = enhanceRange(item.enhancement)
    
    const dRange = durabilityRange(item.durability, item.enhancement)
   
    if(type && eRange && dRange){
        console.log(type)
        console.log(eRange)
        console.log(dRange)
        return succeeds({
            ...item,
            type,
            durability: dRange,
            enhancement: eRange
        })
    } else{
        return fail()
    }
}


function durabilityRange(durability, enhancement){
    if(durability >=0 && durability<=100){
        if(enhancement >= 0 && enhancement <= 14){
            if(durability >=20){
                return durability
            }
        } else if(enhancement >= 15 && enhancement <= 20){
            if(durability >=0){
                return durability
            }
        } else {
            return false
        }
    } else{
        return false
    }
}

//Item Durability caps
function enhanceRange(enhancement){
    if(enhancement >=0 && enhancement <=20){
        return enhancement
    } else{
        return false
    }
}

//Item type function
// item.type === armor || weapon
function itemType(type){
    if(type === 'armor' || type === 'weapon'){
        return type
    } else{
     return fail()
    }
}


//Item title function
function itemTitle(item){
    let title = item.name;
    let level = item.enhancement;
    level === 16 ? level = "PRI" : level === 17 ? level = "DUO" : level === 18 ? level = "TRI" : level === 19 ? level = "TET" : level === 20 ? level = "PEN" : null;
    return level === 0 ?   title  : item.enhancement > 15 ?  `[${level}]${title}` :  `[+${level}]${title}` 
    
}
function succeeds(item){
    console.log(item)
    let title = itemTitle(item)
    console.log(title)
    let enhance = item.enhancement + 1;
    console.log(enhance)
    const updated = {
        ...item,
        name: title,
        enhancement: enhance
    }
    return updated
}

function fail(){
    return null
}
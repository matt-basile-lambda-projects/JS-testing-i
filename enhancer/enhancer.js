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
    
    const type = itemType(item)
    console.log(type)
    const eRange = enhanceRange(item.enhancement)
    
    const dRange = durabilityRange(item.durability, item.enhancement)
   
    if(type && (eRange || eRange === 0) && (dRange ||dRange === 0)){
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
        return fail(item)
    }
}
function durabilityRange(durability, enhancement){
    if(durability >=0 && durability<=100){
        if(enhancement >= 0 && enhancement <= 14){
            if(durability >=20){
                return durability
            } else{
                return false
            }
        } 
        else if(enhancement >= 15 && enhancement <= 20){
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
function itemType(item){
    if(item.type === 'armor' || item.type === 'weapon'){
        return item.type
    } else{
     return false
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
    let enhance = item.enhancement + 1;
    let title = itemTitle({...item, enhancement: enhance})
    const updated = {
        ...item,
        name: title,
        enhancement: enhance
    }
    return updated
}

// function fail(item){
//     const durability = item.durability
//     const testEnhancement = item.enhancement
//     if(testEnhancement >= 0 && testEnhancement<= 14){
//         return {...item, durability: durability - 5}
//     }
//     if(testEnhancement > 14){
//         return {...item, durability: durability - 10}
//     }
//     if(testEnhancement > 16){
//         let enhance = testEnhancement - 1;
//         let newName = (itemTitle(item.name, enhancement: enhance)) 
//         return {...item, name:newName, durability: durability - 10, enhancement: enhancement-1}
//     }
// }
function fail(item) {
    if (item.enhancement < 15 && item.durability < 25) {
      return { ...item };
    }
  
    const durability =
      item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  
    const enhancement =
      item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;
  
    return { ...item, durability, enhancement };
  }
  
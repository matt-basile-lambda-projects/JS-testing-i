const enhancer = require('./enhancer');

test('repair', ()=>{
    const item = {
        durability: 12
    }
    expect(enhancer.repair(item)).toEqual({durability:100})
})

test('title PRI', ()=>{
    const item ={
        enhancement: 16,
        name: 'Shield'
    }
    expect(enhancer.itemTitle(item)).toEqual({name: '[PRI]Shield', enhancement: 16})
})
test('title DUO', ()=>{
    const item ={
        enhancement: 17,
        name: 'Shield'
    }
    expect(enhancer.itemTitle(item)).toEqual({name: '[DUO]Shield', enhancement: 17})
})
test('title TRI', ()=>{
    const item ={
        enhancement: 18,
        name: 'Shield'
    }
    expect(enhancer.itemTitle(item)).toEqual({name: '[TRI]Shield', enhancement: 18})
})
test('title TET', ()=>{
    const item ={
        enhancement: 19,
        name: 'Shield'
    }
    expect(enhancer.itemTitle(item)).toEqual({name: '[TET]Shield', enhancement: 19})
})
test('title PEN', ()=>{
    const item ={
        enhancement: 20,
        name: 'Shield'
    }
    expect(enhancer.itemTitle(item)).toEqual({name: '[PEN]Shield', enhancement: 20})
})
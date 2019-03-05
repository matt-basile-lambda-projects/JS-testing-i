const enhancer = require('./enhancer');

test('repair', ()=>{
    const item = {
        durability: 12
    }
    expect(enhancer.repair(item)).toEqual({durability:100})
})

// test('title PRI', ()=>{
//     const item ={
//         enhancement: 16,
//         name: 'Shield'
//     }
//     expect(enhancer.itemTitle(item)).toBe( '[PRI]Shield')
// })
// test('title DUO', ()=>{
//     const item ={
//         enhancement: 17,
//         name: 'Shield'
//     }
//     expect(enhancer.itemTitle(item)).toBe( '[DUO]Shield')
// })
// test('title TRI', ()=>{
//     const item ={
//         enhancement: 18,
//         name: 'Shield'
//     }
//     expect(enhancer.itemTitle(item)).toBe( '[TRI]Shield')
// })
// test('title TET', ()=>{
//     const item ={
//         enhancement: 19,
//         name: 'Shield'
//     }
//     expect(enhancer.itemTitle(item)).toBe( '[TET]Shield')
// })
// test('title PEN', ()=>{
//     const item ={
//         enhancement: 20,
//         name: 'Shield'
//     }
//     expect(enhancer.itemTitle(item)).toBe( '[PEN]Shield')
// })

// test('successful update', ()=>{
//     item={
//         name: 'Shield',
//         durability: 100,
//         enhancement: 17,
//         type: 'armor'
//     }
//     expect(enhancer.enhancer(item)).toEqual({
//         name: '[TRI]Shield',
//         durability: 100,
//         enhancement: 18,
//         type:'armor'
//     })
// })

// test('item type', ()=>{
//     expect(enhancer.itemType({type:'armor'})).toEqual('armor')
//     expect(enhancer.itemType({type:'weapon'})).toEqual('weapon')
//     // expect(enhancer.itemType({type:'blah'})).toBe(null);
// })

// test('durability Range', ()=>{
//     expect(enhancer.durabilityRange(75, 7)).toBe(75)
//     expect(enhancer.durabilityRange(75, 16)).toBe(75)
//     expect(enhancer.durabilityRange(75, -1)).toBe(false)
//     expect(enhancer.durabilityRange(75, 101)).toBe(false)
// })
// test('enhancement Range', ()=>{
//     expect(enhancer.enhanceRange(7)).toBe(7)
//     expect(enhancer.enhanceRange(16)).toBe(16)
//     expect(enhancer.enhanceRange(20)).toBe(20)
//     expect(enhancer.enhanceRange(21)).toBe(false)
//     expect(enhancer.enhanceRange(-1)).toBe(false)
//     expect(enhancer.enhanceRange(101)).toBe(false)
// })

test('successful enhancement', ()=>{
    // const item0 = {
    //     name: 'Shield',
    //     type: 'armor',
    //     durability: 100,
    //     enhancement: 0
    // }
    // const item = {
    //     name: 'Shield',
    //     type: 'armor',
    //     durability: 100,
    //     enhancement: 15
    // }
    // const item20 = {
    //     name: 'Shield',
    //     type: 'armor',
    //     durability: 100,
    //     enhancement: 19
    // }
    const itemFail = {
        name: 'Shield',
        type: 'potion',
        durability: 20,
        enhancement: 16
    }
    // expect(enhancer.enhancerFinal(item0)).toEqual({
    //         name: '[+1]Shield',
    //         type: 'armor',
    //         durability: 100,
    //         enhancement: 1
    // })
    // expect(enhancer.enhancerFinal(item)).toEqual({
    //         name: '[PRI]Shield',
    //         type: 'armor',
    //         durability: 100,
    //         enhancement: 16
    // })
    // expect(enhancer.enhancerFinal(item20)).toEqual({
    //         name: '[PEN]Shield',
    //         type: 'armor',
    //         durability: 100,
    //         enhancement: 20
    // })
    expect(enhancer.enhancerFinal(itemFail)).toEqual(
           {
            name: 'Shield',
            type: 'potion',
            durability: 10,
            enhancement: 16
           }
    )
})
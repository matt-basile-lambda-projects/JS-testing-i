const enhancer = require('./enhancer');

test('repair', ()=>{
    const item = {
        durability: 12
    }
    expect(enhancer.repair(item)).toEqual({durability:100})
})
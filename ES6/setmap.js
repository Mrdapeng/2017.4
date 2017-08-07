var a=[1,23,4,4,5,1]
var b =new Set()
a.map(x=>b.add(x))
console.log(b)
console.log({}=={})
var c=new Set()
c.add({})
c.add({})
c.add(NaN)
c.add(NaN)
console.log(c)
console.log(c.size)
/*set 实现并集合运算*/
var a1=new Set([1,23,41])
var a2 =new Set([1,234,1231])
var a3=[...a1,...a2]
console.log(a3)
/*set 实现交集计算 */
var b1=new Set([1,23,41])
var b2 =new Set([1,23,44])
var b3 =[...b1].filter(x=>b2.has(x))
console.log(b3)
/*set实现补寄运算*/
var c1 =new Set([1,23,4,12])
var c2 =new Set([1,23])
var c3 =[...c1].filter(x=>!c2.has(x))
console.log(c3)
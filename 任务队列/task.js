/**
 * Created by Administrator on 2017/5/29.
 */
/*
 * 除了我们常知的settimeout和setinterval之外
 *
 * node还提供了二个函数，分别是process.nextTick和setImmediate；
 *
 * nexttick这个函数会在所有同步任务执行后执行，也就是说这个任务会在所有异步任务之前执行；
 * 上面代码中，由于process.nextTick方法指定的回调函数，总是在当前"执行栈"的尾部触发，
 * 所以不仅函数A比setTimeout指定的回调函数timeout先执行，而且函数B也比timeout先执行。
 * 这说明，如果有多个process.nextTick语句（不管它们是否嵌套），将全部在当前"执行栈"执行。
 *
 *
 * 而setImmediate会在所有下一次event loop 时候执行 和setTimeout(fn（），0);
 * 也就是会在异步代码执行完后执行
 *
 *
 * */
// process.nextTick(function A() {
//     console.log(1);
//     process.nextTick(function B() {
//         console.log(2);
//     })
// });
// setTimeout(function timeout() {
//     console.log('timeout fired');
// },0);
/*
 * 这样写的话
 *上面代码中，setImmediate与setTimeout(fn,0)各自添加了一个回调函数A和timeout，
 * 都是在下一次Event Loop触发。那么，哪个回调函数先执行呢？答案是不确定。
 * 运行结果可能是1--TIMEOUT FIRED--2，也可能是TIMEOUT FIRED--1--2。

 *
 * */
// setImmediate(function A() {
//     console.log(1);
//     setImmediate(function B() {
//         console.log(2)
//     });
// });
// setTimeout(function timeout() {
//     console.log('timeout fired');
// }, 0);

/* 令人困惑的是，Node.js文档中称，setImmediate指定的回调函数，
 总是排在setTimeout前面。实际上，这种情况只发生在递归调用的时候。

 */
setImmediate(function (){
    setImmediate(function A() {
        console.log(1);
        setImmediate(function B(){console.log(2);});
    });

    setTimeout(function timeout() {
        console.log('TIMEOUT FIRED');
    }, 0);
});


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return {
        increment: () => {
            return ++init
        },
        decrement: () => init--,
        reset: () => init
    }
};

 const counter = createCounter(5)
 
console.log(counter.increment());

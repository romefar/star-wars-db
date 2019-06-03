
// hoc helper for function composition
const compose = (...funcs) => (component) => { 
    return funcs.reduceRight((prev, f) => f(prev), component);
}

export default compose;
function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function named() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}
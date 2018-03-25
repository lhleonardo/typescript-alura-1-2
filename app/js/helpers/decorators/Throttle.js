System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Throttle(milissegundos = 500) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                clearInterval(timer);
                timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
            };
            return descriptor;
        };
    }
    exports_1("Throttle", Throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});

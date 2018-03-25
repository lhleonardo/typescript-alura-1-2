System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function InspectAndLogTime(inSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = "ms";
                let divisor = 1;
                if (inSeconds) {
                    unidade = "s";
                    divisor = 1000;
                }
                console.log(`Executando o método ${propertyKey}.`);
                console.log(`Parâmetros de entrada: ${JSON.stringify(args)}`);
                let inicio = performance.now();
                let retorno = originalMethod.apply(this, args);
                let fim = performance.now();
                console.log(`O tempo de execução foi em ${(fim - inicio) / divisor}${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("InspectAndLogTime", InspectAndLogTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});

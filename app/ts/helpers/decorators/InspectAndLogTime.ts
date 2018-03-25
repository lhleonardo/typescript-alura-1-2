export function InspectAndLogTime(inSeconds:boolean = false) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args:any[]) {
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

            console.log(`O tempo de execução foi em ${(fim-inicio)/divisor}${unidade}`);

            return retorno;                        
        }

        return descriptor;
    }

}
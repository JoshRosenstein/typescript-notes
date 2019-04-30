 function someFunction(arg1: string, arg2 = false) {
    return someFunction;
  
    function someFunction(emptyArg3?: undefined): undefined;
    function someFunction(arg3: string | number): string;
    function someFunction(arg3: string | number | undefined) {
      return typeof arg3 == "undefined"
        ? undefined
        : (arg2 && !Number.isNaN(Number(arg3))) || typeof arg3 == "number"
        ? arg1 + "something"
        : arg3;
    }
  }

const a= someFunction('Hello')
const b= a(undefined)
const c= a('undefined')

a;
b;
c;
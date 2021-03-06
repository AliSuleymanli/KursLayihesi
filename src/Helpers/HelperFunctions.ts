

interface StringKeyObject {
    [index: string]: any
}

type Constructor<T> = new (...args: any[]) => T;

let json2Instance = <T>(
    destinationConstructor: Constructor<T>
  ): T =>new destinationConstructor() // Object.assign(new destinationConstructor(), JSON.parse(source));
  

class helperFunctions {
    static serializedArrayToobject(array: Array<{ name: string, value: string }>): StringKeyObject {
        let obj: StringKeyObject = {};

        array.forEach(element => {
            obj[element.name] = element.value;
        });

        return obj;
    }

    static getPropName<T>(obje:T,expression: (obj: T) => string): string {

        Object.keys(obje).map(key => {
            (obje[key as keyof T] as any) = key as string;
        });

        return expression(obje);
    }

    static sameKeyValue<T>(obj:T) : {[key in keyof T]: key}{

        let res:{[key in keyof T]: key}={} as {[key in keyof T]: key};

        Object.keys(obj).map(key => {
            (res[key as keyof T] as any) = key as string;
        });

        return res;
    }

    static activator<T>(type: { new (): T }): T {
        return new type();
    }
}

export { helperFunctions };
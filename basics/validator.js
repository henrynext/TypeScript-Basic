"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function Logger(logString) {
    console.log("Logger Factory");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("Template Factory");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
// @Logger("Logging -Person")
let Person = (() => {
    let _classDecorators = [Logger("Logging"), WithTemplate("<h1>My Person Object</h1>", "app")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Person = _classThis = class {
        constructor() {
            this.name = "Alice";
            console.log("Creating person object!");
        }
    };
    __setFunctionName(_classThis, "Person");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
})();
const person = new Person();
console.log(person);
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accesor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
let Product = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _set_price_decorators;
    let _getPriceWithTax_decorators;
    return _a = class Product {
            set price(val) {
                if (val > 0) {
                    this._price = val;
                }
                else {
                    throw new Error("Invalid price - should be positive!");
                }
            }
            constructor(t, p) {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.title = t;
                this._price = p;
            }
            getPriceWithTax(tax) {
                return this._price * (1 + tax);
            }
        },
        (() => {
            _title_decorators = [Log];
            _set_price_decorators = [Log2];
            _getPriceWithTax_decorators = [Log3];
            __esDecorate(_a, null, _set_price_decorators, { kind: "setter", name: "price", static: false, private: false, access: { has: obj => "price" in obj, set: (obj, value) => { obj.price = value; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _getPriceWithTax_decorators, { kind: "method", name: "getPriceWithTax", static: false, private: false, access: { has: obj => "getPriceWithTax" in obj, get: obj => obj.getPriceWithTax } }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);
// function Autobind(_: any, _2: string, descriptor: PropertyDecorator) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDecorator = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     }
//   };
//   return adjDescriptor;
// }
class Printer {
    constructor() {
        this.message = "This works!";
    }
    // @Autobind
    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();
p.showMessage();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
const registerdValidators = {};
function Required(target, propName) {
    registerdValidators[target.constructor.name] = {
        ...registerdValidators[target.constructor.name],
        [propName]: ["required"],
    };
}
function PositiveNumber(target, propName) {
    registerdValidators[target.constructor.name] = {
        ...registerdValidators[target.constructor.name],
        [propName]: ["positive"],
    };
}
function validate(obj) {
    const objValidatorConfig = registerdValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
let Course = (() => {
    var _a;
    let _instanceExtraInitializers_1 = [];
    let _title_decorators;
    let _title_initializers = [];
    let _price_decorators;
    let _price_initializers = [];
    return _a = class Course {
            constructor(t, p) {
                this.title = (__runInitializers(this, _instanceExtraInitializers_1), __runInitializers(this, _title_initializers, void 0));
                this.price = __runInitializers(this, _price_initializers, void 0);
                this.title = t;
                this.price = p;
            }
        },
        (() => {
            _title_decorators = [Required];
            _price_decorators = [PositiveNumber];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } } }, _price_initializers, _instanceExtraInitializers_1);
        })(),
        _a;
})();
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const pirceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +pirceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        throw new Error("Invalid input, please try again");
        return;
    }
    console.log(createdCourse);
});

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectInput = void 0;
const base_component_1 = __importDefault(require("./base-component"));
const Validation = __importStar(require("../util/validation"));
const autobind_1 = require("../decorators/autobind");
const project_state_1 = require("../state/project-state");
// ProjectInput Class
let ProjectInput = exports.ProjectInput = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _submitHandler_decorators;
    return _a = class ProjectInput extends base_component_1.default {
            constructor() {
                super('project-input', 'app', true, 'user-input');
                this.titleInputElement = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.titleInputElement = this.element.querySelector('#title');
                this.descriptionInputElement = this.element.querySelector('#description');
                this.peopleInputElement = this.element.querySelector('#people');
                this.configure();
            }
            configure() {
                this.element.addEventListener('submit', this.submitHandler);
            }
            renderContent() { }
            gatherUserInput() {
                const enteredTitle = this.titleInputElement.value;
                const enteredDescription = this.descriptionInputElement.value;
                const enteredPeople = this.peopleInputElement.value;
                const titleValidatable = {
                    value: enteredTitle,
                    required: true
                };
                const descriptionValidatable = {
                    value: enteredDescription,
                    required: true,
                    minLength: 5
                };
                const peopleValidatable = {
                    value: +enteredPeople,
                    required: true,
                    min: 1,
                    max: 5
                };
                if (!Validation.validate(titleValidatable) ||
                    !Validation.validate(descriptionValidatable) ||
                    !Validation.validate(peopleValidatable)) {
                    alert('Invalid input, please try again!');
                    return;
                }
                else {
                    return [enteredTitle, enteredDescription, +enteredPeople];
                }
            }
            clearInputs() {
                this.titleInputElement.value = '';
                this.descriptionInputElement.value = '';
                this.peopleInputElement.value = '';
            }
            submitHandler(event) {
                event.preventDefault();
                const userInput = this.gatherUserInput();
                if (Array.isArray(userInput)) {
                    const [title, desc, people] = userInput;
                    project_state_1.projectState.addProject(title, desc, people);
                    this.clearInputs();
                }
            }
        },
        (() => {
            _submitHandler_decorators = [autobind_1.autobind];
            __esDecorate(_a, null, _submitHandler_decorators, { kind: "method", name: "submitHandler", static: false, private: false, access: { has: obj => "submitHandler" in obj, get: obj => obj.submitHandler } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();

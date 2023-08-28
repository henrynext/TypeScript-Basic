"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectItem = void 0;
const base_component_1 = __importDefault(require("./base-component"));
const autobind_1 = require("../decorators/autobind");
// ProjectItem Class
let ProjectItem = exports.ProjectItem = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _dragStartHandler_decorators;
    return _a = class ProjectItem extends base_component_1.default {
            get persons() {
                if (this.project.people === 1) {
                    return '1 person';
                }
                else {
                    return `${this.project.people} persons`;
                }
            }
            constructor(hostId, project) {
                super('single-project', hostId, false, project.id);
                this.project = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.project = project;
                this.configure();
                this.renderContent();
            }
            dragStartHandler(event) {
                event.dataTransfer.setData('text/plain', this.project.id);
                event.dataTransfer.effectAllowed = 'move';
            }
            dragEndHandler(_) {
                console.log('DragEnd');
            }
            configure() {
                this.element.addEventListener('dragstart', this.dragStartHandler);
                this.element.addEventListener('dragend', this.dragEndHandler);
            }
            renderContent() {
                this.element.querySelector('h2').textContent = this.project.title;
                this.element.querySelector('h3').textContent = this.persons + ' assigned';
                this.element.querySelector('p').textContent = this.project.description;
            }
        },
        (() => {
            _dragStartHandler_decorators = [autobind_1.autobind];
            __esDecorate(_a, null, _dragStartHandler_decorators, { kind: "method", name: "dragStartHandler", static: false, private: false, access: { has: obj => "dragStartHandler" in obj, get: obj => obj.dragStartHandler } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();

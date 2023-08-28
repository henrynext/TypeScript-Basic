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
exports.ProjectList = void 0;
const project_1 = require("../models/project");
const base_component_1 = __importDefault(require("./base-component"));
const autobind_1 = require("../decorators/autobind");
const project_state_1 = require("../state/project-state");
const project_item_1 = require("./project-item");
// ProjectList Class
let ProjectList = exports.ProjectList = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _dragOverHandler_decorators;
    let _dropHandler_decorators;
    let _dragLeaveHandler_decorators;
    return _a = class ProjectList extends base_component_1.default {
            constructor(type) {
                super('project-list', 'app', false, `${type}-projects`);
                this.type = (__runInitializers(this, _instanceExtraInitializers), type);
                this.assignedProjects = [];
                this.configure();
                this.renderContent();
            }
            dragOverHandler(event) {
                if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                    event.preventDefault();
                    const listEl = this.element.querySelector('ul');
                    listEl.classList.add('droppable');
                }
            }
            dropHandler(event) {
                const prjId = event.dataTransfer.getData('text/plain');
                project_state_1.projectState.moveProject(prjId, this.type === 'active' ? project_1.ProjectStatus.Active : project_1.ProjectStatus.Finished);
            }
            dragLeaveHandler(_) {
                const listEl = this.element.querySelector('ul');
                listEl.classList.remove('droppable');
            }
            configure() {
                this.element.addEventListener('dragover', this.dragOverHandler);
                this.element.addEventListener('dragleave', this.dragLeaveHandler);
                this.element.addEventListener('drop', this.dropHandler);
                project_state_1.projectState.addListener((projects) => {
                    const relevantProjects = projects.filter(prj => {
                        if (this.type === 'active') {
                            return prj.status === project_1.ProjectStatus.Active;
                        }
                        return prj.status === project_1.ProjectStatus.Finished;
                    });
                    this.assignedProjects = relevantProjects;
                    this.renderProjects();
                });
            }
            renderContent() {
                const listId = `${this.type}-projects-list`;
                this.element.querySelector('ul').id = listId;
                this.element.querySelector('h2').textContent =
                    this.type.toUpperCase() + ' PROJECTS';
            }
            renderProjects() {
                const listEl = document.getElementById(`${this.type}-projects-list`);
                listEl.innerHTML = '';
                for (const prjItem of this.assignedProjects) {
                    new project_item_1.ProjectItem(this.element.querySelector('ul').id, prjItem);
                }
            }
        },
        (() => {
            _dragOverHandler_decorators = [autobind_1.autobind];
            _dropHandler_decorators = [autobind_1.autobind];
            _dragLeaveHandler_decorators = [autobind_1.autobind];
            __esDecorate(_a, null, _dragOverHandler_decorators, { kind: "method", name: "dragOverHandler", static: false, private: false, access: { has: obj => "dragOverHandler" in obj, get: obj => obj.dragOverHandler } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _dropHandler_decorators, { kind: "method", name: "dropHandler", static: false, private: false, access: { has: obj => "dropHandler" in obj, get: obj => obj.dropHandler } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _dragLeaveHandler_decorators, { kind: "method", name: "dragLeaveHandler", static: false, private: false, access: { has: obj => "dragLeaveHandler" in obj, get: obj => obj.dragLeaveHandler } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();

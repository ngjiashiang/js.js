"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldBuilderWithValidation = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
/**
 * FieldBuilderWithValidation is a component that allows for the creation of a form with validation.
 * @param {Field[]} fields - The fields to be displayed in the form.
 * @param {Function} onSubmit - The function to be called when the form is submitted.
 * @param {boolean} submitButton - Whether to display a submit button.
 * @param {string} submitButtonText - The text to be displayed on the submit button.
 * @param {string} submitButtonClassName - The class name to be applied to the submit button.
 * @param {boolean} formSubmitLoading - Whether the form is currently submitting.
 * @param {string} errorMessageClassName - The class name to be applied to the error message.
 * @param {string} submitLoadingButtonClassName - The class name to be applied to the submit button when loading.
 */
var FieldBuilderWithValidation = function (_a) {
    var fields = _a.fields, onSubmit = _a.onSubmit, _b = _a.submitButton, submitButton = _b === void 0 ? false : _b, _c = _a.submitButtonText, submitButtonText = _c === void 0 ? "Submit" : _c, _d = _a.submitButtonClassName, submitButtonClassName = _d === void 0 ? "" : _d, _e = _a.formSubmitLoading, formSubmitLoading = _e === void 0 ? false : _e, _f = _a.errorMessageClassName, errorMessageClassName = _f === void 0 ? "" : _f, _g = _a.submitLoadingButtonClassName, submitLoadingButtonClassName = _g === void 0 ? "" : _g;
    var _h = (0, react_1.useState)({}), values = _h[0], setValues = _h[1];
    var _j = (0, react_1.useState)({}), errors = _j[0], setErrors = _j[1];
    var _k = (0, react_1.useState)({}), touched = _k[0], setTouched = _k[1];
    var _l = (0, react_1.useState)(false), isFormValid = _l[0], setIsFormValid = _l[1];
    var validateAllFields = function () { return __awaiter(void 0, void 0, void 0, function () {
        var fieldValidations, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fieldValidations = fields.map(function (field) { return __awaiter(void 0, void 0, void 0, function () {
                        var error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, field.validation(values[field.name])];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, null];
                                case 2:
                                    error_1 = _a.sent();
                                    return [2 /*return*/, error_1.message];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(fieldValidations)];
                case 1:
                    results = _a.sent();
                    setIsFormValid(results.every(function (result) { return result === null; }));
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        validateAllFields();
    }, [fields, values]);
    var validateField = function (fieldName, currentValues) { return __awaiter(void 0, void 0, void 0, function () {
        var field, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    field = fields.find(function (field) { return field.name === fieldName; });
                    if (!field) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, field.validation(currentValues[fieldName])];
                case 2:
                    _a.sent();
                    setErrors(function (prevErrors) {
                        var _a;
                        return (__assign(__assign({}, prevErrors), (_a = {}, _a[fieldName] = "", _a)));
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    setErrors(function (prevErrors) {
                        var _a;
                        return (__assign(__assign({}, prevErrors), (_a = {}, _a[fieldName] = (error_2 === null || error_2 === void 0 ? void 0 : error_2.message) || "Validation failed", _a)));
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var newValues;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setTouched(__assign(__assign({}, touched), (_a = {}, _a[event.target.name] = true, _a)));
                    newValues = __assign(__assign({}, values), (_b = {}, _b[event.target.name] = event.target.value, _b));
                    setValues(newValues);
                    return [4 /*yield*/, validateField(event.target.name, newValues)];
                case 1:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleBlur = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setTouched(__assign(__assign({}, touched), (_a = {}, _a[event.target.name] = true, _a)));
                    return [4 /*yield*/, validateField(event.target.name, values)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSubmitButtonClicked = function () {
        handleSubmit();
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newErrors, hasErrors, _i, fields_1, field, error_3, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newErrors = {};
                    hasErrors = false;
                    _i = 0, fields_1 = fields;
                    _a.label = 1;
                case 1:
                    if (!(_i < fields_1.length)) return [3 /*break*/, 6];
                    field = fields_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, field.validation(values[field.name])];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    newErrors[field.name] = (error_3 === null || error_3 === void 0 ? void 0 : error_3.message) || "Validation failed";
                    hasErrors = true;
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6:
                    if (!!hasErrors) return [3 /*break*/, 11];
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, onSubmit(values)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    error_4 = _a.sent();
                    console.error("Submit error:", error_4);
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 12];
                case 11:
                    setErrors(newErrors);
                    _a.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [fields.map(function (field) { return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: field.type || "text", name: field.name, className: field.className, style: field.style || {}, onChange: handleChange, onBlur: handleBlur, value: values[field.name] || "", placeholder: field.placeholder || "" }), touched[field.name] && errors[field.name] && ((0, jsx_runtime_1.jsx)("div", { className: errorMessageClassName, children: errors[field.name] }))] }, field.name)); }), submitButton &&
                (0, jsx_runtime_1.jsx)("button", { onClick: handleSubmitButtonClicked, className: formSubmitLoading ? submitLoadingButtonClassName : submitButtonClassName, disabled: !isFormValid || formSubmitLoading, children: formSubmitLoading ? submitButtonText : "Loading..." })] }));
};
exports.FieldBuilderWithValidation = FieldBuilderWithValidation;

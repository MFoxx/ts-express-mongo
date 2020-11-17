"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import dependencies
const express_1 = require("express");
const router = express_1.Router();
// Import models
const userModel_1 = __importDefault(require("../models/userModel"));
// Create user router
router.post('/create-user', (req, res) => {
    const data = new userModel_1.default({
        name: req.body.name,
        age: req.body.age,
        log: ['User Created'],
        adult: req.body.age > 18 ? true : false
    });
    try {
        data.save().then(() => console.log('Data saved', data));
        res.send({ 'Data saved': data }).status(200);
    }
    catch (error) {
        res.send({ 'There was an error:': error }).status(500);
        console.log(error);
    }
});
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.find();
    res.send(user);
}));
router.post('/edit-user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield userModel_1.default.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.send(user);
}));
router.post('/delete-user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findOneAndDelete({ _id: req.params.id });
    res.send({ 'User deleted:': user });
}));
exports.default = router;

import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: String,
    age: Number,
    log: Array,
    adult: Boolean
})

export default model('User', userSchema);
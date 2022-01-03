import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: { type: String, required: true},
    userList: {
        type: [String],
        default: []
    },
    id: {type: String},
    selectedFile: String
});
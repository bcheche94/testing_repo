import mongoose from "mongoose"

const xuiSchema = new mongoose.Schema({
    xuiname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    }
}, {timestamps: true})

const test_model_1 = mongoose.model('test_model_1', xuiSchema)

export default test_model_1
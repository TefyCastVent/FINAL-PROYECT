import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    introduction: {
        type: String,
    },
    subjects: {
        type: [String],
        required: true,
    } ,
    teachers:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
    }]
})

export default mongoose.model("Course", schema);
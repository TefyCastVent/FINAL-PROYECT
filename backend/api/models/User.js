import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Administrator', 'Teacher', 'Student'],
        default: 'Student',
        required: true,
    },
    //==============================================================================
    // Esto se pide solo al profesor
    
    photo: {
        type: String,
    },
    description: {
        type: String,
        required : function() { return this.role === "Teacher"; },
    },
    whatsAppNumber: {
        type: String,
        required: function() { return this.role === "Teacher"; },
    },
    // El horario se pondrá mediante imagen
    schedule:{
        type: String,
        required: function() { return this.role === "Teacher"; },
    }
})

export default mongoose.model("User", schema);
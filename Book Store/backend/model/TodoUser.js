import mongoose from "mongoose"; 

const TodoSchema = mongoose.Schema(
    {
        title: String
    }
)

export const TodoUser =  mongoose.model('todo', TodoSchema);
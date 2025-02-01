
import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    title: String,
    category: String
})

const Book = mongoose.model("book",BookSchema)

export default Book
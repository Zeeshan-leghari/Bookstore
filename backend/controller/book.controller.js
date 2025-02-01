
import Book from "../model/book.model.js";

export const getbooks = async(req,res)=>{
    try {
        const books =await Book.find()
        res.status(200).json(books)
    } catch (error) {
        console.log("ERROR WHILE CATCHING BOOK",error)
        res.status(500).json(error)
    }
}
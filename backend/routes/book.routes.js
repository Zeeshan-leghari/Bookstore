import express from "express";
import { getbooks } from '../controller/book.controller.js';

const router = express.Router();

router.get('/', getbooks);

export default router;
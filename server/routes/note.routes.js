import express from "express"
import { createNote } from "../controllers/note.controlers.js"
import { protect } from "../middleware/usersMiddleware.js"

const router = express.Router()

router.post("/create" ,protect, createNote)

export default router
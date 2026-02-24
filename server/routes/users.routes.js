import express from "express"
import { login, registr } from "../controllers/users.controllers.js"

const router = express.Router()

router.post("/registr" ,registr)
router.post("/login" ,login)

export default router
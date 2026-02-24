import express from "express"
import { registr } from "../controllers/users.controllers.js"

const router = express.Router()

router.post("/" ,registr)

export default router
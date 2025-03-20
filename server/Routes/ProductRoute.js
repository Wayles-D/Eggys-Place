import express from "express";
import { createProduct } from "../Controller/ProductController.js";
const router = express.Router();

// post request
router.post("/create", createProduct);

export default router;
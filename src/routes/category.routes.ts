import { Router } from "express";
import {
  createCategory,
  getCategoies,
  getCaretgoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";
import { upload } from "../middlewares/upload.middleware";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, upload.single("image"), createCategory);
router.get("/", getCategoies);
router.get("/:id", getCaretgoryById);
router.put("/:id", authenticate, upload.single("image"), updateCategory);
router.delete("/:id", authenticate, deleteCategory);

export default router;

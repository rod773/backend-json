import express from "express";
import { login, register } from "./../controllers/auth.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    body("email", "formato email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "formato de password incorrecto")
      .trim()
      .isLength({ min: 6 })
      .custom((value, { req }) => {
        if (value !== req.repassword) {
          throw new Error("no coinciden las contraseñas");
        }
        return value;
      }),
  ],
  register
);

router.post("/login", login);

export default router;

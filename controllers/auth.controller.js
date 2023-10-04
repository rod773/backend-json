import { validationResult } from "express-validator";

export const register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);
  res.json(req.body);
};

export const login = (req, res) => {
  res.json({ ok: true });
};

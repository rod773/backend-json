export const register = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

export const login = (req, res) => {
  res.json({ ok: true });
};

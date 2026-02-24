import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = {
        idUser: decoded.id,
        role: decoded.role,
      };
      next()
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
   if (!token) {
    return res.status(401).json({ message: "token is not defind" });
  }
};

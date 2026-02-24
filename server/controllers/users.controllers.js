import { ObjectId } from "mongodb";
import { getUsersCollection } from "../db/mongodb.js";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";

export const registr = async (req, res) => {
  try {
    const { email, password ,role } = req.body;
    if (!email || !password) {
      return res.status(401).json("email or password is not defind");
    }

    const user = getUsersCollection();

    const hashpassword = await bcript.hash(password, 12);

    const objuser = {
      email,
      hashpassword,
      Date: new Date(),
      role: role?role: "user",
    };
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" },
    );

    await user.insertOne(objuser);

    res.status(200).json({ email: objuser.email, token: token });
  } catch (error) {
    return res.status(500).json({ error:error.message  });
  }
};

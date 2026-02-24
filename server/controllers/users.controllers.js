import { getUsersCollection } from "../db/mongodb.js";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";

export const registr = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.status(401).json("email or password is not defind");
    }

    const users = getUsersCollection();

    const hashpassword = await bcript.hash(password, 12);

    const objuser = {
      email,
      hashpassword,
      Date: new Date(),
      role: role ? role : "user",
    };
    const token = jwt.sign(
      { id: users.id, role: users.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" },
    );

    await users.insertOne(objuser);

    res.status(200).json({ email: objuser.email, token: token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json("email or password is not defind");
    }
    const users = await getUsersCollection();

    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json("email is not defind");
    }
    
    const comper = await bcript.compare(password, user.hashpassword);
    
    if (!comper) {
      return res.status(401).json("password is not good try again");
    }

    const token = jwt.sign(
      { id: user._id, role: "user" },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({ email , token: token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

import { getNoteColection } from "../db/mongodb.js";

export const createNote = async (req, res) => {
  try {
    const { title, content} = req.body;
    if (!title || !content ) {
      return res.status(401).json("you not enter title or contect or userID");
    }

    const notes = getNoteColection();
    const newNote = {
      title,
      content,
      IDuser:req.user.idUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await notes.insertOne(newNote);
    res.status(200).json({ newNote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

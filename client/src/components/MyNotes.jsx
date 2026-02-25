import React, { useEffect, useState } from "react";
import { grtMyNotes } from "../api/fatch";

export const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function play() {
      try {
        const token = localStorage.getItem("token");
        const data = await grtMyNotes(token);
        console.log(data.data)
        setNotes(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    play();
  }, []);
   return (
    <div className="notes-page">
      <h1 className="page-title">My Notes</h1>
      <div className="notes-grid">
        {notes?.map((n) => (
          <div key={n._id} className="note-card">
            <h3 className="note-title">{n.title}</h3>
            <p className="note-content">{n.content}</p>
            <div className="note-footer">
              <span className="note-date">{new Date(n.createdAt).toLocaleDateString("he-IL")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

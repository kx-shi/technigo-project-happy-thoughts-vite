// Component that handles user text input and use POST to send new thought
// POST https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts
import React from "react";
import "../styles/TextForm.css";
export const TextForm = ({ handleFormSubmit, newThought, setNewThought }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit} className="text-form-container">
        <h2>What is making you happy right now?</h2>
        <textarea

          className="text-form-input-area"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          placeholder="What makes you happy...."
        >
        </textarea>
        <button className="send-happy-btn" type="submit">
          <span className="heart-icon">❤️</span>Send Happy Thought
          <span className="heart-icon">❤️</span>
        </button>
      </form>
    </div>
  );
};

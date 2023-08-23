import React from "react";
import "./write.css";
import { AiFillFolderAdd } from "react-icons/ai";
export const Write = () => {
  return (
    <div className="write">
      <img
        className="write-img"
        src="https://images.unsplash.com/photo-1691505442864-9146b7552e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <AiFillFolderAdd className="write-icon" />
          </label>

          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

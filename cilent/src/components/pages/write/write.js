import React, { useContext, useState } from "react";
import "./write.css";
import { AiFillFolderAdd } from "react-icons/ai";
// import axios from "axios";
import axios from "../../../api/axios";
import { Context } from "../../../context/Context";
export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, 
      desc, 
      username:user.username };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (error) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="write-img" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <AiFillFolderAdd className="write-icon" />
          </label>

          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="タイトル"
            className="write-input"
            onChange={e=>setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="あなたの物語を教えてください"
            type="text"
            className="write-input write-text"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="write-submit">
        公開
        </button>
      </form>
    </div>
  );
};

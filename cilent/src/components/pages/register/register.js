import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import axios from "../../../api/axios";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);

      if (!err?.response) {
        setErr("サーバー応答なし");
      } else if (err.response?.status === 409) {
        setErr("ユーザー名が取得できません");
      } else {
        setErr("登録に失敗");
      }
    }
  };

  return (
    <div className="register">
      <span className="register-title">新規登録</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>ユーザー名</label>
        <input
          className="register-input"
          type="text"
          placeholder="ユーザー名"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>メール</label>
        <input
          className="register-input"
          type="text"
          placeholder="メール"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>パスワード</label>
        <input
          className="register-input"
          type="password"
          placeholder="パスワード"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="register-but">
          会員登録
        </button>
      </form>
      <Link to="/login">
        {" "}
        <button className="login-but">ログイン</button>
      </Link>
      <span className={err ? "errmsg" : "offscreen"}>{err}</span>
    </div>
  );
};

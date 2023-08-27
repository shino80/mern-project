import React, { useContext, useRef} from "react";
import "./login.css";
import { Link ,useNavigate} from "react-router-dom";
import { Context } from "../../../context/Context";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate()
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate('/')
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="login-title">ログイン</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>ユーザー名</label>
        <input
          className="login-input"
          type="text"
          placeholder="ユーザー名"
          ref={userRef}
          required
        />
        <label>パスワード</label>
        <input
          className="login-input"
          type="password"
          placeholder="パスワード"
          ref={passwordRef}
          required
        />
        <button type="submit" className="login-button" disabled={isFetching}>
        ログイン
        </button>
      </form>
      <Link to="/register">
        {" "}
        <button className="register-button">新規登録</button>
      </Link>
    </div>
  );
};

import React from "react";
import "./cssCompoment/layout.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="register-form">
        <div className="register-header">
          <h2 className="h-form">Đăng nhập</h2>
        </div>

        <div className="input-form">
          <div className="text-input">
            <div className="title-input">
              <span>Email</span>
              <input type="text" name="email" placeholder="" />
            </div>
          </div>
        </div>

        <div className="input-form">
          <div className="text-input">
            <div className="title-input">
              <span>Mật khẩu</span>
              <input type="text" name="password" placeholder="" />
            </div>
          </div>
        </div>

            <div className="submit-btn">
            <button type="submit">Đăng nhập</button>
            </div>
            <div className="not-login">Bạn chưa là thành viên <Link className="text-link">Đăng kí ngay</Link> </div>

            <div className="social-lg">
               <div className="social">
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook</span>
               </div>
               <div className="social">
                <i class="fa-brands fa-google"></i>
                <span>Google</span>
               </div>
            </div>

      </div>
    </div>
  );
};

export default Login;

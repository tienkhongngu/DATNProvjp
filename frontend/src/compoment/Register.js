import React from "react";
import "./cssCompoment/layout.css";

const Register = () => {
  return (
    <div>
      <div className="register-form">
        <div className="register-header">
          <h2 className="h-form">Đăng kí</h2>
        </div>

        <div className="input-form">
          <div className="text-input">
            <div className="title-input">
              <span>Họ</span>
              <input type="text" name="fname" placeholder="" />
            </div>
          </div>
        </div>

        <div className="input-form">
          <div className="text-input">
            <div className="title-input">
              <span>Tên hiển thị</span>
              <input type="text" name="lname" placeholder="" />
            </div>
          </div>
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

        <div className="input-form">
          <div className="text-input">
            <div className="title-input">
              <span>Xác nhận mật khẩu</span>
              <input type="text" name="password" placeholder="" />
            </div>
            <div className="submit-btn">
              <button type="submit">Đăng kí</button>
            </div>
            <div className="or-login">
              <hr></hr>
            </div>
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
      </div>
    </div>
  );
};

export default Register;

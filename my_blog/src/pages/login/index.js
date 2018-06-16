import React, { Component } from 'react';
import logo from '../../images/brand.jpg'
import './index.less';

class Login extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="login_container">
      <form>
        <div className="logo">
          <img src={ logo }/>
        </div>
        <div className="email">
          <input type="email"  id="exampleInputEmail1" placeholder="Email"/>
        </div>
        <div className="password">
          <input type="password" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="forget_password">
          <span>忘记密码？</span>
        </div>
        <div className="login_btn">
          <button>登陆</button>
        </div>
        <div className="register_acount">
          <span>没有账号？注册</span>
        </div>
      </form>
      </div>

    );
  }
}

export default Login

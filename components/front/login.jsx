// components/front/login.jsx
 
/** @jsx h */
import { h } from "preact";
import Base from "../base.jsx";
 
function LoginJsx(props){
 
  return(
      <section class="Login" >
          <link rel="stylesheet" href="/styles/front/login.css" />
          <div class="wrapper">
              <div class="title">Login into the Dashboard</div>
              <form action="/login" method="post" >
                  <a>Email:</a><input type="email" name="email" value="guest@khmerweb.app" 
                      required />
                  <a>Password:</a><input type="password" name="password" 
                      value="rdagfyhows"  required />
                  <a></a><input type="submit" value="Submit" />
                  <a></a><div class="info">{props.data.setting.message}</div>
              </form>
        </div>
      </section>
  )
}
 
export default function Login(props){
  props.data.page = LoginJsx
  return(
    <Base data={props.data} />
  )
}
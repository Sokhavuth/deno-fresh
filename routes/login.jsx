// routes/login.jsx

/** @jsx h */
import { h } from "preact";
import VLogin from '../components/front/login.jsx';
import CLogin from "../controllers/front/login.js";


export const handler = {
  async GET(req, ctx){
      return await CLogin.getForm(req, ctx);
  },  

  async POST(req, ctx){
      return await CLogin.checkUser(req, ctx);
  },
}


export default function Template(props){
    return (
        <VLogin data={props.data} />
    )
}
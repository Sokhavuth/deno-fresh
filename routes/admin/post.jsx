// routes/admin/post.jsx

/** @jsx h */
import { h } from "preact";
import VPost from '../../components/admin/post.jsx';
import CPost from "../../controllers/admin/post.js";


export const handler = {
  async GET(req, ctx){
      return await CPost.getPage(req, ctx);
  },  

  async POST(req, ctx){
      return await CPost.createPost(req, ctx);
  },
}


export default function Template(props){
    return (
        <VPost data={ props.data } />
    )
}
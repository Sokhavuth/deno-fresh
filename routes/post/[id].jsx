// routes/post/[id].jsx

/** @jsx h */
import { h } from "preact";
import VPost from '../../components/front/post.jsx';
import CPost from "../../controllers/front/post.js";
 
 
export const handler = {
  async GET(req, ctx) {
      return await CPost.getPost(req, ctx);
  },
}
 
 
export default function Template(props){
  return (
    <VPost data={props.data} />
  )
}
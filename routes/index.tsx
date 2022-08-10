// routes/index.tsx
 
/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import VHome from '../components/front/home.jsx';
import CHome from "../controllers/front/home.js";
 
 
export const handler: Handlers = {
  async GET(req, ctx) {
      return await CHome.getPosts(req, ctx);
  },
}
 
 
export default function Template(props: PageProps){
  return (
    <VHome data={props.data} />
  )
}
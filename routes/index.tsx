// routes/index.tsx
 
/** @jsx h */
import { h } from "preact";
import { setting } from "setting";
import { Handlers, PageProps } from "$fresh/server.ts";
import Home from '../components/front/home.jsx';
 
 
export const handler: Handlers = {
  async GET(req, ctx) {
    const config = setting();
    config.message = "Welcome to Fresh framework!";
    return await ctx.render({ "setting": config });
  },
}
 
 
export default function Template(props: PageProps){
  return (
    <Home data={props.data} />
  )
}
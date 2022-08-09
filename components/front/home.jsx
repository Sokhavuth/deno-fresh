// components/front/home.jsx
 
/** @jsx h */
import { h } from "preact";
import Base from "../base.jsx";
 
function HomeJsx(props){
    return(
        <div>{props.data.setting.message}</div>
    )
}
  
 
export default function Home(props){
    props.data.page = HomeJsx;
    return(
        <Base data={props.data} />
    )
}
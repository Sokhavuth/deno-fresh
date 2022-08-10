// components/front/home.jsx
 
/** @jsx h */
import { h } from "preact";
import Base from "../base.jsx";
 
function HomeJsx(props){
    
    return(
        <section class="Home">
            <link href="/styles/front/home.css" rel="stylesheet" />
            <script src="/scripts/menu.js"></script>
            <header>
                <div class="inner region">
                    <div class="title"><a href="/">{ props.data.setting.site_title }</a></div>
                    <form action="search" method="post">
                        <select class="category" name="frontSearch">
                            <option>Posts</option>
                            <option>Books</option>
                        </select>
                        <input type="text" name="q" required placeholder="Search" />
                        <input type="submit" value="Submit" />
                    </form>
                    <div class="login">
                        <a href="/login">Login</a> | <a href="#">Register</a>
                    </div>
                </div>
            </header>
            <div class="menu">
                <div class="inner region">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/styles/front/menu.css" />

                    <div class="topnav" id="myTopnav" dangerouslySetInnerHTML={{__html: `
                        <a href="/" class="active">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <i class="fa fa-bars"></i>
                        </a>
                    `}}/>
                </div>
            </div>
        </section>
    )
}
  
 
export default function Home(props){
    props.data.page = HomeJsx;
    return(
        <Base data={props.data} />
    )
}
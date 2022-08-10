// components/front/home.jsx
 
/** @jsx h */
import { h } from "preact";
import Base from "../base.jsx";
 

function HomeJsx(props){ 
    const items = props.data.setting.items;
    const listItems = items.map((item) =>
    <li>
      <a class="thumb" href={`/post/${item.id}`}>
        <img src={item.thumb} />
        {((item.videos !== "" )&&(item.videos !== "[]")) &&
          <img class="play-icon" src={`/images/play.png`} />
        }
      </a>
      <div class="title">
        <a href={`/post/${item.id}`}>{item.title}</a>
        <div class="date">{(new Date(item.date)).toLocaleDateString('it-IT')}</div>
        <div class="text" dangerouslySetInnerHTML={{ __html: `${ item.content }` }} />
      </div>
    </li>
    )

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
                        <a href="javascript:void(0);" class="icon" onclick="mobileMenu()">
                            <i class="fa fa-bars"></i>
                        </a>
                    `}}/>
                </div>
            </div>
            <link rel="stylesheet" href="styles/front/main.css" />
            <div class="main region">
                <div class="content">
                    <ul> { listItems } </ul>
                </div>
                <div class="sidebar">Sidebar</div>
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
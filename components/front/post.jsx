// components/front/post.jsx
 
/** @jsx h */
import { h } from "preact";
import Base from "../base.jsx";
 

function PostJsx(props){ 
    const item = props.data.setting.item;

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
            <link rel="stylesheet" href="/styles/front/main.css" />
            <link rel="stylesheet" href="/styles/front/post.css" />
            <script src="/scripts/setPlayer.js"></script>

            <div class="main region">
                <div class="content">
                    <div class="post">
                        <h2 class="title">{item.title}</h2>
                        <div class="categories">{item.categories.toString()}</div>
                        <div class="date">{(new Date(item.date)).toLocaleDateString("it-IT")}</div>
                        
                        { ((item.videos !== '')&&(item.videos !== '[]')) &&
                        <section>
                        <div class="video">
                            <div class="screen"></div>
                            <div class="playlist"></div>
                        </div>

                        <script dangerouslySetInnerHTML={{__html: `
                            const videos = JSON.parse('${ item.videos }')
                            videos.reverse()
                    
                            let clicked = 0
                    
                            for(let index in videos){
                                let ending = ''
                                if(index == videos.length-1){
                                    ending = videos[index].status
                                }

                                let title = videos[index].title
                        
                                let result = '<div id="part'+index+'" class="part" onClick="setScreen(videos['+index+'],'+index+',true)">videoTitle part​ '+(++index)+' '+ending+'</div>'
                                let html = result.replace("videoTitle", "${item.title}")
                                $('.playlist').append(html)
                            }

                            setScreen(videos[0],0,false)
                        `}}/>
                        </section>
                        }

                        <article dangerouslySetInnerHTML={{__html: `
                            ${item.content}
                        `}}/>
                    </div>
                    <div id="disqus_thread"></div>
                    <script dangerouslySetInnerHTML={{__html: `
                        var disqus_config = function () {
                        this.page.url = "https://khmerweb-fresh.deno.dev/post/${item.id}"
                        this.page.identifier = "${item.id}"; 
                        };
                            
                        (function() { // DON'T EDIT BELOW THIS LINE
                        var d = document, s = d.createElement('script');
                        s.src = 'https://multimedia-15.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                        })();
                    `}}/>

                </div>
                <div class="sidebar">Sidebar</div>
            </div>
        </section>
    )
}
  
 
export default function Post(props){
    props.data.page = PostJsx;
    return(
        <Base data={props.data} />
    )
}
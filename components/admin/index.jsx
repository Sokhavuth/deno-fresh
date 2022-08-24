// components/admin/index.jsx

/** @jsx h */
import { h } from "preact";
import Base from "../base.jsx"


function IndexJsx(props){
    const Page = props.data.pageInner;
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
        <div>{(new Date(item.date)).toLocaleDateString('it-IT')}</div>
      </div>
      <div class="edit">
        <a href={`/admin/post/edit/${item.id}`}><img src={`/images/edit.png`} /></a>
        <a href={`/admin/post/delete/${item.id}`}><img src={`/images/delete.png`} /></a>
      </div>
    </li>
    )
    
    return(
        <section class="Index" >
            <link rel="stylesheet" href="/styles/admin/index.css" />
            <script src="/scripts/paginate.js"></script>
        <header>
          <div class="inner region">
              <div class="title">{props.data.setting.page_title}</div>
              <form action="/admin/search" method="post">
                <select name="admin_search">
                  <option>posts</option>
                  <option>books</option>
                </select>
                <input type="text" name="admin_q" required placeholder="Search" />
                <input type="submit" value="Search" />
              </form>
              <div class="logout"><span>{props.data.setting.username}</span> | <a href="/">Home</a> | <a href="#">Logout</a></div>
          </div>
        </header>

        <div class="main region">
          <div class="sidebar">
            <div class="inner">
              <a href="/admin/post"><img src="/images/movie.png" /></a>
              <a href="/admin/post">Post</a>

              <a href="/admin/book"><img src="/images/books.png" /></a>
              <a href="/admin/book">Book</a>

              <a href="/admin/category"><img src="/images/category.png" /></a>
              <a href="/admin/category">Category</a>

              <a href="/admin/upload"><img src="/images/upload.png" /></a>
              <a href="/admin/upload">Upload</a>

              <a href="/admin/user"><img src="/images/users.png" /></a>
              <a href="/admin/user">User</a>

              <a href="/admin/setting"><img src="/images/setting.png" /></a>
              <a href="/admin/setting">Setting</a>
            </div>
          </div>
          <div class="content">
            <Page data={props.data} />
          </div>
        </div>

        <div class="footer region">
          <div class="info">Total amount of items: {props.data.setting.count}</div>
          <ul class="list">
              { listItems }
          </ul>
          <div class="pagination" dangerouslySetInnerHTML={{__html: `
              <img onclick="paginate('${props.data.setting.route}')" src="/images/load-more.png" />
          `}}/>
            
          <div class="credit">&copy; <a href="https://khmerweb.vercel.app/">Khmer Web 2022</a></div>
        </div>
        </section>
    )
}

export default function Index(props){
    props.data.page = IndexJsx
    return(
        <Base data={props.data} />
    )
}
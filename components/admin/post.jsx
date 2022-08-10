// components/admin/post.jsx

/** @jsx h */
import { h } from "preact";
import Index from "./index.jsx";


function PostJsx(props){
  const item = props.data.setting.item;
  let editor = ``
  let videos = ``

  if(item){
      editor = `
          <form action="/admin/post/edit/${item.id}" name="form" method="post" 
          onSubmit="submitForm(event)">
            <input type="text" name="title" value="${item.title}" required 
            placeholder="Post title" />
            <textarea id="editor" name="content" >${item.content}</textarea>
            <input type="text" name="categories" value="${item.categories.toString()}" required 
            placeholder="Categories" />
            <div class="wrapper"> 
                <select id="category" onChange="getCategory()">
                  <option>Select a category</option>
                  <option>News</option>
                  <option>Movie</option>
                  <option>Entertainment</option>
                  <option>Sport</option>
                </select>
                <input type="text" name="thumb" value="${item.thumb}" required 
                placeholder="Thumbnail" />
                <input type="datetime-local" value="${item.date}" name="datetime" required />
                <input type="submit" value="Publish" />
                <input type="hidden" name="videos" value='${item.videos}' />
            </div>
          </form>
      `
      videos = `
      let is_video = null
      is_video = JSON.parse('${item.videos}')
  
      if((is_video !== '') && (is_video !== '[]')){
        let html = ''
        let episode = is_video.length
      
        for(let video of is_video){
            html += "<div>"
            html += '<input value="'+video.type+'" required />'
            html += '<input value="'+video.id+'" required />'
            html += '<input value="'+video.status+'" required />'
            html += '<p title="Delete" onClick="deleteRow(event)" class="episode">'+(episode--)+'</p>'
            html += "</div>"
        }
  
        if($('.viddata div').html() === ''){
          $('.viddata div').append('<b>Type</b>')
          $('.viddata div').append('<b>Video id</b>')
          $('.viddata div').append('<b>Status</b>')
          $('.viddata div').append('<b>Part/Delete</b>')
        }
      
        $('.viddata div:eq(0)' ).after(html)
      }
      `
  }else{
      editor = `
          <form action="/admin/post" name="form" method="post" onSubmit="submitForm(event)">
            <input type="text" name="title" required placeholder="Post title" />
            <textarea id="editor" name="content"></textarea>
            <input type="text" name="categories" required placeholder="Categories" />
            <div class="wrapper"> 
                <select id="category" onChange="getCategory()">
                  <option>Slect a category</option>
                  <option>News</option>
                  <option>Movie</option>
                  <option>Entertainment</option>
                  <option>Sport</option>
                </select>
                <input type="text" name="thumb" required placeholder="Thumbnail" />
                <input type="datetime-local" name="datetime" required />
                <input type="submit" value="Publish" />
                <input type="hidden" name="videos" value="" />
            </div>
          </form>
      `
      videos = ``
  }

  return(
      <section class="Post">
          <script src="/scripts/ckeditor/ckeditor.js"></script>
          <script src="/scripts/addCategory.js"></script>
          <script src="/scripts/video.js"></script>
          <link rel="stylesheet" href="/styles/admin/post.css" />

          <div dangerouslySetInnerHTML={{__html: `
              ${editor}
          `}}/>
          
          <script src="/scripts/ckeditor/config.js"></script>

          <div class="wrapper" >
              <select name="type">
                <option>YouTube</option>
                <option>YouTubePL</option>
                <option>Facebook</option>
                <option>OK</option>
              </select>
              <input type="text" name="videoid" required placeholder="Video id" />
              <select name="status">
                <option>end</option>
                <option>continue</option>
                <option>~ end</option>
              </select>
              <div dangerouslySetInnerHTML={{__html: `
                  <input onclick="genJson()" type="submit" value="Insert video" />
              `}} />
          </div>

          <div class='viddata'>
            <div></div>
          </div>
          <script dangerouslySetInnerHTML={{__html: `${videos}`}}/>
      </section>
  )
}

export default function Post(props){
  props.data.pageInner = PostJsx
  return(
    <Index data={props.data} />
  )
}
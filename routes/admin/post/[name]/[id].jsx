// routes/admin/post/[name]/[id].jsx

/** @jsx h */
import { h } from "preact";
import VPost from '../../../../components/admin/post.jsx';
import CPost from "../../../../controllers/admin/post_edit_delete.js";


export const handler = {
    async GET(req, ctx){
        return await CPost.editDeletePost(req, ctx);
    },


    async POST(req, ctx) {
        return await CPost.updatePost(req, ctx);
    },
}


export default function Template(props) {
    return (
        <VPost data={props.data} />
    )
}
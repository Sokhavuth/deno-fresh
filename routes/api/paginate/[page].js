// routes/api/paginate/[page].js

import { setting } from 'setting';
import postdb from "../../../models/post.ts";


export const handler = async (_req, ctx) => {
    const config = setting();
    const posts = await postdb.paginatePosts(config.post_amount, ctx.params.page);
    return new Response(JSON.stringify({items: posts, type: "post"}));
};
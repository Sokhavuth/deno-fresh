// controllers/front/post.js

import { setting } from "setting";
import postdb from "../../models/post.ts"


class Post{
    async getPost(req, ctx){
        const config = setting();
        config.item = await postdb.getPost(ctx.params.id);
        return await ctx.render({"setting": config});
    }
}

export default new Post();
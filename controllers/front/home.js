// controllers/front/home.js

import { setting } from "setting";
import postdb from "../../models/post.ts"


class Home{
    async getPosts(req, ctx){
        const config = setting();
        config.items = await postdb.getPosts(config.homePostAmount);
        return await ctx.render({"setting": config});
    }
}

export default new Home();
import type { Iblog} from '../../Models/blog';
import { BlogController } from '../../controllers/blog';

const Blog = new BlogController();

export function post (req, res){
   let blog: Iblog = req.body;
   blog.dateCreated = (new Date()).toString();
   Blog.create(blog).then((red: any)=>{
    res.end(red);
   })

}


import * as fs from 'fs'

export default function handler(req, res){
   fs.readdir('pages/blogdata',(err,data)=>{
        console.log(data);
        res.status(200).json(data);
    })
}
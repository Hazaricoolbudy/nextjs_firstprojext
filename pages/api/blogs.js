import * as fs from 'fs'

export default async function handler(req, res){
    let myfile;
    let allblogs=[];
    let data=await fs.promises.readdir('pages/blogdata')
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        
        
      myfile = await  fs.promises.readFile(('pages/blogdata/'+item),'utf-8')
      
      allblogs.push(JSON.parse(myfile))
    }
   
   
    res.status(200).json(allblogs)
//    fs.readdir('pages/blogdata',(err,data)=>{
//        let allblogs=[];
//         console.log(data);
//         data.forEach((item)=>{
//             console.log(item);
//             fs.readFile(('blogdata/'+item),(d)=>{
//                 allblogs.push(d)

//             })
//         })
//         res.status(200).json(data);
//     })
}
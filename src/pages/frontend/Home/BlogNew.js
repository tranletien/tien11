// import { useEffect } from "react";
// import { useState } from "react";
// import postservice from "../../../Service/PostService";
// import NewsItem from "../../../compoment/frontend/NewsItem";

// function BlogNew() {
//     // const [limit,setLimit]=useState(3);
//     const [posts,setPosts]=useState([]);
//     useEffect(function(){
//         (async function(){
//             await postservice.getPostNew(3,"post").then(function(res){
//                 setPosts(res.data.posts);
//             })
//         })();
//     },[]);
//     return ( 
//         <section className="all-blog" style={{backgroundColor:" #f8f2e8"}}>
//             <div className="container mt-6">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="text-center mt-3 mb-3 border-bottom border-secondary">
//                             <h3 style={{color:"#c0c906"}}><strong>TIN TỨC</strong></h3>
//                             <h4 className="fs-5" style={{color:"#3d1a1a"}}><strong>MỚI NHẤT TRONG TUẦN</strong></h4>
//                         </div>
//                         <div className="row">
//                             {posts.map(function(pos,index){
//                                 return <NewsItem post={pos} key={index} />
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         );
// }

// export default BlogNew;
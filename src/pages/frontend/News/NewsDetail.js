// import { useParams } from "react-router-dom";
// import postservice from "../../../Service/PostService";
// import { useEffect, useState } from "react";
// import { urlImage } from "../../../config";
// import NewsItem from "../../../components/frontend/NewsItem";

// function NewsDetail() {
//     const { slug } = useParams();
//     const [post, setPost] = useState([]);
//     const [post_other, setPostOther] = useState([]);
//     useEffect(function () {
//         (function () {
//             postservice.getPostBySlug(slug).then(function (result) {
//                 if (result.data.success === true) {
//                     setPost(result.data.post);
//                     setPostOther(result.data.post_other);
//                 }
//             });
//         })();
//     }, [slug]);

//     if (post_other.length !== 0) {
//         return (
//             <section>
//                 <div className="container">
//                     <div className="mb-2">
//                         <div className="title text-center mt-4">
//                             <h3>{post.title}</h3>
//                         </div>
//                         <div className="row mt-4 mb-4">
//                             <div className="col-md-6">
//                                 <div className="img-fluid text-center ">
//                                     <img src={urlImage + "post/" + post.image} alt="anh bai viet" className="img-fluid" />
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="detail">
//                                     <p>{post.detail}</p>
//                                 </div>
//                                 <div className="detail">
//                                     <p>{post.metadesc}</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="border mb-2"></div>
//                         <div className="">
//                             <div className="title-lq text-center">
//                                 <h3 className="text-danger">CÓ THỂ BẠN SẼ QUAN TÂM</h3>
//                                 <h4>Các bài viết liên quan</h4>
//                             </div>
//                             <div className="content-post row">
//                                 {
//                                     post_other.map(function (post, index) {
//                                         return <NewsItem post={post} key={index} />
//                                     })
//                                 }

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
//     else{
//         return(
//             <section>
//             <div className="container">
//                 <div className="mb-2">
//                     <div className="title text-center mt-4">
//                         <h3>{post.title}</h3>
//                     </div>
//                     <div className="row mt-4 mb-4">
//                         <div className="col-md-6">
//                             <div className="img-fluid text-center ">
//                                 <img src={urlImage + "post/" + post.image} alt="anh bai viet" className="img-fluid" />
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="detail">
//                                 <p>{post.detail}</p>
//                             </div>
//                             <div className="detail">
//                                 <p>{post.metadesc}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="border mb-2"></div>
//                     <div className="">
//                         <div className="title-lq text-center">
//                             <h3 className="text-danger">CÓ THỂ BẠN SẼ QUAN TÂM</h3>
//                             <h4>Các bài viết liên quan</h4>
//                         </div>
//                         <div className="content-post mt-3 text-center">
//                             <strong className="text-danger">Hiện chưa có bài viết liên quan.</strong>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//             );
//     }
// }

// export default NewsDetail;
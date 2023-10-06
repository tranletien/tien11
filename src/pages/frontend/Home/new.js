// // import { useEffect, useState } from "react";
// // import postservice from "../../../services/PostServices";
// // import { useParams } from "react-router-dom";
// // import topicservices from "../../../services/TopicServices";
// // import NewsItem from "../../../compoment/frontend/NewsItem";
// // import ListTopic from "../../../layouts/layoutSite/ListTopic.js";

// // function PostTopic() {
// //     const { slug } = useParams();
// //     const [limit, setLimit] = useState(1);
// //     const [title, setTitle] = useState("");

// //     const [posts, setPosts] = useState([]);
// //     useEffect(function () {
// //         (async function () {
// //             try {
// //                 const topicslug = await topicservices.getBySlug(slug);
// //                 const topicid = topicslug.data.topic.id;
// //                 setTitle(topicslug.data.topic.name);
// //                 const response2 = await postservice.getPostByTopicId(topicid, limit);
// //                 setPosts(response2.data.posts);
// //             } catch (error) {
// //                 console.error(error);
// //             }
// //         })();
// //     }, [limit, slug]);

// //     if (posts.length !== 0) {
// //           return (
// //             <section class="News py-4">
// //                 <div class="container">
// //                     <h4>Tin tức</h4>
// //                     <hr class="bg-light" />
// //                     <div class="row">
// //                         <div class="news col border">
// //                             <div class="new-head container text-center">Thông báo địa điểm kinh doanh</div>
// //                             <div class="new-body container">
// //                                 {
// //                                     PostShows.map(function (post, index) {
// //                                         return <PostItem post={post} key={index} />;
// //                                     })}
// //                             </div>
// //                         </div>
// //                         <div class="news col border" >
// //                             <div class="new-head container text-center">Cẩn thận thú cưng của bạn mùa Covid-19</div>
// //                             <div class="new-body container">
// //                                 Trong tình hình dịch bệnh Covid-19 hiện nay, các chuyên gia khuyến cáo nên tránh tiếp xúc
// //                                 với động vật, bao gồm cả thú nuôi, rửa tay bằng nước và xà phòng
// //                                 sau khi chạm vào vật nuôi.
// //                             </div>
// //                         </div>
// //                         <div class="news col border" >
// //                             <div class="new-head container text-center">Lịch nghỉ tết 2020</div>
// //                             <div class="new-body container" >
// //                                 Lịch nghỉ tết của Shop
// //                             </div>
// //                         </div>

// //                     </div>
// //                 </div>
// //             </section>

// //         );
// //     }

// // export default New;
// import { useEffect, useState } from "react";
// import postservice from "../../../Service/PostService";
// import NewsItem from "../../../compoment/frontend/NewsItem";

// function News() {
//     const [limit, setLimit] = useState(3);

//     const [posts, setPosts] = useState([]);
//     useEffect(function () {
//         (async function () {
//             await postservice.getPostAll(limit, 1).then(function (res) {
//                 setPosts(res.data.posts);
//             })
//         })();
//     }, [limit]);

//     return (
//         <section>
//             <div className="container mb-3">
//                 <div className="title mt-4 mb-4 text-center">
//                     <h2 className="text-danger"><i>TẤT CẢ BÀI VIẾT</i></h2>
//                 </div>
//                 <div className="row">
//                     {posts.map(function (po, index) {
//                         return <NewsItem post={po} key={index} />;
//                     })}
//                 </div>
//                 <div className="row">
//                     <div className="col-12 text-center">
//                         <button className="btn btn-success" onClick={() => setLimit(limit + 3)}>Xem thêm</button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default News;
function New() {
    return (
        <section class="News py-4">
            <div class="container">
                <h4>Tin tức</h4>
                <hr class="bg-light" />
                <div class="row">
                    <div class="news col border">
                        <div class="new-head container text-center">Thông báo địa điểm kinh doanh</div>
                        <div class="new-body container">
                            Nhằm nâng cao
                            chất lượng và mở rộng kinh doanh,
                            Shop xin thông báo địa điểm mới 482 Lê Hồng
                            Phong. P1. Q10
                        </div>
                    </div>
                    <div className="news col border" >
                        <div className="new-head container text-center">Cẩn thận thú cưng của bạn mùa Covid-19</div>
                        <div className="new-body container">
                            Trong tình hình dịch bệnh Covid-19 hiện nay, các chuyên gia khuyến cáo nên tránh tiếp xúc
                            với động vật, bao gồm cả thú nuôi, rửa tay bằng nước và xà phòng
                            sau khi chạm vào vật nuôi.
                        </div>
                    </div>
                    <div className="news col border" >
                        <div className="new-head container text-center">Lịch nghỉ tết 2020</div>
                        <div className="new-body container" >
                            Lịch nghỉ tết của Shop
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default New;
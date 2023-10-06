// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./style.css"
// import topicservices from "../../Service/TopicService";

// function ListTopic() {
//     const [topics, setTopics] = useState([]);
//     useEffect(function () {
//         (async function () {
//             try {
//                 const result = await topicservices.getTopicByParentId(0);
//                 setTopics(result.data.topics)
//             }
//             catch (error) {
//                 console.error(error);
//             }

//         })();
//     }, []);

//     return (
//         <div style={{background:"#ffeee6"}} className="listcategory mb-5 ">
//             <h3 style={{background:"#ff9966"}} className="p-3 m-0 text-center">CHỦ ĐỀ BÀI VIẾT</h3>
//             <ul className="pb-2">
//                 {topics.map(function (top, index) {
//                     return (
//                         <li  key={index}>
//                             <Link className="list" to={"/tin-tuc/" + top.slug} >{top.name}</Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// export default ListTopic;
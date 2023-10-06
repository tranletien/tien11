import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import postservice from "../../../Service/PostService";
import topicservice from "../../../Service/TopicService";

function PostUpdate() {
    const navigate = useNavigate();

    //khai báo state
    const [topic_id, setTopic_id] = useState(1);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [detail, setDetail] = useState("");
    const [type, setType] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState(1);
    const [created_by, setCreated_by] = useState(1);
    const [status, setStatus] = useState(1);

    //chi tiết mẫu tin có id
    const { id } = useParams("id");

    useEffect(function () {
        (async function () {
            await postservice.getById(id).then(function (result) {
                const tmp = result.data.posts;
                setTopic_id(tmp.topic_id);
                setTitle(tmp.title);
                setSlug(tmp.slug);
                setDetail(tmp.detail);
                setType(tmp.type);
                setMetakey(tmp.metakey);
                setMetadesc(tmp.metadesc);
                setCreated_by(tmp.created_by);
                setStatus(tmp.status);
            });
        })();
    }, []);
    //lấy dữ liệu topic
    const [topics, setTopic] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopic(result.data.topics);
            });
        })();
    }, []);
    async function postEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("topic_id", topic_id);
        post.append("title", title);
        post.append("slug", slug);
        post.append("type", type);
        post.append("detail", detail);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("created_by", created_by);
        post.append("status", status);
        if (image.files.length === 0) {
            post.append("image", "");
        }
        else {
            post.append("image", image.files[0]);
        }

        //update
        await postservice.update(id, post).then(function (res) {
            alert(res.data.message);
            navigate("/admin/post", { replace: true });
        });
    }
    return (
        <form onSubmit={postEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm đơn hàng</strong>
                        </div>
                        <div className="col-md-6 text-end" >
                            <button className="btn btn-sm btn-success me-3" type="submit">Lưu</button>
                            <Link to="/admin/post" className="btn btn-sm btn-info ">
                                Quay lại
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="topic_id">topic_id</label>
                                <input
                                    name="topic_id"
                                    className="form-control"
                                    value={topic_id}
                                    onChange={(e) => setTopic_id(e.target.value)}



                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title">title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control"
                                />

                                <div className="mb-3">
                                    <label htmlFor="slug">slug</label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="detail">detail</label>
                                    <input
                                        type="text"
                                        name="detail"
                                        value={detail}
                                        onChange={(e) => setDetail(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="metakey">metakey</label>
                                <input
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="md-3">
                                <label htmlFor="image" >Logo</label>
                                <input type="file" id="image" className="form-control">
                                </input>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">metadesc</label>
                                <textarea
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="created_by">created_by</label>
                                <textarea
                                    name="created_by"
                                    value={created_by}
                                    onChange={(e) => setCreated_by(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PostUpdate;

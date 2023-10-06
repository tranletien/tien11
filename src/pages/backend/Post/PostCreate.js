import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postservice from "../../../Service/PostService";

function PostCreate() {
    const [post, setPost] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getAll().then(function (result) {
                setPost(result.data.post)
            });
        })();
    }, [])
    const Navigate = new useNavigate();
    const [topic_id, setTopic_id] = useState(0);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [detail, setDetail] = useState("");
    const [type, setType] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [created_by, setCreated_by] = useState(1);
    const [status, setStatus] = useState(2);
    const image = document.querySelector("#image");

    // const image = document.querySelector("#image");



    async function postStore(event) {
        event.preventDefault();

        var post = new FormData();
        post.append("topic_id", topic_id);
        post.append("title", title);
        post.append("slug", slug);
        post.append("detail", detail);
        post.append("type", type);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("created_by", created_by);
        post.append("status", status);
        post.append("image", image.files[0]);
        if (image.files.length == 0) {
            post.append("image", "");
        }
        else {
            post.append("image", image.files[0]);
        }

        await postservice.create(post).then(function (res) {
            alert(res.data.message)
            Navigate('../../admin/post', { replace: true });
        });

    }

    return (
        <form onSubmit={postStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">THÊM THƯƠNG HIỆU</strong>

                        </div>
                        <div className="col-md-6 text-end" >
                            <Link to="/admin/post" className="btn btn-sm btn-info me-3">
                                Quay lại
                            </Link>
                            <button className="btn btn-sm btn-success " type="submit">Lưu</button>

                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="topic_id">topic_id</label>
                                <input type="text" name="topic_id" value={topic_id}
                                    onChange={(e) => setTopic_id(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title">title</label>
                                <input type="text" name="title" value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="slug">slug</label>
                                <textarea name="slug" value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="detail">detail</label>
                                <textarea name="detail" value={detail}
                                    onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type">type</label>
                                <textarea name="type" value={type}
                                    onChange={(e) => setType(e.target.value)} className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="metakey">metakey</label>
                                <textarea name="metakey" value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="metadesc">metadesc</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="created_by">created_by</label>
                                <textarea onChange={(e) => setCreated_by(e.target.value)} name="created_by" value={created_by} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image" >Logo</label>
                                <input type="file" id="image" className="form-control">
                                </input>
                                <div className="md-3">
                                    <label htmlFor="status">status</label>
                                    <textarea onChange={(e) => setStatus(e.target.value)} name="status" value={status} className="form-control"></textarea>
                                </div>
                            </div>

                            {/* <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="sort_post">Sort post</label>
                                <select name="parent_id" className="form-control"
                                    value={sort_post}
                                    onChange={(e) => setSort_post(e.target.value)} >
                                    <option value="0">None</option>
                                    {post.map(function (post, index) {
                                        return (
                                            <option value={post.sort_post} >{post.sort_post}</option>


                                        )
                                    })}
                                </select>

                            </div>
                            <div className="md-3">
                                <label htmlFor="image" >Logo</label>
                                <input type="file" id="image" className="form-control">
                                </input>

                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Status</label>
                                <select className="form-control" value={status}
                                    onChange={(e) => setStatus(e.target.value)} >
                                    <option value="1">Xuất bản</option>


                                    <option value="2"> chưa xuất bản </option>
                                </select>

                            </div>


                                </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PostCreate; 
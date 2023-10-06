import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../../Service/MenuService";

function MenuCreate() {
    // const [menu, setmenu] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await menuservice.getAll().then(function (result) {
    //             setmenu(result.data.menu)
    //         });
    //     })();
    // }, [])
    const Navigate = new useNavigate();
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [table_id, setTable_id] = useState(0);
    const [type, setType] = useState(0);
    const [created_by, setCreated_by] = useState(1);
    const [status, setStatus] = useState(2);

    // const image = document.querySelector("#image");



    async function menuStore(event) {
        event.preventDefault();
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("table_id", table_id);
        menu.append("type", type);
        menu.append("created_by", created_by);
        menu.append("status", status);
        // menu.append("image", image.files[0]);
        // if (image.files.length == 0) {
        //     menu.append("image", "");
        // }
        // else {
        //     menu.append("image", image.files[0]);
        // }

        await menuservice.create(menu).then(function (res) {
            alert(res.data.message)
            Navigate('../../admin/menu', { replace: true });
        });

    }

    return (
        <form onSubmit={menuStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">THÊM THƯƠNG HIỆU</strong>

                        </div>
                        <div className="col-md-6 text-end" >
                            <Link to="/admin/menu" className="btn btn-sm btn-info me-3">
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
                                <label htmlFor="name">Tên thương hiệu</label>
                                <input type="text" name="name" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="link">link</label>
                                <textarea name="link" value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="table_id">table_id</label>
                                <textarea name="table_id" value={table_id}
                                    onChange={(e) => setTable_id(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type">type</label>
                                <textarea name="type" value={type}
                                    onChange={(e) => setType(e.target.value)} className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="created_by">created_by</label>
                                <textarea name="created_by" value={created_by}
                                    onChange={(e) => setCreated_by(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Status</label>
                                <textarea onChange={(e) => setStatus(e.target.value)} name="status" value={status} className="form-control"></textarea>
                            </div>

                        </div>

                        {/* <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="sort_order">Sort Order</label>
                                <select name="parent_id" className="form-control"
                                    value={sort_order}
                                    onChange={(e) => setSort_Order(e.target.value)} >
                                    <option value="0">None</option>
                                    {menu.map(function (menu, index) {
                                        return (
                                            <option value={menu.sort_order} >{menu.sort_order}</option>


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
        </form>
    );
}

export default MenuCreate; 
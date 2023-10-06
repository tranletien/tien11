import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderservice from "../../../Service/OrderService";

function OrderCreate() {
    // const [order, setorder] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await orderservice.getAll().then(function (result) {
    //             setorder(result.data.order)
    //         });
    //     })();
    // }, [])
    const Navigate = new useNavigate();
    const [user_id, setUser_id] = useState(1);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");
    const [status, setStatus] = useState(2);

    // const image = document.querySelector("#image");



    async function orderStore(event) {
        event.preventDefault();
        var order = new FormData();
        order.append("user_id", user_id);
        order.append("name", name);
        order.append("phone", phone);
        order.append("email", email);
        order.append("address", address);
        order.append("note", note);
        order.append("status", status);
        // order.append("image", image.files[0]);
        // if (image.files.length == 0) {
        //     order.append("image", "");
        // }
        // else {
        //     order.append("image", image.files[0]);
        // }

        await orderservice.create(order).then(function (res) {
            alert(res.data.message)
            Navigate('../../admin/order', { replace: true });
        });

    }

    return (
        <form onSubmit={orderStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">THÊM THƯƠNG HIỆU</strong>

                        </div>
                        <div className="col-md-6 text-end" >
                            <Link to="/admin/order" className="btn btn-sm btn-info me-3">
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
                                <label htmlFor="user_id">user_id</label>
                                <input type="text" name="user_id" value={user_id}
                                    onChange={(e) => setUser_id(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tên thương hiệu</label>
                                <input type="text" name="name" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone">Phone</label>
                                <textarea name="phone" value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email">Email</label>
                                <textarea name="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">address</label>
                                <textarea name="address" value={address}
                                    onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="note">note</label>
                                <textarea name="note" value={note}
                                    onChange={(e) => setNote(e.target.value)} className="form-control"></textarea>
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
                                    {order.map(function (order, index) {
                                        return (
                                            <option value={order.sort_order} >{order.sort_order}</option>


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

export default OrderCreate; 
import { Link } from "react-router-dom";
import { FiPlus, FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import userservices from "../../../Service/UserService"
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function UserList() {
    const [statusdel, setStatusDelete] = useState([]);
    // const Category = ListCategory.Category;
    const [users, setuser] = useState([]);
    useEffect(function () {
        (async function () {
            await userservices.getAll().then(function (result) {
                setuser(result.data.users)
            });
        })();
    }, [statusdel])
    function userDelete(id) {
        userservices.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id)
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TÀI KHOẢN</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/User/create" className="btn btn-sm btn-success"><FiPlus />Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: "20" }} className="text-center">#</th>
                            <th style={{ width: "50" }} className="text-center">Tên</th>
                            <th style={{ width: "100" }} className="text-center">Email</th>
                            <th className="text-center">Số điện thoại</th>
                            <th className="text-center">Địa chỉ</th>
                            <th style={{ width: "130" }} className="text-center">Hình</th>
                            <th className="text-center">Roles</th>
                            <th style={{ width: "100" }} className="text-center">Ngày tạo</th>
                            <th style={{ width: "30" }} className="text-center">Status</th>
                            <th style={{ width: "140" }} className="text-center">Chức năng</th>
                            <th style={{ width: "30" }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(function (user, index) {
                            return (
                                <tr key="index">
                                    <td className="text-center">
                                        <input type="checkbox"></input>
                                    </td>
                                    <td style={{ width: "30" }} className="text-center">{user.name}</td>
                                    <td className="text-center">{user.email}</td>
                                    <td className="text-center">{user.phone}</td>
                                    <td className="text-center">{user.address}</td>
                                    <td className="text-center">
                                        <img style={{ width: "120px", height: "120px" }} className="img-fluid" src={urlImage + 'user/' + user.image} alt="hing.png" />
                                    </td>
                                    <td className="text-center">{user.roles}</td>
                                    <td className="text-center">27/05/2023</td>
                                    <td className="text-center">{user.status}</td>
                                    <td className="text-center">
                                        <Link className="btn btn-sm btn-info me-1" to={"/admin/user/show/" + user.id}><FiEye /></Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/user/update/" + user.id}><FiEdit /></Link>
                                        <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-danger">
                                                <FiTrash2 />
                                            </button>
                                    </td>
                                    <td className="text-center">{user.id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default UserList;

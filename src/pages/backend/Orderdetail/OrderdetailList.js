import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaRegEdit, FaTrash } from 'react-icons/fa';
import ListOrderdetail from '../../../datatest/Orderdetail.json'

function OrderdetailList() {
    const Orderdetail = ListOrderdetail.Orderdetail;
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/Orderdetail/create">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-bOrderdetailed table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>hình</th>
                            <th>tên thương hiệu</th>
                            <th>slug</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Orderdetail.map(function (Orderdetail, index) {
                            return (
                                <tr key={index}>

                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <img src={Orderdetail.image} style={{ width: 100 }} alt="hinh.png" className="img-fluid" />
                                    </td>
                                    <td>{Orderdetail.name}</td>

                                    <td>ten-thuong-hieu</td>
                                    <td>ngg</td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-1" to={"/admin/Orderdetaildetail/show/1"}>
                                            <FaRegEye />
                                        </Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/Orderdetaildetail/update/1"}>
                                            <FaRegEdit />
                                        </Link>
                                        <button className="btn btn-sm btn-danger">
                                            <FaTrash />
                                        </button>
                                    </td>
                                    <td></td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderdetailList;
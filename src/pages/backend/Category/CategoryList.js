import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaRegEdit, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from "react";
import categoryservice from "../../../Service/CategoryService";
import { urlImage } from '../../../config';
function CategoryList() {
    const [statusdel, setStatusDelete] = useState([]);
    // const Category = ListCategory.Category;
    const [categorys, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategory(result.data.categorys)
            });
        })();
    }, [statusdel])
    function categoryDelete(id) {
        categoryservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id)
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/Category/create">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th style={{ width: 120 }}>hình</th>
                            <th>name</th>
                            <th>slug</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map(function (Category, index) {
                            return (
                                <tr key={index}>

                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <img src={urlImage + 'Category/' + Category.image} style={{ width: 100 }} alt="hinh.png" className="img-fluid" />
                                    </td>
                                    <td>{Category.name}</td>
                                    <td>{Category.slug}</td>
                                    <td>ngg</td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-1" to={"/admin/Category/show/" + Category.id}>
                                            <FaRegEye />
                                        </Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/Category/update/" + Category.id}>
                                            <FaRegEdit />
                                        </Link>
                                        <button onClick={() => categoryDelete(Category.id)} className="btn btn-sm btn-danger">
                                            <FaTrash />
                                        </button>
                                    </td>
                                    <td>{Category.id}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryList;
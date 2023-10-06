import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import categoryservice from "../../../Service/CategoryService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config"
function CategoryShow() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [Category, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getById(id).then(function (result) {
                setCategory(result.data.categorys)
            });
        })();
    }, []);
    function categoryDelete(id) {
        categoryservice.remove(id).then(function (result) {
            alert(result.data.message)
            // setStatusDelete(result.data.categorys)
            navigate("/admin/category", { replace: true });

        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Chi Tiết Sản Phẩm</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success me-1" to="/admin/Category">
                            về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/Category/update/" + Category.id}>
                            <FaRegEdit /> Sửa
                        </Link>
                        <button onClick={() => categoryDelete(Category.id)} className="btn btn-sm btn-danger">
                            <FaTrash />
                        </button>

                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên Trường</th>
                            <th>Gía Trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>{Category.id}</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>{Category.name}</th>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <th>{Category.slug}</th>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <th>
                                <img src={urlImage + "category/" + Category.image} alt="hinh" className="img_fluid" style={{ maxwidth: 200 }} />
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CategoryShow;
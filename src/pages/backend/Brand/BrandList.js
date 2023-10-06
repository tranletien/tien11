import { Link } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import brandservice from "../../../Service/BrandService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config"
function BrandList() {
    const [statusdel, setStatusDelete] = useState([]);
    // const Category = ListCategory.Category;
    const [brands, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setBrand(result.data.brands)
            });
        })();
    }, [statusdel])
    function brandDelete(id) {
        brandservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id)
        })
    }
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to={"/admin/brand/create"}>
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 30 }} className="text-center">#</th>
                                <th style={{ width: 130 }} className="text-center">Logo</th>
                                <th>Tên thương hiệu</th>
                                <th>Slug</th>
                                <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                                <th style={{ width: 30 }} className="text-center">Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.map(function (brand, index) {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <img className="img-fluid" style={{ width: 70, height: 50 }} src={urlImage + 'brand/' + brand.image} alt="hinh" />
                                        </td>
                                        <td>{brand.name}</td>
                                        <td>{brand.slug}</td>
                                        <td className="text-center">{brand.created_at}</td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-success me-1" to={"/admin/brand/show/" + brand.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/" + brand.id}>
                                                <FaEdit />
                                            </Link>
                                            <button onClick={() => brandDelete(brand.id)} className="btn btn-sm btn-danger">
                                                <FaTrash />
                                            </button>
                                        </td>
                                        <td className="text-center">{brand.id}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BrandList; 
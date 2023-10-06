import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import brandservice from "../../../Service/BrandService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config"
function BrandShow() {
    const navigate = useNavigate();

    const { id } = useParams("id")
    const [brand, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getById(id).then(function (result) {
                setBrand(result.data.brand)
            });
        })();
    }, [])
    function brandDelete(id) {
        brandservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate("/admin/brand", { replace: true });

        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Chi Tiết Sản Phẩm</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success me-1" to="/admin/brand">
                            về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/" + brand.id}>
                            <FaRegEdit /> Sửa
                        </Link>
                        <button onClick={() => brandDelete(brand.id)} className="btn btn-sm btn-danger">
                            <FaTrash /> Xóa
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
                            <th>{brand.id}</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>{brand.name}</th>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <th>{brand.slug}</th>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <th>
                                <img src={urlImage + "brand/" + brand.image} alt="hinh" className="img_fluid" style={{ maxwidth: 200 }} />
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default BrandShow;
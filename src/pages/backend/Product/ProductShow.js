import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from '../../../Service/ProductService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
function ProductShow() {
    const navigate = useNavigate();

    const { id } = useParams("id")
    const [product, setproduct] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getById(id).then(function (result) {
                setproduct(result.data.product)
            });
        })();
    }, [])
    function productDelete(id) {
        productservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate("/admin/product", { replace: true });

        })
    }
    return (
        <section className="card">
            <form onSubmit={ProductShow} method="product"></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT Sản Phẩm</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/product" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/product/update/" + product.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={() => productDelete(product.id)} className="btn btn-sm btn-danger">
                            <FaTrash /> Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td className="text-danger" style={{ width: 300 }}><strong>Tên Trường</strong></td>
                            <td className="text-danger"><strong>Giá Trị</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{product.id}  </td>
                        </tr>
                        <tr>
                            <td>Tên Sản Phẩm</td>
                            <td>{product.name}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{product.slug}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <img src={urlImage + "product/" + product.image} alt="hinh" className="img_fluid" style={{ maxwidth: 200 }} />
                        </tr>
                        <tr>
                            <td>Category_id</td>
                            <td>{product.category_id}  </td>
                        </tr>
                        <tr>
                            <td>Brand_id</td>
                            <td>{product.brand_id}  </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{product.price}  </td>
                        </tr>
                        <tr>
                            <td>Price sale</td>
                            <td>{product.price_sale}  </td>
                        </tr>
                        <tr>
                            <td>Qty</td>
                            <td>{product.qty}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default ProductShow;

import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../../Service/ProductService";
import categoryservice from "../../../Service/CategoryService";
import { useEffect, useState } from "react";
import brandservice from "../../../Service/BrandService";
import { FiRotateCcw } from "react-icons/fi";

function ProductUpdate() {
    const navigate = useNavigate(); // chuyen trang

    const [category_id, setCategoryid] = useState();
    const [brand_id, setBrandId] = useState();
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [price_sale, setPriceSale] = useState();
    const [qty, setQty] = useState();
    const [detail, setDetail] = useState("");
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState('1');
    const [slug, setSlug] = useState("");
    const [created_by, setCreated_by] = useState();
    const { id } = useParams("id")

    useEffect(function () {
        (async function () {
            await productservice.getById(id).then(function (result) {
                const data = result.data.products;
                setCategoryid(data.category_id);
                setBrandId(data.brand_id);
                setName(data.name);
                setPrice(data.price);
                setPriceSale(data.price_sale);
                setQty(data.qty);
                setDetail(data.detail);
                setMetadesc(data.metadesc);
                setMetakey(data.metakey);
                setStatus(data.status);
                setSlug(data.slug);
                setCreated_by(data.created_by);

            })
        })()
    }, []);

    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategorys(result.data.categorys)
            });
        })();
    }, [])

    const [brands, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setBrand(result.data.brands)
            });
        })();
    }, [])

    async function productEdit(event) {
        event.preventDefault();//khong load lại trang khi thay do
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("category_id", category_id);
        product.append("brand_id", brand_id);
        product.append("name", name);
        product.append("price", price);
        product.append("price_sale", price_sale);
        product.append("qty", qty);
        product.append("detail", detail);
        product.append("metadesc", metadesc);
        product.append("metakey", metakey);
        product.append("slug", slug);
        product.append("created_by", created_by);

        product.append("status", status);
        if (image.files.length === 0) {
            product.append("image", "")
        }
        else {
            product.append("image", image.files[0]);
        }
        await productservice.update(product, id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/product', { replace: true })
        })
    }




    return (
        <form onSubmit={productEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Chỉnh sửa sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Giá</label>
                                <input onChange={(e) => setPrice(e.target.value)} type="number" name="price" value={price} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Giá Sale</label>
                                <input onChange={(e) => setPriceSale(e.target.value)} type="number" name="price_sale" value={price_sale} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Số lượng</label>
                                <input onChange={(e) => setQty(e.target.value)} type="number" name="qty" value={qty} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Chi tiết sản phẩm</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} name="detail" value={detail} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="slug">slug</label>
                                <textarea onChange={(e) => setSlug(e.target.value)} name="slug" value={slug} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="created_by">created_by</label>
                                <textarea onChange={(e) => setCreated_by(e.target.value)} name="created_by" value={created_by} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">Danh mục cha</label>
                                <select onChange={(e) => setCategoryid(e.target.value)} value={category_id} name="category_id" className="form-control">
                                    <option>---Chọn danh mục---</option>
                                    {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className="md-3">
                                <label htmlFor="parent_id">Thương hiệu</label>
                                <select onChange={(e) => setBrandId(e.target.value)} value={brand_id} name="brand_id" className="form-control">
                                    <option value="0">---Chọn thương hiệu---</option>
                                    {brands.map(function (bra, index) {
                                        return (
                                            <option key={index} value={bra.id}>{bra.name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className="md-3">
                                <label htmlFor="image">Hình sản phẩm</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>

    );
}

export default ProductUpdate;
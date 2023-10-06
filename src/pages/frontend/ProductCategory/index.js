import { useEffect, useState } from "react";
import productservice from "../../../Service/ProductService";
import ProductItem from "../../../components/frontend/productItem";
import categoryservice from "../../../Service/CategoryService";
import { useParams } from "react-router";
import ListBrand from "../../../layouts/layoutSite/ListBrand";
import ListCategory from "../../../layouts/layoutSite/ListCategory";

function ProductCategory() {
    const { slug } = useParams();//do-nam
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(4);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const infocategory = await categoryservice.getBySlug(slug);
                const catid = infocategory.data.categorys.id;//id mau tin cua slug 
                setTitle(infocategory.data.categorys.name);
                const infoproduct = await productservice.getProductByCategoryId(limit, catid);
                setProducts(infoproduct.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);
    return (
    <section className="maincontent">
        <div className="container my-3">
            <div className="product-category">
                <div className="row">
                    <div className="col-md-3">
                        <ListBrand />
                        <ListCategory />

                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center text-danger">{title}</h3>
                        <div className="row">
                            {products.map(function (product, index) {
                                return <ProductItem product={product} key={index} />
                            })}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center my-4">
                                <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ProductCategory;
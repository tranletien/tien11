import ProductItem from "../../../components/frontend/productItem";

import productservice from "../../../Service/ProductService";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProductHome(props) {

    const [products, setProducts] = useState([]);
    try {
        useEffect(function () {
            (async function () {
                await productservice.getProductHome(8, props.category.id)
                    .then(function (result) {
                        setProducts(result.data.products);
                     
                    });
            })();
        }, []);
    } catch (err) {

    }

    return (
        <div className="container my-3">
            <div className="product-category">
                <h3 className="text-center text-danger">{props.category.name} </h3>

                <div className="row my-3">
                    {products.length>0&&products.map(function (product, index) {
                            return <ProductItem product={product} key={index} />;
                        })}
                </div>
                <div className="text-center my-3">
                    <Link to={"san-pham/" + props.category.slug} className="btn btn-success">Xem thêm</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductHome;


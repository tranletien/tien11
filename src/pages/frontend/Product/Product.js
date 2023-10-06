
import React from "react";
import { useEffect, useState } from "react";
// import Logo from '../../../assets/images/logo.jpg';
// import { Link } from "react-router-dom";

import ProductItem from "../../../components/frontend/productItem";
// import productData from "../../../datatest/product.json";
import productservice from "../../../Service/ProductService";
import { useParams } from "react-router";

function Product() {
    // const {page}=useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    
    useEffect(function () {
        (async function () {
          await productservice.getProductAll(limit, 1).then(function (result) {
            setProducts(result.data.products);
          });
        })();
      },[limit]);

    return (
        <section className="maincontent">
            <div className="container my-3">
                <div className="product-category">
                    <h3 className="text-center text-danger">Tất cả sản phẩm</h3>
                    <div className="row my-3">
                        {
                            products.map(function (product, index) {
                                return <ProductItem product={product} key={index} />;
                            })}

                    </div>
                    <div className="col-12 text-center">
                        <button onClick={() => setLimit(limit + 8)}>Xem thêm</button>

                    </div>
                </div>
            </div>
            <div class="container">

                <ul class="pagination   justify-content-center">
                    <li class="page-item "><a class="page-link" href="#">Trước</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">Sau</a></li>
                </ul>
            </div>

        </section >
    );
}
export default Product;
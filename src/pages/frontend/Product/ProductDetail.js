import React, { useEffect, useState } from "react";
// import hinh from '../../../assets/image/Product/thuoc.jpg'
// import meo from '../../../assets/image/Product/meo.jpg'
import productservice from "../../../Service/ProductService";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/frontend/productItem";
import '../../../pages/frontend/Stylee.css';
function ProductDetail() {
    const [product, setProduct] = useState([]);
    const [product_other, setProducOther] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product);
                    setProducOther(result.data.product_other);
                }

            });
        })()
    }, [slug])
    return (

        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={urlImage + "product/" + product.image} alt="hinh" className="img-fluid w-200" />

                    </div>
                    <div className="col-md-6"><h1 >{product.name}</h1>
                        <hr />
                        <h3 className="text-warning">Giá:{product.price}<sup>đ</sup></h3>
                        <div className=" row py-4">
                            <div className="col-1">
                                <div class="add-to-cart-panel">
                                    <input type="number" min="1" class="qty-input" data-val="true" data-val-required="The Số lượng field is required." id="addtocart_1758_EnteredQuantity" name="addtocart_1758.EnteredQuantity" value="1" />
                                </div>
                            </div>
                            <div className="chucart col-7"><input type="button" id="add-to-cart-button-1758" class="button-1 add-to-cart-button" value="Thêm vào giỏ hàng" data-productid="1758" onclick="AjaxCart.addproducttocart_details('/addproducttocart/details/1758/1', '#product-details-form');return false;" /></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"><strong>Giới thiệu:</strong> {product.detail}</div>
                    <h3 className="text-danger p-2">Sản phẩm cùng loại</h3>
                </div>
                <div className="row">
                    {product_other.map(function (product, index) {
                        return <ProductItem key={index} product={product} />
                    })}

                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
// function ProductDetail() {
//     return (
//         <section className="maincontent">
//             <div className="container my-4">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <img src={hinh} alt="hinh" className="img-fluid w-100" />

//                     </div>
//                     <div className="col-md-6"><h1 className="text-danger">Thuốc cho thú cưng</h1>
//                         <h3>Giá:30000</h3>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6"><h3 className="text-danger">Giới thiệu sản phẩm:</h3>
//                             <h5>Sản phẩm là thuốc được sử dụng theo chỉ định của bác sĩ</h5>
//                         </div>

//                         {/* <div className="row">
//                     {product_other.map(function (product, index) {
//                         return <ProductItem key={index} product={product} />
//                     })}

//                 </div> */}
//                     </div>
//                 </div>
//                 <br/>
//                 <div className="row py-4">
//                     <h3 className="text-danger">Sản phẩm liên quan</h3>
//                     <div className="col-6"><img src={meo} /></div>
//                     <div className="col-6"><img src={meo} /></div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ProductDetail;

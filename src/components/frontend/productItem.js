import { Link } from "react-router-dom";
import { urlImage } from "../../config";
import "../../layouts/layoutSite/style.css";
function ProductItem(props) {
    return (
        <div className="col-md-3 mb-3"  >
            <div className="product-item border">
                <div className="product-image">
                    <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                        <img src={urlImage + "product/" + props.product.image} className="img-fluid" alt="san pham" />
                    </Link>
                </div>
                <div className="product-name p-2">

                    <h3 className="text-center fs-6">
                        <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                            {props.product.name}
                        </Link>
                    </h3>
                </div>
                <div className="product-pice p-2">
                    <div className="row">
                        <div className="col-6">
                            <strong className="text-danger fs-3">{props.product.price_sale}<sup>đ</sup></strong>
                        </div>
                        <div className="col-6 text-end">
                            <del className="text fs-3">{props.product.price}</del><sup>đ</sup>
                        </div></div>
                </div>
                <div className="link-detail">Chi tiết</div>
            </div>


        </div>
    );
}
export default ProductItem;
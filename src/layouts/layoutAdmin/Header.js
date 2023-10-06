import { Link } from "react-router-dom";

function Header() {
    return (
        <section className="header bg-primary">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white" to="/admin">Quản trị</Link>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        sản phẩm
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/category">Sản phẩm</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/brand">Thương hiệu</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Contact">Liên hệ</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Menu">Danh mục</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Order">Đặt hàng</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Orderdetail">Orderdetail</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Product">Product</Link></li>                                        <li><Link className="dropdown-item" to="/admin/ProductSp">ProductSp</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Slider">Slider</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Post">Post</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/Topic">Topic</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/User">User</Link></li>



                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled">Disabled</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Header;
import React from "react";
import Logo from '../../assets/image/logo/Screenshot 2023-09-09 194503.png';
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEquals, FaArrowsAltH, FaUserAlt, FaShoppingCart, FaRegistered, FaSignInAlt, FaSearch } from "react-icons/fa";
import "./HeaderStyle.css";

function Header() {
    return (
        <section className="header">
            <div className="shadow">
                <div className="container">
                    <div className="row">
                        <div className="Arrow col-md-2 py-4">
                            <div className="row">
                                <div className="col">
                                    <Link to="/login">
                                        <strong>Login</strong>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/register">
                                        <strong>Register</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Logo} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm..."
                                        aria-label="Tìm kiếm..." aria-describedby="basic-addon2" />
                                    <span className="input-group-text" id="basic-addon2">
                                        <Link>
                                            <FaSearch color="black" />
                                        </Link>
                                    </span>

                                </div>
                                <div className="row">
                                    <ul className="nav justify-content">
                                        <div className="row">
                                            <div className="col">
                                                <li className="nav-item">
                                                    <a className="nav-link text-dark" aria-current="page" href="#"><strong>BOSS
                                                        ĂN GÌ</strong></a>
                                                </li>

                                            </div>
                                            <div className="col">
                                                <li className="nav-item">
                                                    <a className="nav-link text-dark" href="#"><strong>CHĂM SÓC</strong></a>
                                                </li>
                                            </div>
                                            <div className="col">
                                                <li className="nav-item">
                                                    <a className="nav-link text-dark" href="#"><strong>PHỤ KIỆN</strong></a>
                                                </li>
                                            </div>

                                        </div>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col-3 py-2">
                                            <FaShoppingCart size={25} />
                                        </div>
                                        <div className="Login col-9 py-2 ">
                                            <Link to="/cart"> <strong className=" text-danger">Giỏ hàng</strong></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="fs-3-text-danger py-2">
                                                <FaArrowsAltH size={25} />
                                            </div>
                                        </div>
                                        <div className="Login col-9 py-2">
                                            <Link><strong className=" text-danger">So Sánh</strong></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >

    );
}

export default Header;
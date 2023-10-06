<link rel="stylesheet" href="assets/layout/style.css" />;
function Contact() {
    return (
        <section className="policy my-4">
            {/* <div className="wrap-breadcrumb">
                <div className="clearfix container">
                    <div className="row main-header">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ol className="breadcrumb breadcrumb-arrows">
                                <li><a href="/" target="_self">Trang chủ/</a></li>

                                <li className="active"><span>Liên Hệ</span></li>

                            </ol>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 col-xs-6">
                        <div className="flexitem">
                            <div className="item ">
                                <img src="//theme.hstatic.net/1000296531/1000427833/14/chinhsachicon1.png?v=2089" />
                            </div>
                            <div className="item text-end">
                                <a href="https://thoitrangxinh.net/pages/phuong-thuc-giao-hang-va-phi-sip">GIAO HÀNG TOÀN QUỐC</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <div className="flexitem">
                            <div className="item">
                                <img src="//theme.hstatic.net/1000296531/1000427833/14/chinhsachicon2.png?v=2089" />
                            </div>
                            <div className="item">
                                <a href="https://thoitrangxinh.net/pages/hinh-thuc-thanh-toan">THANH TOÁN KHI NHẬN HÀNG</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <div className="flexitem">
                            <div className="item">
                                <img src="//theme.hstatic.net/1000296531/1000427833/14/chinhsachicon3.png?v=2089" />
                            </div>
                            <div className="item">
                                <a href="https://thoitrangxinh.net/pages/quy-dinh-doi-tra-hang-hay-hoan-tien-tai-thoi-trang-xinh">ĐỔI TRẢ TRONG 3 NGÀY</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <div className="flexitem">
                            <div className="item">
                                <img src="//theme.hstatic.net/1000296531/1000427833/14/chinhsachicon4.png?v=2089" />
                            </div>
                            <div className="item">
                                <a href="https://thoitrangxinh.net/pages/lien-he">Hotline: 0914882582</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact" className="w3-content">
                    <h1 className="section-head text-center">Liên hệ chúng tôi</h1>
                    <h6 className="section-head text-center">Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</h6>

                    <div className="infor-content">
                        <ul>
                            <li><i className="icontent ti-location-pin"> </i>Xe máy chính hãng nhập khẩu từ nước ngoài</li>
                            <li><i className="icontent ti-hand-open"></i> Phone: +84914882582</li>
                            <li> <i className="icontent ti-email"></i> Email: vitanxemay@mail.com</li>
                            <li> <i className="icontent ti-email"></i> Địa chỉ: 50 Nguyễn Huệ P.Bến Thành Quận 1</li>
                        </ul>
                    </div>
                    <div className="container ">
                        <h2>Thông tin khách hàng</h2>
                        <form>
                            <div className="form-group">
                                <label for="email">Họ tên:</label>
                                <input type="email" className="form-control " id="email" placeholder="Nhập họ tên" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" className="form-control " id="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="email">Số điện thoại:</label>
                                <input type="email" className="form-control " id="email" placeholder="SĐT" />
                            </div>

                            <div className="form-group">
                                <label for="pwd">Tiêu đề:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Nhập tiêu đề" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Comment:</label>
                                <input type="password" className="form-control py-5" id="pwd" placeholder="Enter..." />
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" /> Remember me</label>
                            </div>
                            <button type="button" className="btn btn-info btn-primary" data-toggle="modal" data-target="#myModal">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
            <div className="map-content my-3 ">
                <img src="https://www.w3schools.com/w3images/map.jpg" alt="" />
            </div>
            <div className="map-content text-center ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746707153127!2d106.77242407389022!3d10.830685758192878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526ffdc466379%3A0x89b09531e82960d!2zMjAgxJDGsOG7nW5nIFTEg25nIE5oxqFuIFBow7osIFBoxrDhu5tjIExvbmcgQiwgUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1688047507315!5m2!1svi!2s" style={{ width: 1300, height: 500, margin: 10 }} ></iframe>
            </div>
        </section>
    );
}
export default Contact;
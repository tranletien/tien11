import "../Stylee.css";
function introduce() {
    return (
        <section className="container">
            {/* <div class="wrap-breadcrumb">
                <div class="clearfix container">
                    <div class="row main-header">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ol class="breadcrumb breadcrumb-arrows">
                                <li><a href="/" target="_self" className="abc">Trang chủ/</a></li>

                                <li class="active"><span>Giới thiệu</span></li>

                            </ol>
                        </div>
                    </div>
                </div>
            </div> */}

            <h2 className="text-center">GIỚI THIỆU</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="m-5">
                        <ul>
                            <li>Hotline: 02822086269</li>
                            <li>Gmail: Heyyoustudiovn@gmail.com</li>
                            <li>Address: 40/2 đường 147 chợ hoa cau</li>
                            <li>Website: heyyoustudio.vn</li>
                            <li>Shopee: https://shopee.vn/heyyoustudio.vn</li>
                            <li>Instagram: https://www.instagram.com/heyyou.officiall/</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default introduce;
// import Logo from '../../image/logo.jpg';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
// import { fa-brands fa-facebook-f } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'
// ReactDOM.render(element, document.body)
// import "./HeaderStyle.css";

function Footer() {

  return (
    //   <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    // </section>

    <section class="myfooter">
      <div class="container">
        <div class="row">
          <div class="col">
            <h5>HỖ TRỢ KHÁCH HÀNG</h5>
            <ul class="list-menu">
              <li class="styleL">Thời gian làm việc từ <strong>8h - 21h hằng ngày</strong>, kể cả Thứ 7 và Chủ
                nhật</li>
              <li class="styleL">Chi nhánh 1:<strong>482 Lê Hồng Phong, P.1, Q.10, Tp.HCM</strong>
                <p /><strong> Hotline: </strong><strong class="text-danger">0944788877</strong>
              </li>
              <li class="styleL">Chi nhánh 2:<strong>69 Lê Trọng Tấn, P.Sơn Kỳ, P.Tân Phú, Tp.HCM</strong>
                <p /><strong> Hotline: </strong><strong class="text-danger">0366788877</strong>
              </li>
            </ul>
          </div>
          <div class="col">
            <h5>VỀ CHÚNG TÔI</h5>
            <ul class="list-menu">
              <li class="styleL" ><Link to="lien-he"> Liên hệ
                chúng tôi</Link></li>
              <li class="styleL"><Link to="gioi-thieu"> Giới thiệu về shop</Link></li>
              <li class="styleL"><Link to="/policy">Chính sách đổi trả</Link></li>
              <li class="styleL"><Link to="/csbh">Chính sách bảo hành</Link></li>
            </ul>
          </div>
          <div class="col">
            <h5>THEO DÕI CHÚNG TÔI</h5>
            <div class="row">
              <div class="iconContact">
                <div class="col">
                  <Link to="https://www.facebook.com/letien.tran.180?mibextid=LQQJ4d" className="p-2 fs-3"><FaFacebookF /></Link>

                  <Link to="https://www.tiktok.com/@userfc9rieatq9?is_from_webapp=1&sender_device=pc" className="p-4 fs-3"><FaTiktok /></Link>

                  <Link to="https://www.instagram.com/tranletien115/" className="p-2 fs-3">
                    <FaInstagram /></Link>
                </div>
              </div>
            </div>
            <hr class="bg-dark" />
            <div class="row">
              <h6>ĐĂNG KÝ NHẬN THÔNG TIN MỚI NHẤT</h6>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Email của bạn..."
                  aria-label="Email của bạn..." aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">Theo dõi</span>
                </div>
              </div>
            </div>
            {/* <!-- <ul class="list-menu">
                            <li/>
                            <li>Giới thiệu về shop</li>
                            <li>Chính sách đổi trả</li>
                            <li>Điều khoản sử dụng</li>

                        </ul> --> */}
          </div>
        </div>
      </div>
    </section >



  );

}

export default Footer; 
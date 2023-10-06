import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuservices from "../../Service/MenuService";
import MenuItem from "./MenuItem";




function Menu() {
  //  phần này là một định nghĩa mảng (array) gồm ba phần tử (3 menu): "Trang chủ", "Sản phẩm" và "Liên hệ".
  //  Mỗi phần tử được biểu diễn dưới dạng một object (đối tượng),
  //  với hai thuộc tính (property) là "name" (tên menu) và "link" (đường dẫn liên kết đến trang tương ứng).
  // const listMenu = [
  //     { name: "Trang chủ", Link: "/" },
  //     { name: "Sản phẩm", Link: "san_pham" },
  //     { name: "Liên hệ", Link: "lien_he" },
  // ];
  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservices.getByParentId('mainmenu', 0).then(function (result) {
        setMenus(result.data.menus);
      })
    })();
  }, []);
  return (
    <section className="bg-darks">
      <div className="container text-center">
        <div className="row">
          <div className="col-8">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <Link className="navbar-brand text-white d-md-none d-sm-block" to="/">
.
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                     {menus.map(function (menu, index) {
                      return (<MenuItem menu={menu} key={index} />);
                    })} 
                  </ul>
                </div>
              </div>
            </nav>

          </div>
          <div className="col-4">
            <div className="user text-end">
              {/* <i class="icon-user fs-3"><BsPersonCircle/></i> */}
              <span className=""></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;


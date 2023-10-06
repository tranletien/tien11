
import { Outlet } from 'react-router-dom';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
// import Gioithieu from './gioithieu';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// để link boostrap ở đây để các con của nó dùng luôn

//hàm index nhưng đặt tên là LayoutSite trùng với thư mục tên do người build đặt
function LayoutSite() {
    return (
        <>
            <Header />
            <Menu />

            <Outlet />
            {/* out let thay thế content vì mỗi trang mỗi khác */}


            <Footer />
        </>
    );
}
export default LayoutSite;


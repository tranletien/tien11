import Contact from "../pages/frontend/Contact/contact";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import Home from "../pages/frontend/Home/Home";
import Product from "../pages/frontend/Product/Product";
import ProductCategory from "../pages/frontend/ProductCategory";
import ProductBrand from "../pages/frontend/ProductBrand";
import gioithieu from "../layouts/layoutSite/gioithieu"
import DKDV from "../layouts/layoutSite/CSBH"
import CSDT from "../layouts/layoutSite/CSDT"
import CSMH from "../layouts/layoutSite/CSMH"
import CSVC from "../layouts/layoutSite/CSVC"
import Login from "../pages/frontend/Login/login";
import CSBH from "../layouts/layoutSite/CSBH";


import policy from "../pages/frontend/Policy/polici";
// import New from "../pages/frontend/Home/new";

const RouterPublic = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: gioithieu },
    { path: '/DKDV', component: DKDV },
    { path: '/CSMH', component: CSMH },
    { path: '/CSDT', component: CSDT },
    { path: '/login', component: Login },
    { path: '/CSVC', component: CSVC },
    // { path: '/san-pham', component: Product },
    { path: '/danh-muc-san-pham/:slug', component: ProductCategory },
    // { path: '/danh-muc-san-pham/corgi:slug', component: ProductCategory },
    { path: '/thuong-hieu/:slug', component: ProductBrand },
    { path: '/chi-tiet-san-pham/:slug', component: ProductDetail },
    // { path: '/bai-viet/:slug', component: New },
    { path: '/san-pham/:page', component: Product },
    { path: '/policy', component: policy },
    { path: '/chi-tiet-san-pham', component: ProductDetail },

    { path: '/csbh', component: CSBH },
    { path: '/lien-he', component: Contact },
];
export default RouterPublic;

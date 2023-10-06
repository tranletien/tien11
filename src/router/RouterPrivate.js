import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandList from "../pages/backend/Brand/BrandList";
import Dashboard from "../pages/backend/Dashboard";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";
import BrandShow from "../pages/backend/Brand/BrandShow";

import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryShow from "../pages/backend/Category/CategoryShow";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";

import ContactList from "../pages/backend/Contact/ContactList";
import ContactCreate from "../pages/backend/Contact/ContactCreate";
import ContactShow from "../pages/backend/Contact/ContactShow";
import ContactUpdate from "../pages/backend/Contact/ContactUpdate";

import MenuList from "../pages/backend/Menu/MenuList";
import MenuCreate from "../pages/backend/Menu/MenuCreate";
import MenuShow from "../pages/backend/Menu/MenuShow";
import MenuUpdate from "../pages/backend/Menu/MenuUpdate";

import OrderList from "../pages/backend/Order/OrderList";
import OrderCreate from "../pages/backend/Order/OrderCreate";
import OrderShow from "../pages/backend/Order/OrderShow";
import OrderUpdate from "../pages/backend/Order/OrderUpdate";

import OrderdetailList from "../pages/backend/Orderdetail/OrderdetailList";
import OrderdetailCreate from "../pages/backend/Orderdetail/OrderdetailCreate";
import OrderdetailShow from "../pages/backend/Orderdetail/OrderdetailShow";
import OrderdetailUpdate from "../pages/backend/Orderdetail/OrderdetailUpdate";

import ProductList from "../pages/backend/Product/ProductList";
import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductShow from "../pages/backend/Product/ProductShow";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";

import PostList from "../pages/backend/Post/PostList";
import PostCreate from "../pages/backend/Post/PostCreate";
import PostShow from "../pages/backend/Post/PostShow";
import PostUpdate from "../pages/backend/Post/PostUpdate";

import TopicList from "../pages/backend/Topic/TopicList";
import TopicCreate from "../pages/backend/Topic/TopicCreate";
import TopicShow from "../pages/backend/Topic/TopicShow";
import TopicUpdate from "../pages/backend/Topic/TopicUpdate";

import SliderList from "../pages/backend/Slider/SliderList";
import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderShow from "../pages/backend/Slider/SliderShow";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";


import UserCreate from "../pages/backend/User/UserCreate";
import UserShow from "../pages/backend/User/UserShow";
import UserUpdate from "../pages/backend/User/UserUpdate";
import UserList from "../pages/backend/User/UserList";

const RouterPrivate = [
    { path: '/admin', component: Dashboard },
    { path: '/admin/brand', component: BrandList },
    { path: '/admin/brand/create', component: BrandCreate },
    { path: '/admin/brand/update/:id', component: BrandUpdate },
    { path: '/admin/brand/show/:id', component: BrandShow },

    { path: '/admin/Category', component: CategoryList },
    { path: '/admin/Category/create', component: CategoryCreate },
    { path: '/admin/Category/update/:id', component: CategoryUpdate },
    { path: '/admin/Category/show/:id', component: CategoryShow },

    { path: '/admin/Contact', component: ContactList },
    { path: '/admin/Contact/create', component: ContactCreate },
    { path: '/admin/Contact/update/:id', component: ContactUpdate },
    { path: '/admin/Contact/show/:id', component: ContactShow },

    { path: '/admin/Menu', component: MenuList },
    { path: '/admin/Menu/create', component: MenuCreate },
    { path: '/admin/Menu/update/:id', component: MenuUpdate },
    { path: '/admin/Menu/show/:id', component: MenuShow },

    { path: '/admin/Order', component: OrderList },
    { path: '/admin/Order/create', component: OrderCreate },
    { path: '/admin/Order/update/:id', component: OrderUpdate },
    { path: '/admin/Order/show/:id', component: OrderShow },

    { path: '/admin/Orderdetail', component: OrderdetailList },
    { path: '/admin/Orderdetail/create', component: OrderdetailCreate },
    { path: '/admin/Orderdetail/update/:id', component: OrderdetailUpdate },
    { path: '/admin/Orderdetail/show/:id', component: OrderdetailShow },

    { path: '/admin/Product', component: ProductList },
    { path: '/admin/Product/create', component: ProductCreate },
    { path: '/admin/Product/update/:id', component: ProductUpdate },
    { path: '/admin/Product/show/:id', component: ProductShow },

    { path: '/admin/Topic', component: TopicList },
    { path: '/admin/Topic/create', component: TopicCreate },
    { path: '/admin/Topic/update/:id', component: TopicUpdate },
    { path: '/admin/Topic/show/:id', component: TopicShow },

    { path: '/admin/Slider', component: SliderList },
    { path: '/admin/Slider/create', component: SliderCreate },
    { path: '/admin/Slider/update/:id', component: SliderUpdate },
    { path: '/admin/Slider/show/:id', component: SliderShow },

    { path: '/admin/Post', component: PostList },
    { path: '/admin/Post/create', component: PostCreate },
    { path: '/admin/Post/update/:id', component: PostUpdate },
    { path: '/admin/Post/show/:id', component: PostShow },

    { path: '/admin/user', component: UserList },
    { path: '/admin/user/create', component: UserCreate },
    { path: '/admin/user/update/:id', component: UserUpdate },
    { path: '/admin/user/show/:id', component: UserShow },
];
export default RouterPrivate;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/layoutSite";
//không cần gõ index vì bản chất khi gọi tập tin index thì tới thư mục là xong có tự zô index khi tới đó
import RouterSite from './router';
// import RouterPrivate from './router/RouterPrivate';
import LayoutAdmin from "./layouts/layoutAdmin";

//function component


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutSite />}>
          {RouterSite.RouterPublic.map(function (route, index) {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />

          })}
          {/* router có thẻ đóng và mở là thằng cha thằng con sẻ kế thừa thằng cha :V */}
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          {RouterSite.RouterPrivate.map(function (route, index) {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />

          })}
          {/* router có thẻ đóng và mở là thằng cha thằng con sẻ kế thừa thằng cha :V */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
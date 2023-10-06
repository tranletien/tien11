

import React, { useEffect, useState } from "react";
import Slideshow from "./Slideshow"
import categoryservice from "../../../Service/CategoryService";
import ProductHome from "./ProductHome";
import New from "./new";

function Home() {
  const [categorys, setCategorys] = useState([]);

  useEffect(function () {
    (async function () {
      await categoryservice.getCategoryByParentId(0).then(function (aa) {
        setCategorys(aa.data.categorys);
      })

    })();
  }, []);


  return (
    <section className="maincontent">
      <Slideshow />
      {categorys.length > 0 && categorys.map(function (category, index) {
        return <ProductHome key={index} category={category} />
      })}
      {/* <New /> */}
      <New />

    </section >
  );
}
export default Home;
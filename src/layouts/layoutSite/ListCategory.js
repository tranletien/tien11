import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../Service/CategoryService";
import './style.css';
function ListCategory() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await categoryservice.getCategoryByParentId(0);
                setCategorys(result.data.categorys)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);

    return (
        <div className="border listcategory mb-5">
            <h3 className="p-3 m-0 text-center text-danger">Danh mục sản phẩm</h3>
            <ul>
                {categorys.map(function (cat, index) {
                    return (
                        <li key={index}>
                            <Link to={"/danh-muc-san-pham/" + cat.slug} >{cat.name}</Link>
                        </li>
                        
                    );
                })}
            </ul>
        </div>
    );
}

export default ListCategory;
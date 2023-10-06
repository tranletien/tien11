import brandservice from '../../Service/BrandService';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function ListBrand() {
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await brandservice.getAll();
                setBrands(result.data.brands);
            } catch (error) {
                console.error(error);
            }

        })();
    }, [])
    return (
        <div className="border listbrand mb-5">
            <h3 className="p-3 m-0 text-center text-danger">Danh mục thương hiệu</h3>
            <ul className='listbrandd'>
                {brands.map(function (br, index) {
                    return (<li key={index}>

                        <Link to={"/thuong-hieu/" + br.slug}>{br.name}</Link>
                    </li>);
                })}
            </ul>
        </div>
    );
}

export default ListBrand;

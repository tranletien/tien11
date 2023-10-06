import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuservices from "../../Service/MenuService";

function MenuItem(props) {
    const rowmenu = props.menu;
    const [menus, setMenus] = useState([]);

    useEffect(function () {
        (async function () {
            await menuservices.getByParentId('mainmenu', rowmenu.id).then(function (result) {
                setMenus(result.data.menus);
            })
        })();
    }, []);
    if (menus.length == 0) {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={rowmenu.link}>
                    {rowmenu.name}
                </Link>
            </li>
        );
    }
    else {
        return (
            <section className="">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-black" to={rowmenu.link} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {rowmenu.name}
                </Link>
                <ul className="dropdown-menu">
                    {menus.map(function (menu1, index) {
                        return (
                            <li key={index}><Link className="dropdown-item" to={menu1.link}>{menu1.name}</Link></li>

                        );
                    })}
                </ul>
            </li>
            </section>
        );
    }

}

export default MenuItem;
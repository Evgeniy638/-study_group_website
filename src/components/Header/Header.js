import React from "react"
import style from "./Header.module.css"
import { NavLink } from "react-router-dom"
import { PATH_ADMIN } from "../../paths"

const Header = (props) => {
    return (
        <header className={style.wrap}>
            <input type="checkbox" id="menu_checbox" className={style.menu_input} />
            <label
                htmlFor="menu_checbox"
                className={style.toggle_menu}
                data-open="&#9776;"
                data-close="&#10006;"
            />

            <ul>
                {props.arrayMenu.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={props.adminMode ? PATH_ADMIN + item.path : item.path}
                            activeClassName={style.active}
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}

                <li>
                    <NavLink
                        to={props.adminMode
                            ? props.location.pathname.replace(PATH_ADMIN, "")
                            : PATH_ADMIN + props.location.pathname
                        }
                        className={`${style.mode} ${props.adminMode ? style.admin : style.user}`}
                        onClick={props.adminMode ? props.disableAdminMode : props.enableAdminMode}
                    >
                        {props.adminMode ? "зайти как пользователь" : "зайти как админ"}
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header

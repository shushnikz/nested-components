import React from 'react'
import MenuItems from './MenuItems'

const Dropdown = ({ submenus, dropdown, depthlevel }) => {
    depthlevel = depthlevel + 1;
    const dropdownClass = depthlevel > 1 ? "dropdown-submenu" : "";
    return (

        <div>
            <ul className={` dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
                {
                    submenus.map((submenu, index) => (
                        <MenuItems items={submenu} key={index} depthlevel={depthlevel} />
                    ))
                }
            </ul>
        </div>

    )
}

export default Dropdown

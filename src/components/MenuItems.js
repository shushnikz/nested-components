import React from 'react'
import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown'

function MenuItems({ items, depthLevel }) {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <div>
            <li className='menu-items' ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {
                    items.submenu ? (<>
                        <button type='button'
                            onClick={() => setDropdown((prev) => !prev)}
                            //  onClick={
                            //     () => setDropdown((prev) => !prev)
                            // }
                            aria-haspopup="menu"
                            aria-expanded={
                                dropdown ? "true" : "false"
                            }
                        >
                            {
                                items.title
                            }{
                                " "
                            }{
                                depthLevel > 0 ? <span> & raquo; </span> : <span className='arrow'></span>
                            }
                        </button>
                        <Dropdown depthlevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                    </>) : (
                        <a href='/#'>
                            {items.title}
                        </a>
                    )
                }
            </li>
        </div>
    )
}

export default MenuItems





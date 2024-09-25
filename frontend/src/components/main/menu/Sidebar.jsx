import ArrowSvg from "../../../img/arrow.svg"
import { Link } from "react-router-dom";
import React from 'react';


const Sidebar = ({categories, triggerSetActiveCategory}) => {

    const handleClick = (e) => {
        if (document.querySelector(".sidebar__button")) {
            if (e.target.closest('.sidebar__button')) {
                document.documentElement.classList.toggle("menu-nav-open");
            }
        };
    }

    const toggleActiveCategory = (e) => {   
        const activeElements = document.getElementsByClassName("active");
    
        Array.from(activeElements).forEach(element => {
            element.classList.remove("active", "disabled");
        });

        e.target.parentElement.classList.add('active', "disabled");
        const category = e.target.innerText;
        triggerSetActiveCategory(category);
    } 

    return ( 
        <aside className="menu--page__sidebar sidebar">
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    {categories.map((category) => (
                        <li key={category.id} className={`sidebar__item ${category.id === 1 ? 'active disabled' : ''}`}>
                            <Link className="sidebar__link" onClick={toggleActiveCategory}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="sidebar__button" onClick={handleClick}>
                <img src={ArrowSvg} alt="arrow"/>
            </button>
        </aside>
     );
}
 
export default Sidebar;
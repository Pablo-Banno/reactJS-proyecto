import React from "react";

import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <a href="/">
                        <h2>Storage Center</h2>
                    </a>
                </li>
                <li>
                    <a href="/">Categoría A</a>
                </li>
                <li>
                    <a href="/">Categoría B</a>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'

function Nav(props) {
    const userId = localStorage.getItem("id")
    // const userName = localStorage.getItem("name")
    let data = ""
    if (userId) {
        data = (
            <>
                <li><Link to={'/'} onClick={props.handleLogout}> <h3>Logout</h3></Link></li>
            </>
        )
    } else {
        data = ( <>
            <li><Link to={'/login'}> <h3>Login</h3></Link></li>

            <li> <Link to={'/register'}> <h3>Register</h3></Link></li>
        </>
        )
    }

    return (
        <nav>
            <ul>
            <li><Link to={'/entry'}> <h3>Add A Wine Entry</h3></Link></li>
                {data}

            </ul>
        </nav>
    );

}

export default Nav;

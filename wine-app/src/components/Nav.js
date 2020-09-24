import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'

function Nav(props) {
    const userId = localStorage.getItem("id")
    // const userName = localStorage.getItem("name")

    return (
        <nav>
            <ul>
                {userId ?

                    <>

                        <li><Link to={'/'} onClick={props.handleLogout}> <h3>Logout</h3></Link></li>
                    </>
                    :
                    <>
                        <li><Link to={'/login'}> <h3>Login</h3></Link></li>

                        <li> <Link to={'/register'}> <h3>Register</h3></Link></li>
                    </>
                }

            </ul>
        </nav>
    );

}

export default Nav;

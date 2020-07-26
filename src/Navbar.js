import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <b><Link to="/">Home</Link>{' '}</b>
            <b><Link to="/products">Products</Link></b>

        </div>
    )
}

export default Navbar

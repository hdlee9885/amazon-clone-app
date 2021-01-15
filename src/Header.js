import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header-search">
                <input className="header-search-input" type="text" />
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-line1">Hello Guest</span>
                    <span className="header-option-line2">Sign in</span>
                </div>
                <div className="header-option">
                    <span className="header-option-line1">Returns</span>
                    <span className="header-option-line2">& Orders</span>
                </div>
                <div className="header-option">
                    <span className="header-option-line1">Your</span>
                    <span className="header-option-line2">Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header-option-basket">
                        <ShoppingBasketIcon />
                        <span className="header-option-line2 header-basket-count">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className="nav">
                <div className='write'>
                    <p className='now'>Now Hiring:</p>
                    <p>Are you a driven and motivated 1st Line IT Support Engineer?</p>
                </div>
                <div className="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
            </div>
            <hr />
            <div className="head">
                <div className="left">
                    <img width={166} height={48} src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/add'}>Add</NavLink></li>
                        <li><NavLink to={'/basket'}>Basket</NavLink></li>
                        <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
                    </ul>
                </div>
                <div className="right">
                    <button>Free Quote</button>
                    <div className="listen">
                        <i class="fa-solid fa-headphones"></i>
                        <div className='question'>
                            <span>Have any Question?</span>
                            <p className='call'>Call: 10 (78) 837 3647</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
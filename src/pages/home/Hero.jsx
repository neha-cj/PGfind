import React from 'react';
import logo from '../../images/mypg-logo.png'
import heroimg from '../../images/hero.png'
import '../../App.css'
import '../home/Hero.css'

function Hero() {
	return (
	    <div className="hero">
            <div className="nav">
                <div className="nav-left">
                    <h1>PGfind</h1>
					<img src={logo} alt=""></img>
					
                    
                </div>
                <div className="nav-right">
                    <a href="/login">Login</a>
                </div>
			</div>
            <div className="hero-cont">
                <div className="hero-left">
                    <h1>Discover your dream PG today</h1>
                    
				    <a href="/login">Join Now</a>

                </div>
                <div className="hero-right">
                     <img src={heroimg} alt=""></img>  
                </div>
            </div>
        </div>
	)
}

export default Hero

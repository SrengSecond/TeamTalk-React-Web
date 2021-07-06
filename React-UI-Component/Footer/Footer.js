import React from 'react';
import Button from "../Button/Button";
import './Footer.css'
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" className="footer-input"
                        name={"email"}
                        placeholder={"Your Email"}/>
                        <Button buttonStyle={'btn--outline'}>SubScribe</Button>
                    </form>
                </div>

            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
               <div className="footer-link-items">
                        <h2>About US</h2>
                        <Link to={'/sign-up'}>How it work</Link>
                        <Link to={'/'}>Testimonials</Link>
                        <Link to={'/'}>Careers</Link>
                        <Link to={'/'}>Investors</Link>
                        <Link to={'/'}>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to={'/sign-up'}>How it work</Link>
                        <Link to={'/'}>Testimonials</Link>
                        <Link to={'/'}>Careers</Link>
                        <Link to={'/'}>Investors</Link>
                        <Link to={'/'}>Terms of Service</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Store</h2>
                        <Link to={'/sign-up'}>How it work</Link>
                        <Link to={'/'}>Testimonials</Link>
                        <Link to={'/'}>Careers</Link>
                        <Link to={'/'}>Investors</Link>
                        <Link to={'/'}>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Partnership</h2>
                        <Link to={'/sign-up'}>How it work</Link>
                        <Link to={'/'}>Testimonials</Link>
                        <Link to={'/'}>Careers</Link>
                        <Link to={'/'}>Investors</Link>
                        <Link to={'/'}>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-warp">
                    <div className="footer-logo">
                        <Link to={'/'} className="social-logo">
                            <i className={"fas fa-pizza-slice"}/>FlyerPizza.
                        </Link>
                    </div>
                    <small className="website-rights">FlyerPizza. © 2021</small>


                    <div className="social-icons">
                        <Link to={'/'}
                            className="social-icon-link facebook"
                            target="_blank"
                            aria-label="Facebook">
                            <i className={"fab fa-facebook"}/>
                        </Link>

                        <Link to={'/'}
                            className="social-icon-link instagram"
                            target="_blank"
                            aria-label="Instagram">
                            <i className={"fab fa-instagram"}/>
                        </Link>

                        <Link to={'/'}
                            className="social-icon-link linked"
                            target="_blank"
                            aria-label="Linked">
                            <i className={"fab fa-linkedin-in"}/>
                        </Link>

                        <Link to={'/'}
                            className="social-icon-link twitter"
                            target="_blank"
                            aria-label="Twitter">
                            <i className={"fab fa-twitter"}/>
                        </Link>
                    </div>
                </div>
            </section>

        </footer>
    );
}

export default Footer;
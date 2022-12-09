import './Footer.css'
import logo from '../img/logo.svg'
import facebook from '../img/facebook.svg'
import picsart from '../img/picsart.svg'
import twitter from '../img/twitter.svg'

function Footer(params) {
    return(
        <footer>
            <div className="footer__wrap">

                <div className="footer__left">

                    <div className="footer__nav">
                        <img src={logo} alt="" />
                        <span>
                            <a href="#">home</a>
                            <a href="#">about</a>
                        </span>
                    </div>

                    <div className="footer__nav-left">
                        <ul>
                            <li>987 Hillcrest Lane</li>
                            <li>Irvine, CA</li>
                            <li>California 92714</li>
                            <li>Call Us:949-833-7432</li>
                        </ul>
                    </div>

                </div>

                <div className="footer__right">
                    <div className="footer__social">
                        <img src={facebook} alt="" />
                        <img src={picsart} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
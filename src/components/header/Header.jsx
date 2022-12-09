import './Header.css'
import logo from '../img/logo.svg'
import leftImg from '../img/Group 8.png'
import heroInfoImg from '../img/Find the best talent.svg'
import heroBottomImg from '../img/heroBottom.svg'

function Header() {
    return(
        <div className="main">
            <header>
                <nav>
                <div className="nav_wrap">
                    <div className="logoo">
                        <img src={logo} alt=""/>

                        <div className="navigation">
                            <a href="#">home</a>
                            <a href="#">about</a>
                        </div>
                    </div>
                    <div className="contact">
                        <a href="#">contact us</a>
                    </div>
                </div>
                </nav>
            </header>

            <div className="hero">
                <img src={leftImg} alt="" />
                <div className="hero__info">
                    <img src={heroInfoImg} alt="" />
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
            </div>

            <div className="hero__bottom">
                <img src={heroBottomImg} alt="" />
            </div>
        </div>
    );
}

export default Header;
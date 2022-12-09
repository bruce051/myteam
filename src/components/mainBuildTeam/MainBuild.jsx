import "./MainBuild.css";
import one from '../img/Experinced.svg'
import two from '../img/Easy.svg'
import three from '../img/Enhanced.svg'
import MainBuildRight from '../img/MainBuildRight.svg'

function MainBuild(params) {
    return(
        <main>
            <div className="main__left">
                <h1>Build & manage distributed teams like no one else.</h1>
            </div>

            <div className="main__center">
                <div className="main__center-1 one">
                    <img src={one} alt="" />
                    <span>
                        <h3>Experienced Individuals</h3>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </span>
                </div>

                <div className="main__center-1 two">
                    <img src={two} alt="" />
                    <span>
                        <h3>Easy to Implement</h3>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </span>
                </div>

                <div className="main__center-1 three">
                <img src={three} alt="" />
                    <span>
                        <h3>Enhanced Productivity</h3>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </span>
                </div>
            </div>

            <div className="main__right">
                <img src={MainBuildRight} alt="" />
            </div>
        </main>
    );
}

export default MainBuild;
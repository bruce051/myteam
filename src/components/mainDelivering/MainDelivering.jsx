import './MainDelivering.css'
import deliverningLeft from '../img/deliveringLeft.svg'
import bugdoy from '../img/bugdoy.svg'
import deliverningRight from '../img/deliveringRight.svg'
import kady from '../img/kady.svg'
import aiysha from '../img/Aiysha.svg'
import arthur from '../img/arthur.svg'


function Delivering(params) {
    return(
        <div className='delivering'>
            <div className="deliverning__left"><img src={deliverningLeft} alt="" /></div>

            <div className="deliverning__center">
                <div className="deliverning__center-info">
                    <h1>Delivering real results for top <br /> companies. Some of our <span> success stories.</span> </h1>
                </div>

                <div className="deliverning__center-members">
                    <div className="member__one">
                        <img src={bugdoy} alt="" />
                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>

                        <h3 className='members__name'>Kady Baker</h3>
                        <p className='members__y'>Product Manager at Bookmark</p>

                        <img className="member_img" src={kady} alt="" />
                        
                    </div>


                    <div className="member__two">
                    <img src={bugdoy} alt="" />
                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>

                        <h3 className='members__name'>Aiysha Reese</h3>
                        <p className='members__y'>Founder of Manage</p>

                        <img className="member_img" src={aiysha} alt="" />
                    </div>


                    <div className="member__three">
                    <img src={bugdoy} alt="" />
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>

                        <h3 className='members__name'>Arthur Clarke</h3>
                        <p className='members__y'>Co-founder of MyPhysio</p>

                        <img className="member_img" src={arthur} alt="" />
                    </div>
                </div>
            </div>

            <div className="deliverning__right"><img src={deliverningRight} alt="" /></div>
        </div>
    );
}

export default Delivering;
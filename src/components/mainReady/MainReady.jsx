import './MainReady.css'
import readyLeft from '../img/redyLeft.svg'

function Ready(params) {
    return(
        <div className="ready__wrap">
            <div className="readyLeft">
                <img src={readyLeft} alt="" />
            </div>
            <div className="readyRight">
                <h1>Ready to get started?</h1>

                <div className="contact ready__contact">
                        <a href="#">contact us</a>
                </div>
            </div>
        </div>
    );
}

export default Ready;
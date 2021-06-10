import React from 'react'
import FBLogo from '../../icons/facebook-logo.svg'
import InstaLogo from '../../icons/insta-logo.svg'
import TwitterLogo from '../../icons/twitter-logo.svg'

function Footer() {
    return (
        <footer className="footer">
                <img onClick={()=>{console.log("fb link")}} className="social-icon" src={FBLogo}/>
                <img className="social-icon" src={InstaLogo}/>
                <img className="social-icon" src={TwitterLogo}/>
        </footer>
    )
}

export default Footer

import React from 'react'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <p>Built with 
                <span role="img" aria-label="heart"> ❤️ </span>
                By
                <a href="#"> Scamander
                <span role="img" aria-label="heart">🪄</span></a>
            </p>
        </div>
    )
}

export default Footer;
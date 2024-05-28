import logo from '../../assets/LOGO-white.png'
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-img"src={logo} alt="" />
            <p className='footer-text'>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
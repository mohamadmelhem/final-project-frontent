import "./Footer.css"
import logo from "../../assets/logo.png"
const Footer = () => {
    return (<>
        <footer class="footer">
            <div class="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <h2 class="">links</h2>
                <ul class="">
                    <li>
                        <a href="#">Online</a>
                    </li>
                    <li>
                        <a href="#">Print</a>
                    </li>
                    <li>
                        <a href="#">Alternative Ads</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="">contact</h2>
                <ul class="">
                    <li>
                        <a href="#">Online</a>
                    </li>
                    <li>
                        <a href="#">Print</a>
                    </li>
                    <li>
                        <a href="#">Alternative Ads</a>
                    </li>
                </ul>
            </div>
        </footer>
        <div class="legal">
            <p>&copy; 2019 Something. All rights reserved.</p>
        </div>
    </>
    )
}
export default Footer;
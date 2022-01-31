const Footer = {
    render:() => {
        return `
            <div class="newsletter-div">
                <i class="fa fa-envelope"></i>
                <h1>Newsletter</h1>
                <div class="newsletter-txt">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="newsletter-input">
                    <input type="text" placeholder="Enter your email address"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div class="footer-div">
                <div class="col">
                    <div class="footer-logo">
                        <img src="../images/13-4-450x450.jpg" height="80" alt="footer-logo">
                    </div>
                </div>
                <div class="col">
                    <h3>INFORMATION</h3>
                    <ul>
                        <li>
                            <h6>About us</h6>
                        </li>
                        <li>
                            <h6>Contacts</h6>
                        </li>
                        <li>
                            <h6>Privacy Policy</h6>
                        </li>
                        <li>
                            <h6>Terms and Conditions</h6>
                        </li>
                        <li>
                            <h6>Returns and refund policy</h6>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li class="contact-list">
                            <h6>283 N. Glenwood Street, Levittown, NY 11756</h6>
                        </li>
                        <li class="contact-list">
                            <h6>712-330-9290</h6>
                        </li>
                        <li class="contact-list">
                            <h6>Mon - Fri: 10:00 - 18:00</h6>
                        </li>
                        <li class="contact-list">
                            <h6>hello@dansredefinedmetals.com</h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rights-div">
                <div class="col">
                    <h6>© 2021 Shoppa. All rights reserved.</h6>
                </div>
                <div class="col text-right">
                    <img src="https://parkofideas.com/goldish/demo1/wp-content/uploads/2021/09/goldish-2127327731.png" height="30" />
                </div>
            </div>
        `;
    },
};

export default Footer;
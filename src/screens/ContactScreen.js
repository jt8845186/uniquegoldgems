export const ContactScreen = {
    render:() => {

        return `
        <div class="contact-container">
            <div class="contact-content">
                <div class="info-block">
                    <h3>Address</h3>
                    <h6>725 5th Ave, New York, NY 10022, USA</h6>
                </div>
                <div class="info-block">
                    <h3>Phone</h3>
                    <h6>712-339-9294</h6>
                    <h6>712-339-9295</h6>
                </div>
                <div class="info-block">
                    <h3>Email</h3>
                    <h6>info@goldish-jew.com</h6>
                </div>
                <div class="info-block">
                    <h3>Working Hours</h3>
                    <h6>Mon-Fri: 10:00 - 18:00</h6>
                </div>
                <div class="info-block">
                    <h3>Follow Us</h3>
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </div>
            </div>
            <div class="contact-form">
                <h3> We'd love to hear from you </h3>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Your name</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Your email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div class="form-group">
                        <label for="message">Your message</label>
                        <textarea id="message" name="message" rows="8" cols="50">
                        </textarea>
                    </div>
                    <div class="form-group">
                        <button id="contact-submit" type="submit">SEND</button>
                    </div>
                </form>
            </div>
        </div>
        `;
    },
};
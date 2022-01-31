const Header = {
    render: () =>{
        return `
            <header>
                <div class="desktop-nav">
                    <div class="header-address">
                        <h5> 283 N. Glenwood Street, Levittown, NY</h5>
                    </div>
                    <div class="logo">
                        <a href="/#/">DANSREDEFINEDMETALS</a>
                    </div>

                    <div class="header-icons">
                        <img src="https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png"/>
                        <img src="https://img.icons8.com/fluency-systems-regular/48/000000/user.png"/>
                        <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                    </div>
                    <div class="header-contacts">
                        <h5>712-339-9294</h5>
                        <h5>info@goldish-jew.com</h5>                
                    </div>
                    <div class="header-pages">
                        <ul>
                            <li><a href="/#/">Home</a></li>
                            <li><a href="/#/about">About</a></li>
                            <li><a href="/#/shop">Shop</a></li>
                            <li><a href="/#/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="header-disclaimer">
                        <h5>Best special offers every week! 40% Off!</h5>
                    </div>
                </div>
                <div class="mobile-nav">
                    <div class="logo">
                        <a href="/#/">DANSREDEFINEDMETALS</a>
                    </div>
                    <div class="mobile-nav-icon">
                        <img src="https://img.icons8.com/material-outlined/24/000000/menu.png"/>
                    </div>                    
                </div>
        </header>
        `;
    },
};

export default Header;
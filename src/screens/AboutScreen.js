const About = {
    render:() => {
        return `
            <div class="about-screen-container">
                <div class="breadcrumb">
                    <h6>Home </h6>
                    <h6> > </h6>
                    <h6> About </h6>
                </div>
                <div class="page-title">
                    <h6>About Us</h6>
                </div>
                <div class="about-content-div">
                    <div class="mission-div">
                        <h3>Our Mission</h3>
                        <div class="divider"></div>
                        <h6>Turpis duis nisl iaculis tincidunt fames feugiat consequat, sed blandit. 
                        Donec tempor ut suspendisse amet. Vulputate consequat pharetra sollicitudin 
                        pellentesque tristique. Nisi, viverra volutpat tellus nisi, mauris magna quis 
                        tristique lobortis. Pharetra porta cursus facilisis non dui sed sit. Rutrum 
                        dolor varius adipiscing quam nisl etiam. Tempus tempor egestas vitae molestie 
                        pulvinar integer posuere id lobortis.
                        </h6>
                    </div>
                    <div class="statement-div">
                        <div class="statement-content-div">
                            <h4> Hello from the CEO </h4>
                            <h6>Turpis duis nisl iaculis tincidunt fames feugiat consequat, sed blandit. 
                            Donec tempor ut suspendisse amet. Vulputate consequat pharetra sollicitudin 
                            pellentesque tristique. Nisi, viverra volutpat tellus nisi, mauris magna quis 
                            tristique lobortis. Pharetra porta cursus facilisis non dui sed sit. Rutrum 
                            dolor varius adipiscing quam nisl etiam. Tempus tempor egestas vitae molestie 
                            pulvinar integer posuere id lobortis.
                            </h6>
                            <h6 class="ceo-txt">Daniel Peterson</h6>
                        </div>
                        <div class="statement-image">
                            <img src="./images/hero2.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

export default About;
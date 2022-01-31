 const Slider = { 
    render:() => {
      
          
            let j = 0;
            let images = [];
        
            images[0] = './images/hero1.jpg';
            images[1] = './images/hero2.jpg';
            images[2] = './images/hero3.jpg'; 

            setInterval(() => {  
            if (j < images.length - 1){
                j++;
                // console.log(images[j]);
                document.getElementById("sliderImg").src = images[j];
            }else{
                j = 0;
                // console.log(images[j]);
                document.getElementById("sliderImg").src = images[j];
            } 
        }, 3000); 

        return `<img id="sliderImg" src="" name="slide" class="hero-slider">`;
    },


};

export default Slider;
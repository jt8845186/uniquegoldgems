    export const  changeImg = () => {  

        let i = 0;
        let images = [];
        let time = 3000;
        let sliderImg = document.getElementById("sliderImg");
    
        images[0] = './images/hero1.jpg';
        images[1] = './images/hero2.jpg';
        images[2] = './images/hero3.jpg';       
        sliderImg.src = images[i];

        setTimeout((
        `{if (i < images.length - 1){
            i++;
        }else{
            i = 0;
        }`), time);
    }

    
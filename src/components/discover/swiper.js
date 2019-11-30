import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
export default{
    swiper(){
       return new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                disableOnInteraction : false,
                delay:1000,
            },
            speed:500,
            slidesPerView: 1,
            loop : true,
        });
    }
}

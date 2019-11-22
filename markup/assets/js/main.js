import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';

// import 'ion-rangeslider';
// import Dropzone from 'dropzone';
// import 'magnific-popup';
// import slick from 'slick-carousel';
// import "jquery-mask-plugin";
// import bound from 'bounds.js';



(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #82B93C',
    'color: #fff',
    'display: inline-block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 16px',
    'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);

  // Lazyload images

  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 50,
    use_native: true
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }
  
  $(function() {

    /*
        Phone Mask
    */

    // $('.form__field_phone input').mask("+7(999)999-99-99", {
    //   placeholder: "+7(___)___-__-__"
    // });


    /*
        Licenses carousel
    */


    // var $licensesList = $('.licenses__list');

    // if( $licensesList.length > 0 ) {
    //   $licensesList.slick({
    //     mobileFirst: true,
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     speed: 300,
    //     adaptiveHeight: true,
    //     centerMode: true,
    //     centerPadding: '66px',
    //     responsive: [{
    //       breakpoint: 577,
    //       settings: {
    //         slidesToShow: 4,
    //       }
    //     },
    //     {
    //       breakpoint: 992,
    //       settings: {
    //         slidesToShow: 4,
    //       }
    //     }]
    //   });
    // }
     
    /*
        Magnific popup
    */


    // $('.licenses__link').magnificPopup({
    //   type: 'image',
    //   gallery: {
    //     enabled: true
    //   }
    // });

    /*
        Maps
    */

    // ymaps.ready(init);

    // function init() {
    //   var myMap = new ymaps.Map("map-1", {
    //     center: [55.798915, 37.410592],
    //     zoom: 17
    //   }, {
    //     searchControlProvider: 'yandex#search'
    //   });

      
    //   var myPlacemark = new ymaps.Placemark(
    //     [55.798915, 37.410592], {
    //       balloonContent: 'г. Москва, ул. Твардовского, 18, к. 2'
    //     }      
    //   );

    //   // Добавление метки на карту
    //   myMap.geoObjects.add(myPlacemark);

    // }

  });

})(jQuery);

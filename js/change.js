window.addEventListener('DOMContentLoaded', function () {
    var countryCodes = {
        RU: {
            deliveryImg: "img/xmap.png.pagespeed.ic.A7o-GJCGyG.png",
            userImg: ['img/reviews-avatar-18.jpg', 'img/reviews-avatar-20.jpg', 'img/reviews-avatar-4.jpg', 'img/reviews-avatar-6.jpg', 'img/reviews-avatar-22.jpg', 'img/reviews-avatar-8.jpg', 'img/reviews-avatar-9.jpg', 'img/reviews-avatar-10.jpg'],
        },
        KZ: {
            deliveryImg: "img/package-geo.png",
            userImg: ['img/kz/w1.jpg', 'img/kz/w2.jpg', 'img/kz/m1.jpg', 'img/kz/w3.jpg', 'img/kz/m2.jpg', 'img/kz/w4.jpg', 'img/kz/m3.jpg', 'img/kz/w5.jpg'],
        },
        UZ: {
            deliveryImg: "img/package-geo.png",
            userImg: ['img/uz/1-uz.jpg', 'img/uz/19.jpg', 'img/uz/1-uz-m.jpg', 'img/uz/2-uz-m.jpg', 'img/uz/3-uz-m.jpg', 'img/uz/2-uz.jpg', 'img/uz/4-uz-m.jpg', 'img/uz/3-uz.jpg', 'img/uz/m7.jpg', 'img/uz/4-uz.jpg']
        },
    };


    var change = function change(e) {
        var deliveryImg = document.querySelectorAll('.delivery-pac-img'),
            userImg = document.querySelectorAll('.user-img');

        // img
        function changeImgCollection(collection, prop) {
            collection.forEach((img, i) => {
                if (img) {
                    img.src = prop[i];
                }
            });
        }

        changeImgCollection(userImg, countryCodes[e].userImg);

        deliveryImg.forEach(function (img) {
            if (img) {
                img.src = countryCodes[e].deliveryImg;
            }
        });
    }

    selectors.forEach(function (elem) {
        elem.addEventListener('change', function (e) {
            if (Object.keys(countryCodes).includes(e.target.value)) {
                change(e.target.value);
            }
        });
    });

    if (Object.keys(countryCodes).includes(selectors[0].value)) {
        change(selectors[0].value);
    }
})
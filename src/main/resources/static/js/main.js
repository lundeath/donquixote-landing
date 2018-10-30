$(document).ready(function () {
    var div = document.getElementById('animDiv');
    var text1 = document.getElementById('first');

    var text2 = text1.cloneNode(true);
    text2.innerText = 'Завітай у кафе «Дон Кіхот»';

    var pic1 = document.createElement('img');
    pic1.setAttribute('src', '/img/soup.jpg');
    pic1.setAttribute('class', 'rounded-circle img-fluid wow bounceInLeft px-2 py-2');
    pic1.setAttribute('data-wow-delay', '0.3s');
    pic1.style.width = '200px';
    pic1.style.height = '200px';
    pic1.setAttribute('alt', 'Крем-суп з гарбуза');

    var pic2 = document.createElement('img');
    pic2.setAttribute('src', '/img/pelmeni.jpg');
    pic2.setAttribute('class', 'rounded-circle img-fluid wow bounceInLeft px-2 py-2');
    pic2.setAttribute('data-wow-delay', '0.5s');
    pic2.style.width = '200px';
    pic2.style.height = '200px';
    pic2.setAttribute('alt', 'Пельмені');

    var pic3 = document.createElement('img');
    pic3.setAttribute('src', '/img/strudel.jpg');
    pic3.setAttribute('class', 'rounded-circle img-fluid wow bounceInLeft px-2 py-2');
    pic3.setAttribute('data-wow-delay', '0.7s');
    pic3.style.width = '200px';
    pic3.style.height = '200px';
    pic3.setAttribute('alt', 'Яблучний струдель');

    var pic1Div = document.createElement('div');
    pic1Div.setAttribute('class', 'd-flex flex-row');
    var badgePic1 = document.createElement('span');
    badgePic1.setAttribute('class', 'badge badge-success wow bounceInLeft');
    badgePic1.innerText = '35₴';
    badgePic1.setAttribute('data-wow-delay', '0.5s');
    var label1 = document.createElement('h3');
    label1.setAttribute('class','pl-3 mt-5 wow bounceInRight');
    label1.setAttribute('data-wow-delay', '0.7s');
    label1.innerText = 'Крем-суп з гарбуза';
    var hPic1Div = document.createElement('h3');
    hPic1Div.appendChild(badgePic1); //badge
    pic1Div.appendChild(hPic1Div); //DIV<-badge
    pic1Div.appendChild(pic1); //DIV<-pic
    pic1Div.appendChild(label1); //DIV<-label

    var pic2Div = document.createElement('div');
    pic2Div.setAttribute('class', 'd-flex flex-row');
    var badgePic2 = document.createElement('span');
    badgePic2.setAttribute('class', 'badge badge-success wow bounceInLeft');
    badgePic2.innerText = '25₴';
    badgePic2.setAttribute('data-wow-delay', '0.7s');
    var label2 = document.createElement('h3');
    label2.setAttribute('class','pl-3 mt-5 wow bounceInRight');
    label2.setAttribute('data-wow-delay', '1s');
    label2.innerText = 'Пельмені домашні';
    var hPic2Div = document.createElement('h3');
    hPic2Div.appendChild(badgePic2); //badge
    pic2Div.appendChild(hPic2Div); //DIV<-badge
    pic2Div.appendChild(pic2); //DIV<-pic
    pic2Div.appendChild(label2); //DIV<-label

    var pic3Div = document.createElement('div');
    pic3Div.setAttribute('class', 'd-flex flex-row');
    var badgePic3 = document.createElement('span');
    badgePic3.setAttribute('class', 'badge badge-success wow bounceInLeft');
    badgePic3.innerText = '40₴';
    badgePic3.setAttribute('data-wow-delay', '1s');
    var label3 = document.createElement('h3');
    label3.setAttribute('class','pl-3 mt-5 wow bounceInRight');
    label3.setAttribute('data-wow-delay', '1.2s');
    label3.innerText = 'Яблучний струдель';
    var hPic3Div = document.createElement('h3');
    hPic3Div.appendChild(badgePic3); //badge
    pic3Div.appendChild(hPic3Div); //DIV<-badge
    pic3Div.appendChild(pic3); //DIV<-pic
    pic3Div.appendChild(label3); //DIV<-label


    text1.addEventListener("animationend", function (evt) {
        text1.classList.add('fadeOutDown');
        text1.style.animationName = 'fadeOutDown';
        text1.setAttribute('data-wow-delay', '0s');
        setTimeout(function () {
            div.replaceChild(text2, text1);
        }, 2000);
    });
    //animate to pictures
    text2.addEventListener("animationend", function (evt) {
        text2.classList.add('fadeOutDown');
        text2.style.animationName = 'fadeOutDown';
        text2.setAttribute('data-wow-delay', '0s');
        setTimeout(function () {
            text2.remove();
            div.remove();
            var coldiv = document.getElementById('colDiv');
            coldiv.appendChild(pic1Div);
            coldiv.appendChild(pic2Div);
            coldiv.appendChild(pic3Div);
        }, 2000);
    });
    var phone = document.getElementById('phone');
    phone.addEventListener("mouseover", function (ev) {
        this.removeAttribute('class');
        this.setAttribute('class', 'btn btn-success mb-2');
    });


    label3.addEventListener("animationend", function (evt) {
        setTimeout(function f(){
            $('#exampleModalCenter').modal();
        }, 3000);
    });
});

$(document).ready(function () {
    $("#home").load('Home.html',()=>
        $('#home').hide().fadeIn('slow')
    )

    $("#aboutUs").load('AboutUs.html', () =>
        $('#aboutUs').hide().fadeIn('slow')
    )

    $("#menu").load('Menu.html', () =>
        $('#menu').hide().fadeIn('slow')
    )

    $("#findUs").load('FindUs.html', () =>
        $('#findUs').hide().fadeIn('slow')
    )
});


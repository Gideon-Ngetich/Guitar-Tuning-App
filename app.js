const userAuthtenticated = sessionStorage.getItem('userAuthenticated');
if (userAuthtenticated === 'true') {
    const signup = document.getElementById('signup');
    const signin = document.getElementById('signin')
    const signupRes = document.getElementById('signup-res');
    const signinRes = document.getElementById('signin-res')
    signupRes.style.display = 'none'
    signinRes.style.display = 'none'
    signin.style.display = 'none'
    signup.style.display = 'none'
}

// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
const toggleButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const navbarCta = document.querySelector('#navbar-cta');
'use strict';

const e = React.createElement;

const Header = () => {
    return e(
        'header',
        {className: 'flex-container', key: 'header'},
        [
            e('div', {className: 'logo-container flex-container', key: 'logo-container'}, [
                e('span', {className: 'menu', key: 'menu'} [
                    e('i', {className: 'fa-solid fa-bars fa-lg', key: 'menu-icon'}, [])
                ]),
                e('img', {src: './assets/images/logo.png', alt: 'logo', key: 'logo-image'})
            ]), 
            e('nav', {className: 'flex-container', key: 'nav-container'}, [
                e('span', {className: 'search', key:'search'}, [
                    e('i', {className: 'fa-solid fa-magnifying-glass fa-lg', key: 'search-icon'}, [])
                ]),
                e('button', {className: 'create-account', key: 'create-account-button'}, 'Create Account')
            ])
        ]
    );
};

const domContainer = document.querySelector('#header-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Header));
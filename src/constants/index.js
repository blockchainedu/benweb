const isProduction = process.env.NODE_ENV === 'production';

export const SITE_URL = isProduction ? 'https://ben-web-dev.herokuapp.com' : 'http://localhost:8080';
export const API_BASE_URL = isProduction ? SITE_URL : 'http://localhost:3000';

export const API_ROOT = `${API_BASE_URL}/api/v/1`;
export const API_ROOT_GRAPH = `${API_ROOT}/graph`;

export const CONTACT_INFO = {
    phoneNumber: '555-555-5555',
    email: 'contact@blockchainedu.org',
    location: 'San Francisco, CA'
}

export const NAVIGATION = {
    items: [
        {
            text: 'Home',
            routes: ['/'],
            imageUrl: null
        },
        {
            text: 'About',
            routes: ['/about'],
            imageUrl: null
        },
        {
            text: 'Team',
            routes: ['/team'],
            imageUrl: null
        },
        {
            text: 'Education',
            routes: ['/education'],
            imageUrl: null
        },
        {
            text: 'Donate',
            routes: ['/donate'],
            imageUrl: null
        }
    ]
}
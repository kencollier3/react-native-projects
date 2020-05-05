import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer L-4e3EAe7yC8rNhoUfr3NbCVBXGJqUwmn4B1h8zDMMxycoikNGACsJfhaqjTOjGWNGL70eMCtd1jKNyHTtxi3t0_lj2yS1w5l0KwwdbBU3VPpuy-Ywkm0vY6CdRzXnYx',
    },
});

import { User } from './classes/User';
import { Company } from './classes/Company';

// Random Name and Company generated via console logs

const user = new User();
console.log(user);
const company = new Company();
console.log(company);

// ----------------------------------------------------------------

new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});



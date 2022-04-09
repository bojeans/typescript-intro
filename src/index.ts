
import { User } from './classes/User';
import { Company } from './classes/Company';
import { CustomMap } from './classes/CustomMap';

// Random Name and Company generated via console logs

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);







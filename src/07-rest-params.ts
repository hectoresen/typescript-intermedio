import {User, ROLES} from './01-enum';

const currentUser = {
    username: 'test',
    role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) {
        return true
    }
    return false;
}
console.log(checkAdminRole());

export const checkRole = (...roles: string[]) => {
//TODO check role
}

console.log(checkRole(ROLES.ADMIN, ROLES.SELLER));
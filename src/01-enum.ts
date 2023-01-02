export enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

export type User = {
    username: string;
    role: ROLES;
}

const hectorUser: User = {
    username: 'hector',
    role: ROLES.ADMIN
}


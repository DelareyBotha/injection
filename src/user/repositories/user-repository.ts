export default class UserRepository {
    users: User[] = [
        new User("11345","John","Doe","password123","johndoe@email.com"),
        new User("12345","Max","Muller","pass231","maxmuller@email.com"),
        new User("13345","Sarah","Pesco","4121pass","sarahpesco@email.com"),
        new User("14345","Joe","Brand","igjdTGS#$T@!","joebrand@email.com"),
    ];

    getUsers() {
        return this.users;
    }
}
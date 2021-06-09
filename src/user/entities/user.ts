class User {
    constructor(
        private readonly _id: string,
        private _name: string,
        private _surname: string,
        private _password: string,
        private _email: string
    ) {}

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get surname(): string {
        return this._surname;
    }
    get password(): string {
        return this._password;
    }
    get email(): string {
        return this._email;
    }
    set name(value: string) {
        this._name = value;
    }
    set surname(value: string) {
        this._surname = value;
    }
    set password(value: string) {
        this._password = value;
    }
    set email(value: string) {
        this._email = value;
    }
}

module.exports = User;
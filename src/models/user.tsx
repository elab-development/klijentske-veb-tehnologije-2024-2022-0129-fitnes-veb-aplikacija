export class User {
    username: string
    password: string
    fullName: string
    email: string
    phone: string
    constructor(username: string, password: string, fullName: string, email: string, phone: string) {
        this.username = username
        this.password = password
        this.fullName = fullName
        this.email = email
        this.phone = phone
    }
}
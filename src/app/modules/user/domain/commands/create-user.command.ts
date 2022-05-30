export default class CreateUserCommand {
    public fullName: string
    public email: string
    public password: string
   
    constructor(fullName: string, email: string, password: string) {
        this.email=email
        this.password=password
        this.fullName=fullName
    }
}
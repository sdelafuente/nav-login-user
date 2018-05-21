export class Persona {
    public usuario: string = '';
    public password: string = '';


    constructor(name, last)
    {
        this.usuario = name;
        this.password = last;
    }
}

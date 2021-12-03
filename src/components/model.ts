class Todos{
    todos:string;
    id:string
    constructor(todos:string){
        this.todos = todos
        this.id = new Date().toISOString()
    }
}

export default Todos
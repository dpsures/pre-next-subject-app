export class Course {
    Id : number;
    Name : string;
    duration : string;
    status : string;

    constructor(){}

    getId(){
        return this.Id;
    }

    setId(id : number){
        this.Id = id;
    }

    getName(){
        return this.Name;
    }

    setName(name : string){
        this.Name = name;
    }

    getDuration(){
        return this.duration;
    }

    setDuration(duration : string){
        this.duration = duration;
    }

    getStatus(){
        return this.status;
    }

    setStatus(status : string){
        this.status = status;
    }
}
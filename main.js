class School {
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents=numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
        if(isNaN(newNumberOfStudents)){
            console.log('Invalid input: numberOfStudents must be set to a Number.')
            
        } else{this._numberOfStudents = newNumberOfStudents;}
    }
    quickFact(){

    }
    pickSubstitudeTeacher(){

    }
}

// const abbcc = new School('GreatSchool','High',0);
// abbcc.numberOfStudents = 51;
// console.log(abbcc.numberOfStudents);

class Primary extends School {
    constructor(name,level,numberOfStudents){
        super(name,level,numberOfStudents,pickupPolicy);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name,level,numberOfStudents){
        super(name,level,numberOfStudents)
    }
}

class High extends School {
    constructor(name,level,numberOfStudents,sportTeams){
        super(name,level,numberOfStudents);
        this._sportTeams = sportTeams;
}
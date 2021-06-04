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
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)

    }
    static pickSubstitudeTeacher(substituteTeachers){
        const randomNumber = Math.floor(Math.random()*(substituteTeachers.length));
        return substituteTeachers[randomNumber];
    }
    
}

// const abbcc = new School('GreatSchool','High',0);
// abbcc.numberOfStudents = 51;
// console.log(abbcc.numberOfStudents);

class Primary extends School {
    constructor(name,level,numberOfStudents,pickupPolicy){
        super(name,level,numberOfStudents);
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
}

// const abbcc = new Primary('San','Primary',65,'Test');
// // abbcc.numberOfStudents = 51;
// // console.log(abbcc.numberOfStudents);
// abbcc.quickFact(); 

//console.log(School.pickSubstitudeTeacher(['a','b','c','d','e']))

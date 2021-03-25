namespace randomPoem {

    let person: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let todo: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let thing: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let verse: string = "";

    for (let index: number = 6; index <= thing.length; index--) {
        if (index == 0) {
            break;
        } 
        
        getVerse(person, todo, thing, verse);
    }

    function getVerse(_person: string[], _todo: string[], _thing: string[], _verse: string ): string {
        
        let randomPerson: number = Math.floor(Math.random() * _person.length);
        _verse += _person.splice(randomPerson, 1) + " ";

        let randomTodo: number = Math.floor(Math.random() * _person.length);
        _verse += _todo.splice(randomTodo, 1) + " ";

        let randomThing: number = Math.floor(Math.random() * _person.length);
        _verse += _thing.splice(randomThing, 1) + " ";

        console.log(_verse);
        return _verse;        
    }
}
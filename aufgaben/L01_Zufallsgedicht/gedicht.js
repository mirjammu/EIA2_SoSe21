"use strict";
var randomPoem;
(function (randomPoem) {
    let person = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let todo = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let thing = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let verse = "";
    for (let index = 6; index <= thing.length; index--) {
        if (index == 0) {
            break;
        }
        getVerse(person, todo, thing, verse);
    }
    function getVerse(_person, _todo, _thing, _verse) {
        let randomPerson = Math.floor(Math.random() * _person.length);
        _verse += _person.splice(randomPerson, 1) + " ";
        let randomTodo = Math.floor(Math.random() * _person.length);
        _verse += _todo.splice(randomTodo, 1) + " ";
        let randomThing = Math.floor(Math.random() * _person.length);
        _verse += _thing.splice(randomThing, 1) + " ";
        console.log(_verse);
        return _verse;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=gedicht.js.map
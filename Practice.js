//A little bit about me   
const person = {
    firstName: "Miami",
    lastName: "Heat",
    favcolor: "Green",
    hobby: "Play video game"
    }

    //array with my 3 favorite movies
    const favMovies = [

        "High School Musical 2",
        "Hart Target",
        "Titanic",
    ]

    

    function hiMyfullNameIs (firstName, lastName, favColor, hobby){
        console.log (firstName + " " + lastName + " " + hobby)
    }

    function iLikethese3Movies() {
        (favMovies[0] + " " + favMovies[1] + " "+ favMovies[2])

    }

    function sumAdd(x=15, y=20, r=30) {
        let sum = x + y + r;
        return sum
    }

    console.log (sumAdd (15, 20,30));


    hiMyfullNameIs ("Miami" , "Heat" , "Green" , "Play video game")
    iLikethese3Movies ("High School" , "Hard Target", "Titanic")
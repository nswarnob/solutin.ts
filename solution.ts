function formatValue (value: string | number | boolean){

    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else if (typeof value === 'number'){
        return value*10;
    }
    else if (typeof value === 'boolean'){
        return !value;
    }
}




function getLength (value: string | string[] ){
    if(Array.isArray(value)){
        return ('Here is Array Length:' + value.length)
    } else {
        return ('Here is string Length:' + value.length)
    }
}




class person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}




//Create a function filterByRating that accepts an array of items, where each item has the following properties:

// title (string)
// rating (number between 0 and 5)
// The function should return a new array containing only the items with a rating of 4 or more.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Do not mutate the original array.

type Item ={
    title: string;
    rating:number;
}

function filterByRating(items: Item[] ): Item[] {
       return items.filter(item=> item.rating >=4);
}
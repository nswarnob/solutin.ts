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




type Item ={
    title: string;
    rating:number;
};

function filterByRating(items: Item[] ): Item[] {
       return items.filter(item=> item.rating >=4);
}




type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers (users: User[]): User[]{
      return users.filter(user => user.isActive === true);
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book){
  const available = book.isAvailable ? 'Yes' : 'No';
  return (`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available} `)
}
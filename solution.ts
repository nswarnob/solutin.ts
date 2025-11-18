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




function getUniqueValues(arr1: (string|number)[], arr2:(string|number)[]): (string|number)[] {
     const result: (string|number)[]=[];

     for (let i = 0; i < arr1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[result.length] = arr1[i];
    }
  }

   for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[result.length] = arr2[i];
    }
  }
  return result;
}




type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }
  
  return products.reduce((total, product) => {
    const subtotal = product.price * product.quantity;
    
    if (product.discount !== undefined && product.discount > 0) {
      const discountAmount = (subtotal * product.discount) / 100;
      return total + (subtotal - discountAmount);
    }
    
    return total + subtotal;
  }, 0);
}
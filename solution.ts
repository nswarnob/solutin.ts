//Create a function formatValue that accepts a value which may be a string, number, or boolean, and returns the following based on the value type:

// If the input is a string → return the string in uppercase
// If the input is a number → return the number multiplied by 10
// If the input is a boolean → return the opposite value (true → false, false → true)


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


//Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

// If the input is a string → return the number of characters.
// If the input is an array → return the number of elements.


function getLength (value: string | string[] ){
    if(Array.isArray(value)){
        return ('Here is Array Length:' + value.length)
    } else {
        return ('Here is string Length:' + value.length)
    }
}


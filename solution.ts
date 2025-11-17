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




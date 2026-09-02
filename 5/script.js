let arr = [10,20,30];

showArray();

function showArray(){
    document.getElementById("array").innerHTML =
    "Array : " + arr.join(", ");
}

// PUSH

function pushItem(){
    arr.push(40);
    showArray();
    document.getElementById("result").innerHTML =
    "push() adds element at end";
}

// POP

function popItem(){
    arr.pop();
    showArray();
    document.getElementById("result").innerHTML =
    "pop() removes last element";
}

// SHIFT

function shiftItem(){
    arr.shift();
    showArray();
    document.getElementById("result").innerHTML =
    "shift() removes first element";
}

// UNSHIFT

function unshiftItem(){
    arr.unshift(5);
    showArray();
    document.getElementById("result").innerHTML =
    "unshift() adds element at beginning";
}

// SPLICE

function spliceItem(){
    arr.splice(1,1);
    showArray();
    document.getElementById("result").innerHTML =
    "splice() removes element from index 1";
}

// SLICE

function sliceItem(){

    let x = arr.slice(1,3);

    document.getElementById("result").innerHTML =
    "slice() = " + x.join(", ");
}

// MAP

function mapItem(){

    let x = arr.map(function(i){
        return i*2;
    });

    document.getElementById("result").innerHTML =
    "map() = " + x.join(", ");
}

// FILTER

function filterItem(){

    let x = arr.filter(function(i){
        return i>15;
    });

    document.getElementById("result").innerHTML =
    "filter() = " + x.join(", ");
}

// REDUCE

function reduceItem(){

    let x = arr.reduce(function(sum,i){
        return sum+i;
    },0);

    document.getElementById("result").innerHTML =
    "reduce() = " + x;
}

// FOREACH

function forEachItem(){

    let text="";

    arr.forEach(function(i){
        text += i + " ";
    });

    document.getElementById("result").innerHTML =
    "forEach() = " + text;
}

// MAX

function maxItem(){
    let x = Math.max(...arr);
    document.getElementById("result").innerHTML =
    "max() = " + x;
}

// MIN

function minItem(){
    let x = Math.min(...arr);
    document.getElementById("result").innerHTML =
    "min() = " + x;
}
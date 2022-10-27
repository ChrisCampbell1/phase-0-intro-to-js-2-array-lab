// Write your solution here!
const cats = ["Milo" , "Otis" , "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat (name){
    const newCats = [...cats]
    newCats.push(name)
    return newCats
}

function prependCat(name){
    const  newCats = [...cats]
    newCats.unshift(name)
    return newCats
}

function removeLastCat(name){
    const newCats = [...cats]
    newCats.pop()
    return newCats
}

function removeFirstCat(name){
    const newCats = [...cats]
    newCats.splice(0,1)
    return newCats
}

//console.log(newCats)
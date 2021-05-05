const cats = ["Milo", "Otis", "Garfield"]

// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    return cats.push("Ralph")
}

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

// removes the last cat from the cats array:
function destructivelyRemoveLastCat(name) {
    return cats.pop()
}

// removes the first cat from the cats array:
function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged:
function appendCat(name) {
    const newCats = [...cats]
    newCats.push("Broom")
    return newCats
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged:
function prependCat(name) {
    const newCats = [...cats]
    newCats.unshift("Arnold")
    return newCats
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged:
function removeLastCat() {
    const newCats = [...cats]
    newCats.pop()
    return newCats
}

function removeFirstCat() {
    const newCats = [...cats]
    newCats.shift()
    return newCats
}


// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
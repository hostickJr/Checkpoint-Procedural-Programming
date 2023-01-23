// using a procedure :

function dotProduct(v1, v2) {
    let prod = 0;
    for(let i = 0; i < v1.length; i++){
        prod += v1[i] * v2[i]
    }
    return prod;
}

function isOrthogonal(v1, v2) {
    const dotProd = dotProduct(v1, v2);
    if (dotProd === 0) {
        console.log("The vectors are orthogonal");
    } else {
        console.log("The vectors are not orthogonal.");
    }
}

const v1 = [1, 0, 0]
const v2 = [4, 5, 6]
const v3 = [7, 8, 9]
const v4 = [0, 1, 0]

//using a function instead of a procedure :

function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function isOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

const v5 = [1, 0, 0];
const v6 = [0, 1, 0];
const v7 = [1, 1, 1];
const v8 = [-1, -1, -1];


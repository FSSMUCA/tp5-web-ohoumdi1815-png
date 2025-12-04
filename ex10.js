function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sommeRecursive(n - 1);
    }
}

let n = 10;

console.log("Somme itérative de 1 à " + n + " : " + sommeIterative(n));
console.log("Somme récursive de 1 à " + n + " : " + sommeRecursive(n));

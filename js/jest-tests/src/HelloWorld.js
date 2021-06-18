// Enjoy arrow functions
//export default () => 'Hello World!';



 export default class DNAExample {
    static switchAT(name) {
        if (name === 'a')  
            return 't';
        return null;
    }

    static switchTA(name) {
        if (name === 't') 
            return 'a';
        return null;
    }

    static switchCG(name) {
        if (name === 'c')  
            return 'g';
        return null;
    }
    
    static switchGC(name) {
        if (name === 'g')
            return 'c';
        return null;
    }

    static switchAU(name) {
        if (name === 'a')
            return 'u';
        return null;
    }

    static reverse(sequence) {
        return sequence.split("").reverse().join("");
    }

    static computeAntisense(sequence) {
        return this.reverse(sequence).toLowerCase().split("").map((letter) => {
            return this.switchAT(letter) || this.switchTA(letter) || this.switchCG(letter) || this.switchGC(letter) || letter;
        }).join("").toUpperCase();
    }

    static computeRna(sequence) {
        return this.reverse(sequence).toLowerCase().split("").map((letter) => {
            return this.switchAU(letter) || this.switchTA(letter) || this.switchCG(letter) || this.switchGC(letter) || letter;
        }).join("").toUpperCase();
    }

    // static translate(sequence) {

    // }
 }
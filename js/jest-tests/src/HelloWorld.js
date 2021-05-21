// Enjoy arrow functions
//export default () => 'Hello World!';



 export default class DNAExample {
    static switchAT(name) {
        if (name === 'a')  
            return 't';
        if (name === 't') 
            return 'a';
        return null;
    }
    
    static reverse(sequence) {
        return sequence.split("").reverse().join("");
    }

    // static translate(sequence) {

    // }
 }
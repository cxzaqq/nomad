var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.def = function (term) {
        return this.words[term];
    };
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.del = function (term) {
        if (this.words[term]) {
            delete this.words[term];
        }
        else {
            console.log("there is no ".concat(term));
        }
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var kimchi = new Word("kimchi", "한국 음식");
var dict = new Dict();
dict.add(kimchi);

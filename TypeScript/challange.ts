type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    if (this.words[term]) delete this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "korean food");
const soju = new Word("soju", "korean drink");

const dict = new Dict();
dict.add(kimchi);
dict.add(soju);

dict.update(new Word("soju", "korean famous drkink"));

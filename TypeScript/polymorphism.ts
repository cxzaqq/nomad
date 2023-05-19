interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
//클래스에 제네릭 => 인터페이스 => 인터페이스도 제네릭 사용
//즉 제네릭을 인자처럼 전달 가능

const stringsStorage = new LocalStorage<string>();
stringsStorage.set("key", "hi");

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.set("key", true);

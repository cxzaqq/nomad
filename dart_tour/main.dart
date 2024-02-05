String sayHello(String name) {
  return "Hello $name nice to meet you";
}

/*
arrow 사용 가능
String sayHello1(String name) => "Hello $name nice to meet you";
*/

void main() {
  print(sayHello("yoon"));
}

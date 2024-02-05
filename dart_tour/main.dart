String sayHello(String name) {
  return "Hello $name nice to meet you";
}

/*
arrow 사용 가능
String sayHello1(String name) => "Hello $name nice to meet you";
*/

String sayHello1(String name, int age, String country) {
  return "Hello $name, you are $age, and you come from $country";
}

//named parameters 사용 시 null safety 때문에 기본값 설정해야 함
String sayHello2(
    {String name = "anon", int age = 99, String country = "wakanda"}) {
  return "Hello $name, you are $age, and you come from $country";
}

//근데 default value가 아닌 유저에게 직접 입력을 받고 싶다면
String sayHello3(
    {required String name, required int age, required String country}) {
  return "Hello $name, you are $age, and you come from $country";
}

void main() {
  //좋은 방법은 아님. 직관적이지 않다
  print(sayHello1("yoon", 10, "Kor"));
  //대신 이렇게 순서는 상관 없음
  print(sayHello2(age: 10, country: "Kor"));
  print(sayHello3(age: 10, country: "Kor", name: "yoon"));
}

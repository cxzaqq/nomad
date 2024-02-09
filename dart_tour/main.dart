String sayHello(String name) {
  return "Hello $name nice to meet you";
}

/*
arrow 사용 가능
String sayHello1(String name) => "Hello $name nice to meet you";
*/

//positional parameters 순서 중요
String sayHello1(String name, int age, String country) {
  return "Hello $name, you are $age, and you come from $country";
}

//named parameters 사용 시 null safety 때문에 기본값 설정해야 함. 순서 중요 X.
String sayHello2(
    {String name = "anon", int age = 99, String country = "wakanda"}) {
  return "Hello $name, you are $age, and you come from $country";
}

//근데 default value가 아닌 유저에게 직접 입력을 받고 싶다면. 순서 중요 X.
String sayHello3(
    {required String name, required int age, required String country}) {
  return "Hello $name, you are $age, and you come from $country";
}

//parameter를 optional positional로 설정하고 싶다면. 순서 중요. 근데 자주 사용 안 함.
String sayHello4(String name, int age, [String? country = "wakanda"]) {
  return "Hello $name, you are $age, and you come from $country";
}

//left ?? right => left가 null이면 right 반환 아니면 left 반환
String capitalizeName2(String? name) => name?.toUpperCase() ?? 'ANON';

void main() {
  //좋은 방법은 아님. 직관적이지 않다
  print(sayHello1("yoon", 10, "Kor"));
  //대신 이렇게 순서는 상관 없음
  print(sayHello2(age: 10, country: "Kor"));
  print(sayHello3(age: 10, country: "Kor", name: "yoon"));
  //optinal positional 순서 중요.
  print(sayHello4("yoon", 12));

  print(capitalizeName2('yoon'));
  print(capitalizeName2(null));

  //name ??= 'yoon' => name이 null이면 'yoon'을 넣어라
  String? name;
  name ??= 'yoon';
  print(name);
}

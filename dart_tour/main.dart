void main() {
  //관습적으로 함수나 메소드 내부에 지역 변수를 선언할 때는 var 사용
  var name1 = "yoon1";
  //class에서 변수나 property를 선언할 때는 타입을 지정함
  String name2 = "yoon2";
  //이 두 방법 모두 변수 업데이트 가능(데이터 타입 유지 필)
  name1 = "윤1";
  name2 = "윤2";

  //dynamic은 여러가지 타입을 가질 수 있는 변수에 쓰는 키워드. 권장하진 않으나 필요 시 사용
  //이렇게 값을 넣지 않고 변수 선언 시 타입은 dynamic. 이때 아무 타입으로나 업데이트 가능
  var name3;
  //명시적으로도 가능
  dynamic name4;

  //null safety
  //기본적으로 dart의 변수는 null 불가. 이렇게 키워드 뒤에 ?를 붙이면 null도 가능
  String? name5 = "yoon";
  name5 = null;
  //String 관련 메소드를 그냥 사용할 수 없음. 체크 후 사용
  if (name5 != null) {
    name5.isNotEmpty;
  }
  //혹은 이렇게
  name5?.isNotEmpty;

  //한 번 정의된 변수를 업데이트할 수 없게 만들려면 final 사용. JS나 TS의 const
  final name6 = "yoon";

  //late는 초기 데이터 없이 변수를 선언할 수 있게 해줌. final이나 var 앞에 사용 가능.
  //초기화하지 않으면 사용 불가
  //추후 class를 학습 시 사용
  late final String name7;

  //dart의 const는 JS 혹은 TS의 const와 다름
  //dart에서는 compile-time constant를 만들어 줌
  //이렇게 하면 final과 같이 업데이트 불가. 하지만 const는 compile-time에 알고 있는 값이어야 함.
  //예를 들어 API 키를 const로 선언하면 절대 바뀌지 않고 컴파일 될 때 그 값을 알고 있을 것임.
  //즉 앱스토어에 앱을 올리기 전부터 알고 있는 값. 사용자 요청 값ㄴㄴ 이때는 final 혹은 var 사용
  const name8 = "yoon";

  //num은 정수도 소수도 된다
  num x = 12;
  x = 1.1;

  //Lists
  var numbers = [
    1,
    2,
    3,
    4,
  ]; // === List<int> numbers = [1, 2, 3, 4,];

  //giveMeFive가 true이면 numbers1에 5가 포함됨
  var giveMeFive = true;
  var numbers1 = [
    1,
    2,
    3,
    4,
    if (giveMeFive) 5,
  ];


  //String Interpolation
  var name9 = "yoon";
  var age = 10;
  var greeting = "Hello everyone, my name is $name9 and I'm ${age + 2}";
  var greeting1 = 'Hello everyone, my name is $name9 and I\'m ${age + 2}';
}

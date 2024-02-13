class Player {
  //final 사용 시 변경 불가
  final String name;
  int xp;

  //constructor method의 이름은 class의 이름과 같아야 함. arguments 위치 중요, 위에 타입을 정했기 때문에 따로 지정 필요 없음
  Player(this.name, this.xp);

  //class method 내에서 this는 사용하지 않는 것이 권고됨
  void sayHello() {
    print("Hi my name is $name and my xp is $xp");
  }
}

/* 위 constructor가 축약형
class Player {
  //late 사용 시 나중에 값을 받는다는 것을 의미
  late final String name;
  late int xp;

  Player(String name, int xp) {
    this.name = name;
    this.xp = xp
  };
}
*/

void main() {
  var player = Player("yoon", 1500);
  player.sayHello();
}

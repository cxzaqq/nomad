class Player {
  //final 사용 시 변경 불가
  final String name;
  int xp, age;
  String team;

  //constructor method의 이름은 class의 이름과 같아야 함. arguments 위치 중요, 위에 타입을 정했기 때문에 따로 지정 필요 없음
  //Player(this.name, this.xp, this.team, this.age);

  //named constructor로 변경
  Player(
      {required this.name,
      required this.xp,
      required this.team,
      required this.age});

  //class method 내에서 this는 사용하지 않는 것이 권고됨
  void sayHello() {
    print("Hi my name is $name and my xp is $xp");
  }

  //name, age만 parameters로 받고 나머지는 기본값으로 초기화하는 방법
  //named constructor
  Player.createBluePlyaer({
    required String name,
    required int age,
  })  : this.age = age,
        this.name = name,
        this.team = 'blue',
        this.xp = 0;
  //positional constructor. 이 경우 parameters는 무조건 required임
  Player.createRedPlayer(String name, int age)
      : this.age = age,
        this.name = name,
        this.team = 'red',
        this.xp = 0;
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
  //positional
  //var player = Player("yoon", 1500, 'red', 12);
  //named
  var player = Player(
    name: "yoon",
    xp: 1500,
    age: 12,
    team: "blue",
  );
  player.sayHello();

  var bluePlayer = Player.createBluePlyaer(name: 'blue', age: 12);
  var redPlayer = Player.createRedPlayer('red', 12);
}

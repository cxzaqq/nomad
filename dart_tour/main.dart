class Human {
  final String name;
  Human({required this.name});
  void sayHello() {
    print("hi my name is $name");
  }
}

enum Team { blue, red }

class Player extends Human {
  final Team team;
  //super라는 키워드로 부모 클래스와 상호작용 가능
  Player({
    required this.team,
    required String name,
  }) : super(name: name);

  @override
  void sayHello() {
    super.sayHello();
    print('and I play for ${team}');
  }
}

void main() {}

//Mixin은 생성자가 없는 클래스. 클래스에 프로퍼티들을 추가할 때 등 사용
mixin class Strong {
  final double strLevel = 1500.99;
}

mixin class QuickRunner {
  void runQuick() {
    print("ruuuuun!");
  }
}

enum Team { blue, red }

class Player with Strong, QuickRunner {
  final Team team;

  Player({
    required this.team,
  });
}

class Horse with Strong, QuickRunner {}

class kid with QuickRunner {}

void main() {
  var player = Player(
    team: Team.red,
  );
  player.runQuick();
}

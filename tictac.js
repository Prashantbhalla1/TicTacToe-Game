let st = false;
let chance = 0;
let b = ["", "", "", "", "", "", "", "", ""];
$("button").click(function () {
  if (!st) {
    start();
  }
});
$(document).keypress(function () {
  if (!st) {
    start();
  }
});
function start() {
  let au = new Audio("sounds/red.mp3");
  au.play();
  for (let i = 1; i <= 9; i++) {
    $("#i" + i).text("");
    $("#i" + i).removeClass("right");
  }
  $("h1").text("Turn - X");

  st = true;
  mne();
}

function mne() {
  chance++;
  if (chance > 9) {
    gameover();
  }

  for (let i = 1; i <= 9; i++) {
    b[i - 1] = $("#i" + i).text();
  }

  if (b[0] != "" && b[0] == b[1] && b[2] == b[1]) {
    chan(1, 2, 3);
  }

  if (b[3] != "" && b[4] == b[3] && b[5] == b[3]) {
    chan(4, 5, 6);
  }
  if (b[6] != "" && b[7] == b[6] && b[8] == b[6]) {
    chan(7, 8, 9);
  }
  if (b[0] != "" && b[3] == b[0] && b[6] == b[3]) {
    chan(1, 4, 7);
  }
  if (b[1] != "" && b[4] == b[1] && b[7] == b[1]) {
    chan(2, 5, 8);
  }
  if (b[2] != "" && b[5] == b[2] && b[8] == b[2]) {
    chan(3, 6, 9);
  }

  if (b[0] != "" && b[4] == b[0] && b[8] == b[0]) {
    chan(1, 5, 9);
  }

  if (b[2] != "" && b[4] == b[2] && b[6] == b[2]) {
    chan(3, 5, 7);
  }
}
$(".box").click(function () {
  $("h1").addClass("big");
  if (st == true) {
    let x_o = $(this).text();
    if (chance % 2 == 1) {
      $("h1").text("Turn - O ");

      if (x_o == "X" || x_o == "O") {
        chance--;
        $("h1").text("Turn - X ");
      } else {
        au = new Audio("sounds/green.mp3");
        au.play();
        $(this).text("X");
      }
      mne();
    } else {
      $("h1").text("Turn - X ");

      if (x_o == "X" || x_o == "O") {
        chance--;
        $("h1").text("Turn - O ");
      } else {
        au = new Audio("sounds/green.mp3");
        au.play();
        $(this).text("O");
      }
      mne();
    }
  }
});
function chan(p, q, r) {
  st = false;
  chance = 0;
  au = new Audio("sounds/crash.mp3");
  au.play();  au.play();  au.play();  au.play();
  $("#i" + p).addClass("right");
  $("#i" + q).addClass("right");
  $("#i" + r).addClass("right");
  let get = $("#i" + r).html();
  $("h1").text(get + " WINS");
  startagain();
  setTimeout(() => {
    if (st == false) $("h1").text("Press Any key to Restart The Game");
  }, 8000);
}
function startagain() {
  st = false;
  chance = 0;
}
function gameover() {
  au = new Audio("sounds/wrong.mp3");
  $("body").addClass("gameover");
  setTimeout(() => {
    $("body").removeClass("gameover");
  }, 200);
  au.play();
  $("h1").text("GAME-OVER");
  startagain();
   setTimeout(() => {
    if (st == false) {
      $("h1").removeClass("big");
      $("h1").text("Press Any key to Restart The Game");}
  }, 8000);
}

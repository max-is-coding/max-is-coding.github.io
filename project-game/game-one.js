const startBtn = document.getElementById("start-button")
const title = document.getElementById("game-title")
const titleRoom = document.getElementById("title-room")
const barfGif = document.getElementById("barf-gif")
const gameScreen = document.getElementById("game-area")
const mrBarf = document.getElementById("barf")
let barfImg = document.createElement("img")
barfImg.src = "./game-images/creature-2.png"
barfImg.id = "jumpBarf"

let keys = {
    right: false,
    left: false,
    up: false
}

let player = {
    x: 100,
    y: 100,
    width: 72,
    height: 72
}

startBtn.addEventListener("click", startGame)

// start button!
    // remove start button, title, and little Barf gif
    // making starting area appear
    // move Barf into position

function startGame() {
    $("#start-button").fadeOut();
    $("#game-title").fadeOut("slow");
    barfGif.src = "./game-images/creature-2.png"
    titleBarfFalls()
    console.log("game started")
}

function barfAppears () {
    barf.append(barfImg)
    $("#barf").delay(90).show( function(){
        $("#jumpBarf").attr("src", "./game-images/creature-1.png")
        setTimeout(barfRunAni, 700)
    })
}

function barfRunAni() {
    $("#jumpBarf").attr("src", "./game-images/creature-run.gif")
    $("#barf").animate({
        left: 1500
    }, 3000, 'swing')
    setTimeout(byeTitle, 1500)
}

function byeTitle() {
    $("#barf").fadeOut("3000")
    $("#title-room").fadeOut("3000")
}

function titleBarfFalls () {
    $("#barf-gif").animate({
        top: 700
    }, 500, 'swing', function (){
        barfGif.style.right = "527px"
        barfGif.style.top = "-500px"
        $("#title-room").fadeIn("3000")
        $("#barf-gif").animate({
            top: 427
        }, 700, 'swing', function(){
            $("#barf-gif").hide()
            barfAppears()
        })
    })
}

document.addEventListener(`keydown`, function(e) {
    switch (e.key) {

      case  `KeyW`:
        keys.up = true;
        break;
      case  `KeyD`:
        keys.right = true;
        break;
      case  `KeyA`:
        keys.left = true;
        break; 
    }
})

document.addEventListener("keyup", function(e){
    switch (e.key) {

        case  `KeyW`:
          keys.up = false;
          break;
        case  `KeyD`:
          keys.right = false;
          break;
        case  `KeyA`:
          keys.left = false;
          break; 
    }
})

function input() {
    if(keys.right) {
        player.x += 3
    } else if (keys.left) {
        player.x -= 3
    } else if (keys.up) {
        player.y -= 3
    }
}
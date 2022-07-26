const startBtn = document.getElementById("start-button")
const title = document.getElementById("game-title")
const titleRoom = document.getElementById("title-room")
const barfGif = document.getElementById("barf-gif")
const gameScreen = document.getElementsByClassName("game-area")[0]
const mrBarf = document.getElementById("barf")
let barfImg = document.createElement("img")
barfImg.src = "./game-images/creature-2.png"
barfImg.id = "jumpBarf"

let bgImg = document.createElement("img")
bgImg.src = "./game-images/total-bg.png"
bgImg.id = "background"

let runWav = new Audio('./sounds/running.wav')
let landWav = new Audio('./sounds/landing.wav')

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
}



function barfAppears () {
    barf.append(barfImg)
    setTimeout(landSound, 50)
    $("#barf").delay(90).show( function(){
        $("#jumpBarf").attr("src", "./game-images/creature-1.png")
        setTimeout(barfRunAni, 700)
    })
}

function barfRunAni() {
    $("#jumpBarf").attr("src", "./game-images/creature-run.gif")
    $("#barf").animate({
        left: 900
    }, 1500, 'swing')
    setTimeout(runSound, 50)
    setTimeout(byeTitle, 1500)
    setTimeout(newGame, 2000)
}

function byeTitle() {
    $("#title-room").fadeOut("5000", function(){
        runWav.pause()
        runWav.currentTime = 0
    })
}

function newGame() {
    mrBarf.style.left = "-50px"
    mrBarf.style.bottom = "100px"
    $("#barf").animate({
        left: "100px"
    }, 200, 'linear')
    gameScreen.append(bgImg)
    bgImg.appendChild(bgImg);
}

function landSound() {
    landWav.currentTime = 0
    landWav.play()
}

function runSound() {
    runWav.currentTime = 0
    runWav.play()
    runWav.loop=true
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

document.addEventListener("keydown", function(e) {
    switch (e.key) {

      case  "KeyW":
        keys.up = true;
        break;
    }
})

document.addEventListener("keyup", function(e){
    switch (e.key) {

        case  `KeyW`:
          keys.up = false;
          break;
    }
})
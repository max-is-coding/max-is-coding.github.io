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

let baddie = document.createElement("img")
baddie.classList.add("enemy")
let airBaddie = document.createElement("img")
airBaddie.classList.add("airEnemy")


let runWav = new Audio('./sounds/running.wav')
let landWav = new Audio('./sounds/landing.wav')

let topSlot = "200px"
let btmSlot = "100px"
let rightSlot = "-100px"

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
    checkCollision()
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

    generateBaddies()
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
    barfJump()
})

// document.addEventListener("keyup", function(e){
//     barfFall()
// })


function barfJump() {
    $("#barf").animate({
        bottom: 200
    }, 200, 'swing', function(){
        setTimeout(barfFall, 150)
    })
}

function barfFall() {
    $("#barf").animate({
        bottom: 100
    }, 250, 'swing')
}

// make baddies appear!
    // run the function to randomise the baddy
    // if it's a floor baddy, make it appear on the floor
    // if it's an air baddy, put it in the air
    // repeat!

let airSp = {
    visual: "enemy0.png",
    speeds: 3000,
    type: "airE"
}

let grSp = {
    visual: "enemy3.gif",
    speeds: 3000,
    type: "grndE"
}

let wlkSp = {
    visual: "enemy2.gif",
    speeds: 2500,
    type: "grndE"
}

let pnkSqu = {
    visual: "enemy5.gif",
    speeds: 2000,
    type: "grndE"
}

let grnSqu = {
    visual: "enemy4.gif",
    speeds: 2500,
    type: "grndE"
}

let bat = {
    visual: "enemy1.gif",
    speeds: 2500,
    type: "airE"
}

let baddiesList = [airSp, grSp, wlkSp, pnkSqu, grnSqu, bat]

let i = 0
let x = 0
let baddiesCount = []

function generateBaddies() {
    setTimeout(function() {
       // badApp()
        //console.log(baddyCount)

        // loop it so baddies keep coming
            // randomise the baddy
            //

            baddiesCount[i] = document.createElement("img")
            baddyType = baddiesList[Math.floor(Math.random() * 6)]
            baddiesCount[i].src = "./game-images/" + baddyType.visual
            baddiesCount[i].classList.add(baddyType.type + "nemy")
            baddiesCount[i].classList.add("bad")
            gameScreen.append(baddiesCount[i])

            if (i < 15) {
                spd = 1
            } else if (i >= 15 && i < 40) {
                spd = 0.7
            } else if (i >= 50 && i < 75) {
                spd = 0.5
            } else {
                spd = 0.3
            }            

            
            $("." + baddyType.type + "nemy").animate({
                right: 800
            }, (baddyType.speeds * spd), 'linear', function(){
                //baddiesCount[i].remove()
            })
            i++
            if (i < 150){
                generateBaddies()
            }





        // if (baddyType >= 2 ){
        //     baddie.src = "./game-images/enemy" + baddyType + apnd
        //     gameScreen.append(baddie)
        //     $(".enemy").animate({
        //         right: 800
        //     }, baddySpeed, 'linear', function(){
        //         baddie.remove()
        //         baddyCount++
        //         baddie.style.right = "-50px"
        //     })
        // } else {
        //     airBaddie.src = "./game-images/enemy" + baddyType + apnd
        //     airBaddie.style.right = "-50px"
        //     gameScreen.append(airBaddie)
        //     $(".airEnemy").animate({
        //         right: 800
        //     }, baddySpeed, 'linear', function(){
        //         airBaddie.remove()
        //         baddyCount++
        //         airBaddie.style.right = "-50px"
        //     })
        // }
        // if (baddyCount < 100) {
        //     generateBaddies()
        // }
    }, (Math.floor(Math.random() * 500 + 1000)))
}

let enemies = document.querySelectorAll(".bad");

// check for collisions... too much maths


// function badApp() {

//     if (baddyCount < 25) {
//         spd = 2
//     } else if (baddyCount >= 25 && baddyCount < 50) {
//         spd = 1.7
//     } else if (baddyCount >= 50 && baddyCount < 75) {
//         spd = 1.3
//     } else {
//         spd = 1
//     }

//     // set different baddy speeds
//     if (baddyType == 0 || baddyType == 3) {
//         baddySpeed = 3000
//     } else if (baddyType > 4) {
//         baddySpeed = 750 * spd
//     } else {
//         baddySpeed = 1000 * spd
//     }

// }

function barfDeath() {

}
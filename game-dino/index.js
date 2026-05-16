score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("key code is " + e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 70 + "px";
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 70 + "px";
    }
};


       

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.game-over');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    //  console.log(dx);
    // console.log(dx + " & " + ox)
    // console.log(offsetX + " and " + offsetY)

    if (offsetX < 79 && offsetY < 60) {
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("obstaclesAni");
        updateScore(score);
        const btn = document.querySelector(".after-game");
        btn.style.visibility = "visible";
        btn.addEventListener("click", () => {
            location.reload();
        });
    }
    else if (offsetX < 56 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
    }


}, 100);

function updateScore(score) {
    let scoreCount = document.querySelector(".scoreCount");
    let afterGame = document.querySelector(".after_over")

    if (score < 10) {
        scoreCount.innerHTML = "Your Score: 0" + score;
        afterGame.innerHTML = "Your Score: 0" + score;
    }
    else if (score >= 10) {
        scoreCount.innerHTML = "Your Score: " + score;
        afterGame.innerHTML = "Your Score: 0" + score;
    }
}
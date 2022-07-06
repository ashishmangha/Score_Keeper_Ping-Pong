const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    diplay: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    diplay: document.querySelector('#p2display')
}


const reset = document.querySelector('#reset');
const winingscore = document.querySelector('#playto');
let winscore = 3;
let isgameover = false;

function updetScores(player, opponent) {
    if (!isgameover) {
        player.score += 1;
        player.diplay.textContent = player.score;
        if (player.score === winscore) {
            isgameover = true;
            opponent.diplay.classList.add('has-text-danger');
            player.diplay.classList.add('has-text-success');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}



p1.button.addEventListener('click', function () {
    updetScores(p1, p2);

});
p2.button.addEventListener('click', function () {
    updetScores(p2, p1);

});

reset.addEventListener('click', resetprocess);

winingscore.addEventListener('change', function () {
    winscore = parseInt(this.value);
    resetprocess();
});

function resetprocess() {
    for (const p of [p1, p2]) {
        p.score = 0;
        p.diplay.textContent = p.score;
        isgameover = false;
        p.diplay.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.diplay.textContent = p1score;
    // p2.diplay.textContent = p2score;
    // isgameover = false;
    // p1.diplay.classList.remove('has-text-success', 'has-text-danger');
    // p2.diplay.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
}
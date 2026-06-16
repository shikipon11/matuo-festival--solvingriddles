const correctPassword = "matsuo69"; // ←ここを謎解きの答えに変更

function checkPassword() {

    const input = document.getElementById("password").value;
    const message = document.getElementById("message");
    const button = document.getElementById("actionButton");

    if(input === correctPassword){

        message.style.color = "#4ade80";
        message.innerHTML = "ロック解除成功";

        button.textContent = "次に進む";
        button.onclick = goNext;

    } else {
        message.style.color = "#f87171";
        message.innerHTML = "パスワードが違います";
    }
}

function goNext(){
    window.location.href = "https://sites.google.com/view/matsuofes69/%E3%83%9B%E3%83%BC%E3%83%A0?authuser=2";
}

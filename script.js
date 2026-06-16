const correctPassword = "matsuo69";

function checkPassword() {

    const input = document.getElementById("password").value;
    const message = document.getElementById("message");
    const button = document.getElementById("actionButton");

    if(input === correctPassword){

        message.style.color = "#4ade80";
        message.innerHTML = "アクセス認証中...";

        setTimeout(() => {

            message.innerHTML = "ロック解除成功";

            // ボタンの文字を変更
            button.textContent = "次に進む";

            // ボタンを押したときの処理を変更
            button.onclick = goNext;

        }, 3000);

    } else {

        message.style.color = "#f87171";
        message.innerHTML = "パスワードが違います";

        setTimeout(() => {
            message.innerHTML = "";
            document.getElementById("password").value = "";
        }, 3000);
    }
}

function goNext(){
    window.location.href = "https://sites.google.com/view/matsuofes69/%E3%83%9B%E3%83%BC%E3%83%A0?authuser=2";
}

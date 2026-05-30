const correctPassword = "ABCDEFGH"; // ←ここを謎解きの答えに変更

function checkPassword() {

    const input =
        document.getElementById("password").value;

    const message =
        document.getElementById("message");

    if(input === correctPassword){

        message.style.color = "#4ade80";
        message.innerHTML =
        "アクセス認証中...";

        setTimeout(() => {
            message.innerHTML =
            "ロック解除成功";
        },1000);

        setTimeout(() => {
            window.location.href = "home.html";
        },2500);

    }else{

        message.style.color = "#f87171";
        message.innerHTML =
        "パスワードが違います";

    }
}

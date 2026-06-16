const correctPassword = "matsuo69"; // ←ここを謎解きの答えに変更

function checkPassword() {

    const input =
        document.getElementById("password").value;

    const message =
        document.getElementById("message");
if(input === correctPassword){

    message.style.color = "#4ade80";
    message.innerHTML = "アクセス認証中...";

    setTimeout(() => {

        message.innerHTML = "ロック解除成功";

        // ロック解除ボタンを非表示
        document.querySelector("button[onclick='checkPassword()']")
            .style.display = "none";

        // 次へ進むボタンを表示
        document.getElementById("nextButton")
            .style.display = "block";

    },1000);
}
else{

        message.style.color = "#f87171";
        message.innerHTML = "パスワードが違います";

        setTimeout(() => {

        // メッセージを消す
            message.innerHTML = "";

        // 入力欄を空にする
            document.getElementById("password").value = "";

        }, 1000); // 2秒後

    }    
}
function goNext(){
    window.location.href = "https://sites.google.com/view/matsuofes69/%E3%83%9B%E3%83%BC%E3%83%A0?authuser=2";
}

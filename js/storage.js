// ファイルをセーブする.

function fileSave() {
    localStorage.setItem("data", main.innerHTML);
}

//　ファイルをロードする.

function fileLoad() {
    const data = localStorage.getItem("data");
    if (data) {
        main.innerHTML = data;
    }
}
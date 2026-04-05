//　圧縮関数.

async function compress(file) {
  const compressedFile = await imageCompression(file, {
    // configに入れる
    maxSizeMB: 0.2,
    maxWidthOrHeight: 800,
  });

  const reader = new FileReader();
  reader.onload = (e) => insertImage(e.target.result, file.name);
  reader.readAsDataURL(compressedFile);
}
// ファイル選択後、画像をbase64で挿入する
document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  compress(file);
  e.target.value = ""; // 同じファイルを再度選択できるようにする
});

// 画像をbase64で挿入
function insertImage(dataBase64, fileName) {
  const imageForHtml = `<img src="${dataBase64}" alt="${fileName}" class="inserted-image">`;
  main.insertAdjacentHTML("beforeend", imageForHtml);
  main.insertAdjacentHTML("beforeend", "<div><br></div>"); // 改行を追加
}

function insertImageFromFile() {
  document.getElementById("fileInput").click();
}

main.addEventListener("paste", function (e) {
  e.preventDefault();
  const text = (e.clipboardData || window.clipboardData).getData("text");
  handlePaste(text);
});

//　ファイル選択ダイアログを開く
function pasteImageFromFile() {
  document.getElementById("fileInput").click();
}

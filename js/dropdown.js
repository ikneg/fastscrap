

// ドロップダウンの表示切り替え
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dropdown = btn.nextElementSibling;

    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) d.classList.remove("show");
    });

    dropdown.classList.toggle("show");
    e.stopPropagation();
  });
});

// ドロップリストを消す処理。

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach((d) => {
    d.classList.remove("show");
  });
});

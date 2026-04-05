// youtubeのプレビュー要素を挿入する。

function pasteYoutube(text) {
  const videoId = getYouTubeId(text);
  if (!videoId) return;

  const html = `
        <iframe class="youtube-preview" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;

  main.insertAdjacentHTML("beforeend", html);
  main.insertAdjacentHTML("beforeend", "<div><br></div>"); // 改行を追加
}

// youtubeプレビューを削除する.

function handleDeleteYoutube(videoId) {
  if (!confirm("Delete this YouTube preview?")) return;
  const el = document.getElementById(`youtube-${videoId}`);
  if (el) el.remove();
} // クリップボードからYouTube URLを貼り付ける
function handlePaste(text) {
  if (/youtube\.com|youtu\.be/.test(text)) {
    pasteYoutube(text);
  }
}

//　YouTubeのURLから動画IDを抽出
function getYouTubeId(url) {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }

    return u.searchParams.get("v");
  } catch {
    console.log("");
    return null;
  }
}

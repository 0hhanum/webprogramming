const button = document.getElementById("boardWrite");
const form = document.getElementById("writeForm");

// 글 작성시 localStorage 에 저장 후 이전 페이지로 redirect

button.onclick = () => {
  const title = form.writeTitle.value;
  const article = form.writeTextArea.value;
  localStorage.setItem(title, article);
  history.back();
};

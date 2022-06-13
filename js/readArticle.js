const query = window.location.search;
// 쿼리스트링 가져오기
const urlParams = new URLSearchParams(query);
// urlParams 객체 생성

const isKeyExist = urlParams.has("key");
// key 에 해당하는 쿼리가 있는지 판별

if (isKeyExist) {
  const contents = localStorage.getItem(urlParams.get("key"));
  const article = document.getElementById("article");
  const title = document.getElementById("articleTitle");
  article.innerHTML = contents;
  title.innerHTML = urlParams.get("key");
  // 쿼리가 있다면 localStorage 에서 가져와 제목과 본문을 삽입
}

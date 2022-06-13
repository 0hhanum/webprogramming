const keywords = ["length", "clear", "getItem", "key", "removeItem", "setItem"];
// localStorage 객체 메서드 리스트
const ul = document.getElementById("lists");
if (localStorage.length) {
  for (const key in localStorage) {
    if (!keywords.includes(key)) {
      const li = document.getElementsByTagName("li").item(1).cloneNode(true);
      // list 객체 하나 복사
      // 인자로 true 를 주어 하위 요소까지 복사
      const length = document.getElementsByTagName("li").length;
      // 현재 글 개수

      let number = li
        .getElementsByClassName("content-num")[0]
        .getElementsByTagName("span")[0];
      let title = li
        .getElementsByClassName("content-title")[0]
        .getElementsByTagName("span")[0];
      let counter = li
        .getElementsByClassName("counter")[0]
        .getElementsByTagName("span")[0];
      let anchor = li.getElementsByTagName("a")[0];
      number.innerHTML = length;
      title.innerHTML = key;
      counter.innerHTML = 0;
      // localStorage 에서 가져온 글 정보를 복사한 노드에 삽입
      anchor.href = `article.html?key=${key}`;
      // 템플릿 리터럴을 사용하여 쿼리에 키를 전달

      ul.appendChild(li);
      // 리스트에 삽입
    }
  }
}

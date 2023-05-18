import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.className = "add-list";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;
  //console.log(p);

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(要素)を未完了リストから削除
    deleteFromIncomleteList(completeButton.closest(".add-list"));

    //完了リストに追加する要素
    const addTarget = completeButton.closest(".add-list");
    console.log(addTarget);
    console.log(addTarget.firstElementChild);
    const text = addTarget.firstElementChild.innerText;

    //const text = addTarget.children[1].innerText;
    console.log(text);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(要素)を未完了リストから削除
    deleteFromIncomleteList(deleteButton.closest(".add-list"));
  });

  //divタグの子要素に各要素を追加
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //console.log(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncomleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

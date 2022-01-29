const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.";

    $searchInput.className = "SearchInput";
    $searchInput.autofocus = true;
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", e => {
      $searchInput.value = '';
    })

    console.log("SearchInput created.", this);
  }
  render() {}
}

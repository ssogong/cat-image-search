class Loading {
  $loadingDiv = null;
  imgPath = 'src/assets/loading.svg';
  isLoading = false;
  constructor({ $target }) {
    const $loadingDiv = document.createElement("div");
    this.$loadingDiv = $loadingDiv;
    this.$loadingDiv.id = "Loading";
    this.$loadingDiv.innerHTML = `
      <img src=${this.imgPath} alt="loading...">
    `
    this.setState(this.isLoading);
    $target.appendChild(this.$loadingDiv);
  }

  setState(isLoading) {
    this.isLoading = isLoading;
    this.$loadingDiv.style.display = isLoading ? "flex" : "none";
  }
}
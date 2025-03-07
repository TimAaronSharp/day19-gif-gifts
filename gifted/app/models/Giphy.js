

export class Giphy {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.images.original.url
    this.rating = data.rating
  }

  get HTMLTemplate() {
    return `
<div class="col-md-4">
  <div class="mb-3 card" style="width: 18rem;">
    <img src="${this.imgUrl}" class="card-img-top img-fluid" alt="${this.title}">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <button id="toggle-button" onclick="app.giphyController.toggleTagInput('${this.id}')" class="btn btn-success">Save</button>
      <label for="${this.id}"></label>
      <input class="form-control mb-2 toggle-none" id="${this.id}" name="tag" type="text" placeholder="Enter a tag for the gif">
   </div>
  </div> 
</div>
    `
  }
}




{/* <div class="col-3">
  <p>${this.title}</p>
  <img src="${this.url}" alt="">
</div> */}


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
      <form id="${this.id}" class="toggle-none" onsubmit="app.giftsController.createGift()">
      <label for="${this.title}"></label>
      <input class="form-control mb-2" id="${this.title}" name="tag" type="text" placeholder="Enter a tag for the gif">
      <label for="${this.id}-url">Don't change URL!</label>
      <input class="form-control mb-2" id="${this.id}-url" name="url" type="text" value="${this.imgUrl}">
      <button type="submit" class="btn btn-primary">Upload</button>
      </form>
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
export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
    this.creatorId = data.creatorId
    this.profileIdsOpened = data.profileIdsOpened
    this.creator = data.creator
    this.profilesOpened = data.profilesOpened
    this.id = data.id
    this.timestamp = data.timestamp || true
  }



  get HTMLCard() {
    return `
       <div class="col-md-4">
         <div class="mb-3 card" style="width: 18rem;">
          <img src="${this.url}" class="card-img-top img-fluid" alt="${this.tag}">
          <div class="card-body">
            <h5 class="card-title">${this.tag}</h5>
            <p class="card-text">${this.profilesOpened}</p>
            <a href="#" onclick="app.giftsController.openGift('${this.id}')" class="btn btn-primary">Open gift</a>
          </div>
        </div> 

       </div>
    `
  }
}
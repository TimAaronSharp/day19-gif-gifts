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
    <div class="col-3">
          <div class="card">
            <div class="card-header" >
              <p>${this.tag}</p>
            </div>
            <div class="card-body">
            </div>
          </div>
        </div>
    
    `
  }
}
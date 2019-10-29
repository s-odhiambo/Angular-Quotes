export class Quotes {
  public showDescription: boolean;
  QuotesUpVoted: any;
  QuotesDownVoted: any;
  constructor(public id: number,public name: string,public description: string, public author:string,public upvotes:number,public downvotes:number, public completeDate: Date){
    this.showDescription=false;
  }
}
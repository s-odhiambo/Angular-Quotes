import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes: Quotes[] = [
    new Quotes(1, 'The world as we have created it is a process of our thinking.', 'It might not have been the first fantasy world.','Martin Luther', 0,0, new Date(2020, 3, 14)),
    new Quotes(2, 'Yesterday I was clever,so I wanted to change the world.', 'the most successful series in television history.','Brian Berry', 0,0, new Date(2019, 6, 9)),
    new Quotes(3, 'Nothing is so painful to the human mind as a great and sudden chnage.', 'Creating a memorable fictional world takes a lot of work in order to make it believable.','Holland Crocs', 0,0,new Date(2022, 1, 12)),
    new Quotes(4, 'To say goodbye is to die a little.', 'Another unique thing about Randland is the way the world’s history and mythology is constructed.','Halley Nicole',0,0, new Date(2019, 0, 18)),
    new Quotes(5, 'Life is a series of natural and spontaneous changes.', 'Life is Happiness.','Chegge', 0,0, new Date(2019, 2, 14)),
    new Quotes(6, 'The only way that we can live, is if we grow.', 'Life is beautiful one day.','Zainab Cutty',0,0,  new Date(2030, 3, 14)),
  ];


  deleteQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.Quotes[index].name}?`)

      if (toDelete) {
        this.Quotes.splice(index, 1)
      }
    }
  }

upVotesQuotes(Quotes){
  // if(upvotes){
  //   this.Quotes[index].QuotesUpVoted ++;
  // }
  Quotes.upvotes= Quotes.upvotes+1;
}

downVotes(Quotes){
  // if(downvotes){
  //   this.Quotes[index].QuotesDownVoted ++;
  // }
  Quotes.downvotes = Quotes.downvotes +1;
}

  addNewQuotes(Quotes) {
    let QuotesLength = this.Quotes.length;
    Quotes.id = QuotesLength + 1;
    Quotes.completeDate = new Date(Quotes.completeDate)
    this.Quotes.push(Quotes)
  }

  toggleDetails(index) {
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }

  completeQuotes(isComplete, index) {
    if (isComplete) {
      this.Quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}




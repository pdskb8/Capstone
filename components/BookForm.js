

export class ComicBook = {
    constructor(title, issue, variant, printing) {
      this.title = title,
      this.issue = issue,
      this.variant = variant,
      this.printing = printing
    }
  }




export const comicEntry = document.querySelector('#addComic form');

export comicEntry.addEventListener('submit', event => {
    const formData = event.target.elements;

    event.preventDefault();
    const book = new newComic;


        newComic.title = formData[0];
        newComic.issue =  parseInt(formData[1].substring(0,2));
        newComic.variant = parseInt(formData[1].substring(3,4));
        newComic.printing = parseInt(formData[1].substring(5));

    collection.push(book);
    return render(store)
});


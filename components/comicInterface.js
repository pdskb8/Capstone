
    // Add to Collection
export const comicEntry = document.querySelector('#addComic form');
export const comicEdit = document.querySelector();
export const comicDelete = document.querySelector();

export comicEntry.addEventListener('submit', (event) => {
    const formData = event.target.elements;

    event.preventDefault();
    const comicbook = new newComic(formData[0], formData[1].substring(0,2), formData[1].substring(3,4),formData[1].substring(4));

    collection.push(comicbook);
    render(store);

    return 1;
});


// Delete a Comic Book
export comicDelete.addEventListener('');

// Edit Comic Book Information
export comicEdit.addEventListener('');






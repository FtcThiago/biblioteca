const search = document.getElementById('search');
const list = document.querySelectorAll('#book-list li');

search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase();
    list.forEach(item => {
        const book = item.textContent.toLowerCase();
        if (book.includes(term)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

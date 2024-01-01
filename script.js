const tagsEl = document.getElementById('tags');
const textarea = document.querySelector('.textarea');

textarea.focus();
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    const tags = input
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim());

    tagsEl.innerHTML = '';
    tags.forEach((tag) => {
        const el = document.createElement('span');
        el.classList.add('tag');
        el.innerText = tag;
        tagsEl.appendChild(el);
    });
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlight(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const rand = pickRandomTag();
            highlightTag(rand);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlight(tag) {
    tag.classList.remove('highlight');
}

const button = document.getElementsByTagName('button')[0];
const image = document.getElementsByTagName('img')[0];
const url = 'https://dog.ceo/api/breeds/image/random';

async function fetchHandler() {
    /* Использовал синтаксический захар async/await вместо then. */
    try {
        const response = await fetch(url)
        const data = await response.json();
        image.src = data.message;
        /* Внизу расположены комментарии. Не гневайтесь на меня, это я подбирал решение */
        // console.log(data.message);
        // console.log(typeof data)

    } catch (error) {
        console.log(error)
    }

}

button.addEventListener('click', fetchHandler);


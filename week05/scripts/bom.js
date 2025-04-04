const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const createLi = document.createElement('li')
const createDeleteButton = document.createElement('button')

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

createLi.textContent = input.value;

createDeleteButton.textContent = '❌';

createLi.append(createDeleteButton);

list.append(createLi);

button.addEventListener('click', () => 
    {
        if(input.value != '')
        {
            displayList(input.value);
            chapterArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        } 
    });

function displayList(item)
{
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item
    
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => 
    {
        list.removeChild(li);
        deleteChapter(li.textContent);
        imput.focus();
    });

    console.log('I like to copy code instead of typing it out myself and trying to understand it.');    
}

function setChapterList()
{
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function getChapterList()
{
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter)
{
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chapterArray.filter(item => item != chapter);
    setChapterList();
}

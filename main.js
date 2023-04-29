const para = document.getElementById("para");
const writer = document.getElementById("writer");
const btn = document.getElementById("btn");
const quotes = {
    "It is never too late to be what you might have been.": "George Eliot",
    "The best way to find yourself is to lose yourself in the service of others.": "Mahatma Gandhi",
    "Life is like a camera. Focus on the good times, develop from the negatives, and if things don't work out, take another shot.": "reda_elklie",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.": "Nelson Mandela",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.": "Christian D. Larson",
    "The only limit to our realization of tomorrow will be our doubts of today.": "Franklin D. Roosevelt",
    "Don't let yesterday take up too much of today.": "Will Rogers",
    "We can't help everyone, but everyone can help someone.": "Ronald Reagan",
    "You can't build a reputation on what you are going to do.": "Henry Ford",
    "The only thing we have to fear is fear itself.": "Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams.": "Eleanor Roosevelt",
    "Life is either a daring adventure or nothing at all.": "Helen Keller",
    "Everything has beauty, but not everyone sees it.": "Confucius",
    "The most important thing in the world is family and love.": "John Wooden",
    "If you can't explain it simply, you don't understand it well enough.": "Albert Einstein",
    "The best time to plant a tree was 20 years ago. The second best time is now.": "Chinese Proverb",
    "Success is stumbling from failure to failure with no loss of enthusiasm.": "Winston Churchill",
    "The only thing necessary for the triumph of evil is for good men to do nothing.": "Edmund Burke",
    "You have power over your mind - not outside events. Realize this, and you will find strength.": "Marcus Aurelius",
    "Education is the most powerful weapon which you can use to change the world.": "Nelson Mandela",
    "Don't let what you cannot do interfere with what you can do.": "John Wooden",
    "A true hero isn't measured by the size of his strength, but by the strength of his heart.": "Hercules (Disney movie)"
}


btn.addEventListener("click", function() {
    const quotesArray = Object.entries(quotes);
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
    para.innerText = `" ${ randomQuote[0] } "`;
    writer.innerText = randomQuote[1];
});
const docTitle = document.title;

window.addEventListener("blur", function() {
    document.title = "Come Back :)";
})
window.addEventListener("focus", function() {
    document.title = docTitle;
})


para.addEventListener("click", function() {
    // Create a temporary input element
    const tempInput = document.createElement("input");

    // Set the value of the input element to the text inside the div
    tempInput.setAttribute("value", para.innerText);

    // Add the input element to the document
    document.body.appendChild(tempInput);

    // Select the text inside the input element
    tempInput.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Alert the user that the text has been copied
    alert("Text copied to clipboard!");
});
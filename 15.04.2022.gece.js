const quotes = [
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"~Nelson Mandela"
    },
    {
        quote:"You can discover more about a person in an hour of play than in a year of conversation.",
        author:"~Plato"
    },
    {
        quote:"Once you’ve accepted your flaws, no one can use them against you.",
        author:"~George R. R. Martin"
    },
    {
        quote:"When we strive to become better than we are, everything around us becomes better too.",
        author:"~Frank Zappa"
    },
    {
        quote:"It is our choices, that show what we truly are, far more than our abilities.",
        author:"~J.K. Rowling"
    },
    {
        quote:"A lion doesn’t concern himself with the opinions of the sheep.",
        author:"~Lionel Messi"
    },
    {
        quote:"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
        author:"~Marilyn Monroe"
    },
    {
        quote:"A mind is like a parachute. It doesn’t work if it isn’t open.",
        author:"~Paolo Coelho"
    },
    {
        quote:"That which does not kill us makes us stronger.",
        author:"~Friedrich Nietzsche"
    },
    {
        quote:"The journey of a thousand miles begins with one step.",
        author:"~Lao Tzu"
    },
    {
        quote:"Life is what happens when you’re busy making other plans.",
        author:"~John Lennon"
    },
    {
        quote:"When the going gets tough, the tough get going.",
        author:"~Joe Kennedy"
    },
    {
        quote:"You must be the change you wish to see in the world.",
        author:"~Mahatma Gandhi"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"~Mae West"
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        author:"~Walt Disney"
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author:"~Steve Jobs"
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        author:"~Eleanor Roosevelt"
    },
    {
        quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author:"~Benjamin Franklin"
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light.",
        author:"~Aristotle"
    },
    {
        quote:"Only a life lived for others is a life worthwhile.",
        author:"~Albert Einstein"
    },
    {
        quote:"If you’re going through hell, keep going.",
        author:"~Winston Churchill"
    },
    {
        quote:"Life is like a box of chocolates. You never know what you’re going to get.",
        author:"~Forrest Gump"
    },
    {
        quote:"he future belongs to those who prepare for it today.",
        author:"~Malcolm X"
    }
];
const btn = document.getElementById("generatequote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    let generate = quotes[random];
    quote.innerHTML = generate.quote;
    author.innerHTML = generate.author;
})
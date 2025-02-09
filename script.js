const messages = [
    "I have something very important to ask you...",
    "Please think about us...",
    "Are you sure? We're perfect together!",
    "Just say yes already! 😊",
    "I won't stop asking...",
    "You know you want to! 💍",
    "Pretty please? 🥺",
    "I'll keep asking forever!",
    "You're my everything! 💖",
    "Say yes and make me the happiest!",
];

let messageIndex = 0;
let yesButtonSize = 16; // Initial font size for the "Yes" button
let hamsterSound = new Audio("https://www.myinstants.com/media/sounds/sad-hamster.mp3");
let hamsterPlayed = false; // Track if the sound played

hamsterSound.volume = 0.5; // Set hamster sound to 50% volume

document.getElementById('proposeBtn').addEventListener('click', function() {
    document.getElementById('proposal').classList.remove('hidden');
    this.classList.add('hidden');

    // Update the proposal text
    document.querySelector("#proposal h2").textContent = "Will You Be My Girlfriend Forever?";
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('proposal').classList.add('hidden');
    document.getElementById('response').classList.remove('hidden');

    // Change the main message to "Happy Propose Day!"
    document.getElementById('message').textContent = "💍 Happy Propose Day! 🎉❤️";
    document.getElementById('message').style.fontSize = "22px";
    document.getElementById('message').style.color = "#2ecc71"; // Green color

    // Stop hamster sound
    hamsterSound.pause();
    hamsterSound.currentTime = 0;

    // Show anime couple GIF
    let gif = document.createElement('img');
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2R0MHVmaXB2bmV4cnBuaDJlbG1jdmkyNzNwaDUwd2R5N250eG5vNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bGm9FuBCGg4SY/giphy.gif";
    gif.style.width = "100%";
    gif.style.borderRadius = "10px";
    document.getElementById('response').appendChild(gif);

    // Add love message **AFTER CLICKING YES**
    let loveMessage = document.createElement("p");
    loveMessage.innerHTML = `Listen, I love you. It's that clear, that simple. And I know sometimes 
        I can be a disappointment, that I rarely know what I want or think before I act, but 
        you should know that in half a lifetime of spectacular messes, you are the very 
        first thing that's felt right.`;

    // Apply styling for readability
    loveMessage.style.fontSize = "16px";
    loveMessage.style.color = "#444"; // Darker gray for better readability
    loveMessage.style.fontFamily = "Georgia, serif"; // Elegant and easy-to-read font
    loveMessage.style.fontStyle = "italic";
    loveMessage.style.textAlign = "center";
    loveMessage.style.marginTop = "15px";
    loveMessage.style.lineHeight = "1.8"; // More spacing between lines
    loveMessage.style.background = "rgba(255, 182, 193, 0.2)"; // Soft pink background
    loveMessage.style.padding = "10px";
    loveMessage.style.borderRadius = "10px";

    document.getElementById('response').appendChild(loveMessage);
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Change the message
    messageIndex = (messageIndex + 1) % messages.length;
    document.getElementById('message').textContent = messages[messageIndex];

    // Increase the size of the "Yes" button
    yesButtonSize += 2;
    document.getElementById('yesBtn').style.fontSize = `${yesButtonSize}px`;

    // Move the "No" button randomly to make it harder to click
    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'relative';
    noBtn.style.left = `${Math.random() * 20 - 10}px`;
    noBtn.style.top = `${Math.random() * 20 - 10}px`;

    // Play hamster sound only on the first "No" click
    if (!hamsterPlayed) {
        hamsterSound.loop = true; // Keep playing until "Yes" is clicked
        hamsterSound.play();
        hamsterPlayed = true; // Prevent multiple triggers
    }
});

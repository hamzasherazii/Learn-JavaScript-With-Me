// Sample messages and users
const messages = [
    { user: 'Hamza', text: 'Hello, everyone!' },
    { user: 'Ismaeel', text: 'How is everyone doing?' },
    { user: 'Zaid', text: 'I have a question. elajeae haehawe waewaheahekjwekjwhkejawhekjah kehawke hwaehe kaw hekawhekwehkawe' },
    { user: 'Adullah', text: 'Sure, go ahead.' },
    { user: 'Saad', text: 'Im here too. enaen jawe ewehwak awhraakdahdae ealejlawehiwakwarji rjwarjwariwrwiriwariwr iwriarwiorowirwirowiaroaiwrwarowrowraoirawrrwrwiorioawurawrrwar' },
    { user: 'Bhatti', text: 'Whats the topic?' },
    { user: 'Usman', text: 'Lets talk about programming.' },
    { user: 'Usman', text: 'Lets talk about programming baeae jaeja leaejawej akewjlakwje laej lkawejlwak jekawjeajwel leakjelwjewka jelkawjewkalekaweawel.' },
    { user: 'Hamza', text: 'Hello, everyone!' },
    { user: 'Ismaeel', text: 'How is everyone doing?' },
    { user: 'Zaid', text: 'I have a question. elajeae haehawe waewaheahekjwekjwhkejawhekjah kehawke hwaehe kaw hekawhekwehkawe' },
    { user: 'Adullah', text: 'Sure, go ahead.' },
    { user: 'Saad', text: 'Im here too. enaen jawe ewehwak awhraakdahdae ealejlawehiwakwarji rjwarjwariwrwiriwariwr iwriarwiorowirwirowiaroaiwrwarowrowraoirawrrwrwiorioawurawrrwar' },
    { user: 'Bhatti', text: 'Whats the topic?' },
    { user: 'Usman', text: 'Lets talk about programming.' },
    { user: 'Usman', text: 'Lets talk about programming baeae jaeja leaejawej akewjlakwje laej lkawejlwak jekawjeajwel leakjelwjewka jelkawjewkalekaweawel.' },
    { user: 'Hamza', text: 'Hello, everyone!' },
    { user: 'Ismaeel', text: 'How is everyone doing?' },
    { user: 'Zaid', text: 'I have a question. elajeae haehawe waewaheahekjwekjwhkejawhekjah kehawke hwaehe kaw hekawhekwehkawe' },
    { user: 'Adullah', text: 'Sure, go ahead.' },
    { user: 'Saad', text: 'Im here too. enaen jawe ewehwak awhraakdahdae ealejlawehiwakwarji rjwarjwariwrwiriwariwr iwriarwiorowirwirowiaroaiwrwarowrowraoirawrrwrwiorioawurawrrwar' },
    { user: 'Bhatti', text: 'Whats the topic?' },
    { user: 'Usman', text: 'Lets talk about programming baeae jaeja leaejawej akewjlakwje laej lkawejlwak jekawjeajwel leakjelwjewka jelkawjewkalekaweawel.' },
    // Add more messages here
];

// Function to display messages in the chat-box
function displayMessages() {
    const chatBox = document.getElementById('messages');
    chatBox.innerHTML = '';

    messages.forEach((message) => {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${message.user}: ${message.text}`;
        chatBox.appendChild(messageElement);
    });
}

// Call the displayMessages function to populate the chat-box
displayMessages();

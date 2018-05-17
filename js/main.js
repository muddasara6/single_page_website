// Changes font from the dropdown
function changeFont(font) {
    // Changes the font of the title
    document.getElementById("title").style.fontFamily = font.value;
    // Changes the font of the note
    document.getElementById("notes").style.fontFamily = font.value;
}

// Changes font size from the dropdown
function changeSize(size){
    // Changes the font size of the note
    document.getElementById("notes").style.fontSize = size.value;
}

// Open chat with Jack Smith
function contactJack() {
    // Chat becomes visible
    document.getElementById("message_box").style.visibility = "visible";
    // Displays the contact name on the chat window
    document.getElementById("name_of_contact").innerHTML = "Contact name: Jack Smith";
}

function contactMichael() {
    document.getElementById("message_box").style.visibility = "visible";
    document.getElementById("name_of_contact").innerHTML = "Contact name: Michael Adam";
}

function contactJames() {
    document.getElementById("message_box").style.visibility = "visible";
    document.getElementById("name_of_contact").innerHTML = "Contact name: James Bay";
}

function contactSarah() {
    document.getElementById("message_box").style.visibility = "visible";
    document.getElementById("name_of_contact").innerHTML = "Contact name: Sarah Jones";
}

// Exit chat window
function exitBox() {
    // Makes chat window hidden
    document.getElementById("message_box").style.visibility = "hidden";
}

// Formatting the notes
$('#bold_text').click(function() {
    // Makes the font bold
    $('#notes').toggleClass('bold');
});

$('#italic_text').click(function() {
    // Changes the font to italic
    $('#notes').toggleClass('italic');
});

$('#underline_text').click(function() {
    // Underline the font
    $('#notes').toggleClass('underline');
});
const input = $json["message"]; // user input
let reply = "I'm not sure about that.";

if (input.toLowerCase().includes("your name")) {
    reply = "My name is ChatGPT.";
} else if (input.toLowerCase().includes("who made you")) {
    reply = "I was created by Krish Garg.";
} else {
    reply = "Let me think about that... ";
}

return [{ json: { reply } }];
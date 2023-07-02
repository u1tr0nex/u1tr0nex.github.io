const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Hello I'm Abhimanyu Rawat, a cyber security researcher with nearly 1 years of experience in the field. I graguated my Bachelor's degree in Electronics and Electronics Engineering. I am well-equipped to identify and analyze potential security threats, vulnerabilites. I am excited to continue leveraging my skills and experience to help organizations stay ahead of potential cyber threats and protect their valuable assets.    ",
  skills:
    "Ethical Hacking | Penetration Testing | Linux | Networking",
  education: [
    '• <span class="code"> Persuing</span> Master Diploma in Cyber Security - CRAW Security<br> • Bachelors of Electrical and Electronics Engineering with a CGPA 7.3'
  ],
  experience:
    '<span class="code">My experience: </span><br>• SAP Cybersecurity Engineering Internship<br>• JPMorgan Chase & Co. - Software Engineer Virtual Internship <br>• Muhurtaz - Wordpress Developer <br>• Swift Silor - Wordpress Developer <br> ',
  certifications: 
    '• Google Cybersecurity<br>• NASSCOM - Web Application Security <br>• Advanced Networking <br>• Python <br>• EC Council - Ethical Hacking Essentials <br>',
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/abhimanyu-rawat-3a4754161/' class='success link'>Linkedin</a>, <a href='mailto:mannurawat2010@gmail.com' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

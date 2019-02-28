let _socket;
const getSocket = () => {
  // memoizing here so we always get the same socket instance after the first call to getSocket()
  _socket = _socket || new WebSocket('ws://localhost:8080');
  return _socket;
};

const scrollToBottom = () => {
  const stdOut = document.getElementById('stdout');
  stdOut.scrollTop = stdOut.scrollHeight;
};

// add text to the "output" area
const output = (text) => {
  const stdOut = document.getElementById('stdout');
  const line = document.createElement('p');
  line.className = 'buffer-line';
  line.innerText = text;
  stdOut.appendChild(line);
  scrollToBottom();
};

// consume text that should be sent to the program
const input = (text) => {
  output(`> ${text}`); // output the text so it shows up as a line on the screen
  const socket = getSocket();
  socket.send(text); // send the input text to STDIN for the python script, through the websocket connection
};

const wireListeners = () => {
  const socket = getSocket();

  socket.addEventListener('open', () => {
    output('Connected!');
  });

  socket.addEventListener('message', (event) => {
    output(event.data); // event.data will be the STDOUT text coming from the python script
  });

  const stdIn = document.querySelector('#stdin input');

  stdIn.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return; // we only want to submit the text when "Enter" is pressed
    input(event.target.value); // "Enter" has been pressed, submit the current value of the input element
    event.target.value = ''; // clear the input element so the user can begin a new message
  });
};

const init = () => {
  output('Connecting...');
  wireListeners();
};

// if this pattern isn't familiar, it's just making sure the DOM is loaded
// before running the script (so that it, e.g., can find any elements it needs
// to function if they aren't yet rendered by the time this file is parsed)
if (document.readyState === 'complete') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}

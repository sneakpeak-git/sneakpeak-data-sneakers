const readline = require("readline");
const { Writable } = require("stream");
const { resetCredentials } = require("./credentialsManager");
const { fBold } = require("../utilities/textFormatter");

function listenForCommands() {
  const mutableStdout = new Writable({
    write: function (chunk, encoding, callback) {
      if (!this.muted) {
        process.stdout.write(chunk, encoding);
      }
      callback();
    },
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: mutableStdout,
    terminal: true,
  });

  mutableStdout.muted = true;

  rl.on("line", (input) => {
    console.log();
    if (input === "help" || input === "h") {
      console.log(
        "📖",
        fBold("Available commands:\n\n"),
        fBold("'rs'"),
        "- Reboot the server (dev)\n",
        fBold("'dbreset'"),
        "- Reset database credentials (dev)\n",
        fBold("'git'"),
        "- Display the project GitHub repository link\n",
        fBold("'help'"),
        "or",
        fBold("'h'"),
        "- Show this help dialog\n"
      );
    } else if (input === "git") {
      console.log(
        "📦",
        fBold("Sneaker API git repository:"),
        "\nhttps://github.com/sneakpeak-git/sneakpeak-data-sneakers\n"
      );
    } else if (input === "dbreset") {
      resetCredentials();
    } else if (input === "rs") {
      /* empty */
    } else console.log("❌", fBold("Command not found"), "\n");
  });

  rl.prompt();
}

module.exports = listenForCommands;

function fBold(text) {
    return `\u001b[1m${text}\u001b[0m`;
}

function fColor(text, color) {
    const colors = {
        black: "\u001b[30m",
        red: "\u001b[31m",
        green: "\u001b[32m",
        yellow: "\u001b[33m",
        blue: "\u001b[34m",
        magenta: "\u001b[35m",
        cyan: "\u001b[36m",
        white: "\u001b[37m",
    };

    const reset = "\u001b[0m";

    if (colors[color]) {
        return `${colors[color]}${text}${reset}`;
    }

    return text;
}

module.exports = {
    fBold,
    fColor,
};
  
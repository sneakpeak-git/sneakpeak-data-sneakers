const { fBold } = require("./textFormatter");

function splash(test) {
  if (!test) {
    console.log(
      `
-----------------------------------------------
\n
                  `,
      fBold("SneakPeak"),
      `
           👟     Sneaker API     👟
                     1.0.0
\n
-----------------------------------------------
`
    );
  } else {
    console.log(
      `
-----------------------------------------------
\n
                  `,
      fBold("SneakPeak"),
      `
           👟     Sneaker API     👟
                    Testing
\n
-----------------------------------------------
`
    );
  }
}

module.exports = splash;

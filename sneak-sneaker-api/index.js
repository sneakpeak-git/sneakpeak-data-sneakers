/* eslint-disable no-unused-vars */
const splashScreen = require("./utilities/splashScreen");
const { getCredentials } = require("./utilities/credentialsManager");
const { fBold, fColor } = require("./utilities/textFormatter");

async function createServer(test) {
  splashScreen(test);
  await getCredentials();

  const express = require("express");
  const morgan = require("morgan");
  const listenForCommands = require("./utilities/commands");
  const { Sneaker, Image, InsertSamples } = require("./database/sneaker");

  listenForCommands();

  const app = express();

  //if db is empty, insert sample data
  await InsertSamples();

  if (test) {
    morgan.token("pad", function () {
      return "    ";
    }); // Four spaces
    app.use(
      morgan(
        ":pad:method :url :status :response-time ms - :res[content-length]"
      )
    );
  } else app.use(morgan("dev"));

  app.get("/", (req, res) => {
    res.send(
      "The API is up and running! GET /sneakers to retrieve the sneaker list."
    );
  });

  app.get("/sneakers", (req, res) => {
    Sneaker.findAll({
      include: [Image],
    })
      .then((sneakers) => {
        res.json(sneakers);
      })
      .catch((err) => {
        if (err.toString().includes("HostNotFoundError"))
          console.error(fColor("Could not connect to database", "red"));
        else console.error(err);
        res.status(500).json({ message: "An error occurred" });
      });
  });

  app.get("/sneakers/:id", (req, res) => {
    const id = req.params.id;
    Sneaker.findByPk(id, { include: [Image] })
      .then((sneaker) => {
        if (sneaker) {
          res.json(sneaker);
        } else {
          res.status(404).json({ message: `Sneaker with ID: ${id} not found` });
        }
      })
      .catch((err) => {
        if (err.toString().includes("HostNotFoundError"))
          console.error(fColor("Could not connect to database", "red"));
        else console.error(err);
        res.status(500).json({ message: "An error occurred" });
      });
  });

  if (!test) {
    console.log(
      "If you are in a dev environment,\ntype",
      fBold("'help'"),
      "for more information\n"
    );
  }

  return app;
}

/* istanbul ignore next */
if (require.main === module) {
  (async () => {
    const server = await createServer(false);
    server.listen(3000, () => {
      console.log(`Server running on port 3000\n`);
    });
  })();
}

module.exports = createServer;

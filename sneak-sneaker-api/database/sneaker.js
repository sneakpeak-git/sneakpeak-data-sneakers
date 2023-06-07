const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const { fBold } = require("../utilities/textFormatter");

const Sneaker = sequelize.define(
  "Sneaker",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.STRING(20),
    },
    model: {
      type: DataTypes.STRING(30),
    },
    name: {
      type: DataTypes.STRING(30),
    },
    color: {
      type: DataTypes.STRING(30),
    },
    release_date: {
      type: DataTypes.DATEONLY,
    },
    description: {
      type: DataTypes.TEXT,
    },
    extra: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "sneakers",
    timestamps: false,
  }
);

const Image = sequelize.define(
  "Image",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sneaker_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "sneakers",
        key: "id",
      },
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "images",
    timestamps: false,
  }
);

Sneaker.hasMany(Image, { foreignKey: "sneaker_id" });
Image.belongsTo(Sneaker, { foreignKey: "sneaker_id" });

const InsertSamples = async () => {
  await Sneaker.sync();
  await Image.sync();
  const count = await Sneaker.count();
  if (count === 0) {
    await Sneaker.create({
      brand: "Nike",
      model: "15122-111/CW2288-111",
      name: "Nike Air Force 1 Low 07",
      color: "White",
      release_date: "2007-11-24",
      description:
        "This sneaker has been added to the SnaekPeak database as a sample entry.",
      extra: "Comes with 2X Af1 Branded Lace Dubrae (Attached)",
    });
    await Sneaker.create({
      brand: "Jordan",
      model: "DV1748-601",
      name: "Jordan 1 High OG",
      color: "University Red/Black/White",
      release_date: "2007-11-24",
      description:
        "This sneaker has been added to the SnaekPeak database as a sample entry.",
    });
    await Image.create({
      sneaker_id: 1,
      link: "https://imgur.com/fKxkbIS.png",
    });
    await Image.create({
      sneaker_id: 2,
      link: "https://i.imgur.com/VuFEMWU.png",
    });
    // await Image.create({
    //     sneaker_id: 2,
    //     link: 'https://i.imgur.com/4Qbghpv.png'
    // })
    // await Image.create({
    //     sneaker_id: 2,
    //     link: 'https://i.imgur.com/c7ASyEw.png'
    // })
    console.log("✅", fBold("Sample data added to database\n"));
  }
};

module.exports = {
  Sneaker,
  Image,
  InsertSamples,
};

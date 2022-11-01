const {DataTypes}= require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.yeaah.co%2Fwp-content%2Fuploads%2F2021%2F08%2Fproducto-sin-imagen.jpg&imgrefurl=https%3A%2F%2Fwww.yeaah.co%2Ftienda%2Faccesorios%2Frepuestos%2Frosca-manubrio-2%2F&tbnid=U3OXT9H2MwknwM&vet=12ahUKEwjVv5bYso37AhUkr5UCHT4kAr0QMygDegUIARC9AQ..i&docid=xfZFkSlfNAOcOM&w=800&h=800&itg=1&q=imagen%20de%20producto%20sin%20imagen&ved=2ahUKEwjVv5bYso37AhUkr5UCHT4kAr0QMygDegUIARC9AQ",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)};

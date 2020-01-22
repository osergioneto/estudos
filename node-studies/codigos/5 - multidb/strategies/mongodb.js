const ICrud = require("../strategies/interfaces/ICrud");

class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log("O item foi salvo no MongoDB");
  }
}

module.exports = MongoDB;
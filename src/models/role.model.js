import bookshelf from "../config/bookshelf.js";

const TABLE_NAME = "role";

class Role extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

export default Role;

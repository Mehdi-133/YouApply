import { Technology} from "../models/index.js";

class TechnologyRepo {
  async findAll() {
    return await Technology.findAll();
  }
}

export default new TechnologyRepo();

export default class BaseRepository {
  static model = null;

  static setModel(model) {
    this.model = model;
  }

  static async all(options = {}) {
    let query = this.model.find();

    if (options.populate) {
      query = query.populate(options.populate);
    }

    if (options.sort) {
      query = query.sort(options.sort);
    }

    if (options.select) {
      query = query.select(options.select);
    }

    return query.exec();
  }

  static async get(id, populate) {
    let query = this.model.findById(id);

    if (populate) {
      query = query.populate(populate);
    }

    return query.exec();
  }

  static async create(data) {
    const entity = new this.model(data);
    return entity.save();
  }

  static async findOne(conditions, populate) {
    let query = this.model.findOne(conditions);

    if (populate) {
      query = query.populate(populate);
    }

    return query.exec();
  }

  static async findMany(conditions, options = {}) {
    let query = this.model.find(conditions);

    if (options.populate) {
      query = query.populate(options.populate);
    }

    if (options.sort) {
      query = query.sort(options.sort);
    }

    return query.exec();
  }

  static async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  static async delete(id) {
    const result = await this.model.findByIdAndDelete(id).exec();
    return !!result;
  }
}
class BaseRepository {
  constructor(schema) {
    this._schema = schema;
  }

  async create(payload) {
    const result = await this._schema.create(payload);
    return result;
  }

  async findByParams(search) {
    console.log(search);
    const { limit = 100, offset = 0, test, ...query } = search;
    return this._schema.paginate(
      { query, test },

      { limit, offset }
    );
  }

  async update(id, payload) {
    return this._schema.findByIdAndUpdate(id, payload, { new: true });
  }

  async delete(_id) {
    return this._schema.findByIdAndRemove(_id);
  }
}
module.exports = BaseRepository;

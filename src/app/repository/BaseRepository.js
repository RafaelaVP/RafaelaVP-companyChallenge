class BaseRepository {
    constructor(schema) {
        this._schema = schema;
    }
    async create(payload) {
        return await this._schema.create(payload);
    }
    async findByParams(search) {
        const {limit = 100, offset = 0, ...query} = search
        return  this._schema.paginate(
          {...query},

          {
            limit,
            offset
          }
        )
       
    }
    async update(_id, payload) {
        return this._schema.findByIdAndUpdate(_id, payload, { new: true });
      }
    
      async delete(_id) {
        return this._schema.findByIdAndRemove(_id);
      }
    
      async getById(id) {
        return this._schema.findById(id);
      }
}
 module.exports = BaseRepository;

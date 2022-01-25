class BaseRepository {
    constructor(schemas) {
        this._schemas = schemas;
    }
    async create(payload) {
        return await this._schemas.create(payload);
    }
}
 module.exports = BaseRepository;

const { LogicalException } = require('@adonisjs/generic-exceptions')

class CannotResolveUrlException extends LogicalException {
    static invoke(request) {
        return new this(`Cannot resolve url for ${request.url()}`, 404, 'OQAPIA_CANNOT_RESOLVE_URL')
    }
}

module.exports = CannotResolveUrlException
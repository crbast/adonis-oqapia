const { LogicalException } = require('@adonisjs/generic-exceptions')

class RouteNotFoundException extends LogicalException {
    constructor(resources) {
        const message = `Cannot resolve url for ${resources}`
        const status = 404
        const code = 'OQAPIA_ROUTE_404'

        super(message, status, code)
    }
}

module.exports = RouteNotFoundException
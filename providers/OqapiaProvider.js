'use strict'

/*
 * Oqapia - Dynamic Localization Urls
 *
*/

const { ServiceProvider } = require('@adonisjs/fold')

class OqapiaProvider extends ServiceProvider {

    /**
     * Register Translator middleware
     * 
     * @method _registerTranslatoriddleware
     */
    _registerTranslatoriddleware() {
        this.app.bind('Oqapia/Middleware/Translator', () => {
            const trans = require('../src/Middleware/Translator')
            return new trans
        })
    }

    /**
     * Register Exceptions
     * - 
     */
    _registerExceptions() {
        this.app.bind('Oqapia/Exceptions/RouteNotFoundException', () => {
            const RouteNotFoundException = require('../src/Exceptions/RouteNotFoundException')
            return RouteNotFoundException
        })
    }

    /**
     * Register namespaces to the IoC container
     * 
     * @method register
     */
    register() {
        this._registerTranslatoriddleware()
        this._registerExceptions()
    }

    async boot() { }
}

module.exports = OqapiaProvider
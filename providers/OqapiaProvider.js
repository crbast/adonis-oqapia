'use strict'

/*
 * Oqapia - Dynamic Localization Urls
 *
*/

const { ServiceProvider } = require('@adonisjs/fold')

class OqapiaProvider extends ServiceProvider {

    /**
     * Register AutoFillLangUrl middleware
     * 
     * @method _registerAFLUMiddleware
     */
    _registerAFLUMiddleware() {
        this.app.bind('Oqapia/Middleware/AutoFillLangUrl', () => {
            const Aflu = require('../src/Middleware/AutoFillLangUrl')
            return new Aflu
        })
    }

    /**
     * Register LanguageSelection middleware
     */
    _registerLanguageSelectionMiddleware() {
        this.app.bind('Oqapia/Middleware/LanguageSelection', () => {
            const Ls = require('../src/Middleware/LanguageSelection')
            return new Ls
        })
    }

    /**
     * Register namespaces to the IoC container
     * 
     * @method register
     */
    register() {
        this._registerAFLUMiddleware()
        this._registerLanguageSelectionMiddleware()
    }

    async boot() { }
}

module.exports = OqapiaProvider
'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class LanguageSelection {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ response, antl, params, view, session }, next, properties) {
    const locales = antl.availableLocales()
    switch (properties) {
      case 'session':
        if (session.get('lang') != undefined) {
          antl.switchLocale(session.get('lang'))
        }
        else {
          session.put('lang', antl.currentLocale())
          antl.switchLocale(antl.currentLocale())
        }
        break;
      default:
        var lang = params.lang
        if (lang != undefined) {
          if (!locales.includes(lang)) {
            return response.status(404).send(view.render('404'))
          }
          session.put('lang', lang)
          antl.switchLocale(lang)
        }
        else {
          if (session.get('lang') != undefined) {
            antl.switchLocale(session.get('lang'))
          }
          else {
            session.put('lang', antl.currentLocale())
            antl.switchLocale(antl.currentLocale())
          }
        }
        break;
    }
    await next()
  }
}

module.exports = LanguageSelection

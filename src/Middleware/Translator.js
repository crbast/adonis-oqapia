'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const RouteNotFoundException = use('Oqapia/Exceptions/RouteNotFoundException')

class Translator {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   * @param {Response} ctx.response
   */
  async handle({ response, antl, params, view, session, request }, next, properties) {
    if (params.lang == undefined) {
      return response.redirect(`${antl.currentLocale()}${request.url()}`)
    }

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
            throw new RouteNotFoundException(request.url())
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

module.exports = Translator

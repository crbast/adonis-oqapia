'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AutoFillLangUrl {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, params, response, antl }, next) {
    if (params.lang == undefined) {
      return response.redirect(`${antl.currentLocale()}${request.url()}`)
    }
    await next()
  }
}

module.exports = AutoFillLangUrl

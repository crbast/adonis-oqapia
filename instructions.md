# In progress

# Prerequisites

Make sure to have `@adonisjs/antl` installed:
```bash
> adonis install @adonisjs/antl
```

# Installation

With `@adonis/cli` :
```bash
> adonis install @neptium/adonis-oqapia
```

## Adonis app

1. Add Oqapia provider: (`start/app.js`)
```js
const providers = [
    'adonis-oqapia/providers/OqapiaProvider'
]
```

2. Add Oqapia Middleware: (`start/kernel.js`)
```js
const namedMiddleware = [
    translator: 'Oqapia/Middleware/Translator'
]
```

3. [Handling exceptions](https://adonisjs.com/docs/4.1/exceptions#sponsor)
   
Exeptions code:
- `OQAPIA_CANNOT_RESOLVE_URL` : (Example: 404 page)

Example:
```js
async handle(error, { view }) {
    if (error.code === 'OQAPIA_CANNOT_RESOLVE_URL') {
      view.render('404')
      return
    }
    return super.handle(...arguments)
}
```

## Configuration
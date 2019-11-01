# In progress

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
    autoFill: 'Oqapia/Middleware/AutoFillLangUrl',
    langSelection: 'Oqapia/Middleware/LanguageSelection'
]
```
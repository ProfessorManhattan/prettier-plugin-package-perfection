import { format } from 'prettier-package-json'
import { parsers } from 'prettier/parser-babel'

const parser = parsers['json-stringify']

// eslint-disable-next-line functional/immutable-data, unicorn/prefer-module
exports.parsers = {
  'json-stringify': {
    ...parser,
    preprocess(text: string, options: any) {
      const regex = /package.*json$/u

      return regex.test(options.filepath) ? format(JSON.parse(text)) : text
    }
  }
}

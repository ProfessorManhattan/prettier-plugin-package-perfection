
import { parsers } from 'prettier/parser-babel'
import { format } from 'prettier-package-json'

const parser = parsers['json-stringify']

exports.parsers = {
    'json-stringify': {
        ...parser,
        preprocess(text: string, options: any) {
            const regex = new RegExp("package.*json$")
            return regex.test(options.filepath) ? format(JSON.parse(text)) : text
        }
    }
}

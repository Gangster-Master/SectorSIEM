'use strict';
const typescriptTransform = require('i18next-scanner-typescript');
const fs = require('fs');
const chalk = require('chalk');
const DEFAULT_NS = 'common'

module.exports = {
    input: [
        'src/**/*.{js,jsx}',
        // Use ! to filter out files or directories
        '!./**/*.spec.{js,jsx}',
        '!./i18n/**',
        '!./node_modules/**',
    ],
    output: './',
    options: {
        debug: true,
        sort: true,
        plural: true,
        attr: {
            list: ['data-i18n'],
            extensions: ['.html', '.htm']
        },
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx'],
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            defaultsKey: 'defaults',
            extensions: ['.js', '.jsx'],
            // @ts-ignore
            fallbackKey: (ns, value) => value,
        },
        lngs: ['ru', 'uz', 'us'],
        ns: [DEFAULT_NS, 'monitoring', 'auth'],
        defaultLng: 'us',
        defaultNs: DEFAULT_NS,
        defaultValue: '',
        resource: {
            loadPath: 'public/locales/{{lng}}/{{ns}}.json',
            savePath: 'public/locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        nsSeparator: ':',
        keySeparator: '.',
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    // @ts-ignore
    transform: typescriptTransform({
        // default value for extensions
        extensions: [".ts", ".tsx"],
        // optional ts configuration
        tsOptions: {
            target: "es2017",
        },
        // @ts-ignore
        customTransform: (outputText, file, enc, done) => {
            "use strict";

            const content = fs.readFileSync(file.path, enc);

            let count = 0;

            // @ts-ignore
            parser.parseFuncFromString(content, {list: ['i18next.t', 'i18n.t', 't']}, (key, options) => {
                // @ts-ignore
                parser.set(key, Object.assign({}, options, {
                    nsSeparator: false,
                    keySeparator: false,
                }));
                ++count;
            });

            if (count > 0) {
                console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
            }
            done();
        }},
    )
};


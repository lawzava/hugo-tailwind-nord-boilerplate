const siteDir = __dirname + "/../../";

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        siteDir + 'layouts/**/*.html',
        siteDir + 'content/**/*.html',
        'layouts/**/*.html',
        'content/**/*.html',
    ],
    defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
        return broadMatches.concat(innerMatches)
    }
})

module.exports = {    
    plugins: [        
        require('postcss-import')({path: [siteDir]}),
        require('tailwindcss')(siteDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({path: [siteDir]}),
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
    ]
}
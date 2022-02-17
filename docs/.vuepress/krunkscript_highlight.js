/**
 * Language: KrunkScript
 * Contributors:
 *   KPal81xd (https://github.com/kpal81xd/krunkdocs/blob/master/docs/index.js)
 *   SwatDoge <email@swatdo.ge>
 */
module.exports = function (hljs){
    return {
        case_insensitive: true,
        contains: [
            hljs.HASH_COMMENT_MODE, 
            {
                'className': 'keyword',
                'variants': [{
                    'begin': '\x5cb(public|action|return|if|else|for|while|addTo|remove|lengthOf|notEmpty|toStr|toNum)\x5cb'
                }]
            },
            {
                'className': 'literal',
                'variants': [{
                    'begin': '\x5cb(GAME|true|false)\x5cb'
                }]
            },
            {
                'className': 'built_in',
                'variants': [{
                    'begin': '\x5cb[_a-zA-Z][_a-zA-Z0-9]*(?=\x5c()'
                }]
            }, 
            {
                'className': 'title',
                'variants': [{
                    'begin': '\x5cb(num|bool|char|str|obj)\x5cb'
                }]
            }, 
            {
                'className': 'variable',
                'variants': [{
                    'begin': '\x5cb[_a-zA-Z][_a-zA-Z0-9]*\x5cb'
                }]
            }, 
            {
                'className': 'number',
                'variants': [{
                    'begin': '\x5cd+\x5c.?\x5cd*'
                }]
            }, 
            {
                'className': 'string',
                'variants': [{
                    'begin': '(\x22[^\x22\x5cn\x5cr]*\x22)|(\x27[^\x27\x5cn\x5cr]*\x27)'
                }]
            }
        ]
    }
}
/**
 * @file 提供匹配规则的类型。
 */

/**
 * 匹配到规则之后的附加特性。
 * @typedef RuleExtended
 * @property {boolean} isPC 是否为 PC 端。
 */

/**
 * 匹配规则。
 * @typedef Rule
 * @property {string} name 规则名。
 * @property {RegExp} [rule] 匹配整段用户代理字符串的正则表达式。
 * @property {string[]} [keywords] 用于匹配的关键字。
 * @property {RegExp|string} [modelRule] 匹配机型的正则表达式或字符串。
 * @property {(ua: string) => boolean} [preCheck] 预匹配函数。
 * @property {number} [verLength] 版本号保留的段数。
 * @property {(ver: string) => string|undefined} [version] 对版本号进行处理的函数。
 * @property {RuleExtended} [extended] 匹配到规则之后的附加特性。
 */

module.exports = {};

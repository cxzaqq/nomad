// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
// 코멘트만 달아주면 ts의 보호를 받을 수 있다 (동작 이상 X)

var TimeLimitedCache = function () {
    this.cachedObject = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */


TimeLimitedCache.prototype.set = function (key, value, duration) {
    const existed = this.cachedObject.has(key);
    if (existed) {
        clearTimeout(this.cachedObject.get(key).timer)
    }
    const timer = setTimeout(() => {
        this.cachedObject.delete(key);
    }, duration);
    this.cachedObject.set(key, { value, timer })
    return existed
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const existedValue = this.cachedObject.has(key)
    return existedValue ? this.cachedObject.get(key).value : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cachedObject.size
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
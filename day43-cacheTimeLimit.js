//Fist Idea:
//Use date.now() to judge the key is expired or not. (?)
//Solution in ExplainThis:
//Use setTimeOut for deleting the key when u set.

class TimeLimitcache {
  constructor() {
    this.cache = new Map();
  }
  set(key, value, duration) {
    const isKeyExisted = this.cache.has(key);

    //Cancel the previous delete action.
    if (isKeyExisted) clearTimeout(this.cache.get(key).timeID);

    //Set the expite time.
    const timeID = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timeID });

    return isKeyExisted;
  }

  get(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }

  count() {
    return this.cache.size;
  }
}

const tmpCache = new TimeLimitcache();
tmpCache.set("first", 666, 2000);
tmpCache.set("second", "haha", 1500);
tmpCache.set("third", "Hello, world :)", 7000);

// setTimeout(() => console.log(tmpCache.get("first")), 500);
// setTimeout(() => console.log(tmpCache.get("first")), 1500);
// setTimeout(() => console.log(tmpCache.get("first")), 2500);

setTimeout(() => console.log(tmpCache.get("second")), 500);
setTimeout(() => console.log(tmpCache.set("second", "heheeeee", 1000)), 1000);
setTimeout(() => console.log(tmpCache.get("second")), 1500);
setTimeout(() => console.log(tmpCache.get("second")), 2500);

setTimeout(() => console.log(tmpCache.count()), 5000);

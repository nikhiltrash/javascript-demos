class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      console.log("oldestKey: ", oldestKey);
      this.cache.delete(oldestKey);
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, "one");
cache.put(2, "two");
console.log(cache.get(1));
cache.put(3, "three");
console.log(cache.get(2));
cache.put(4, "four");
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));

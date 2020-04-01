const _ITEMS = new WeakMap();

class Stack {
  constructor() {
    _ITEMS.set(this, []);
  }

  push(obj) {
    _ITEMS.get(this).push(obj);
  }

  pop() {
    if (_ITEMS.get(this).length === 0) throw new Error('stack is empty!');
    return _ITEMS.get(this).pop();
  }

  peek() {
    if (_ITEMS.get(this).length === 0) throw new Error('stack is empty!');
    return _ITEMS.get(this)[_ITEMS.get(this).length - 1];
  }

  get count() {
    return _ITEMS.get(this).length;
  }
}

let s = new Stack();
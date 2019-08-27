class Flow {
    constructor() {
      this.stack = []
      this.currentIndex = 0
      this.parent = null;
    }
  
    use(fn) {
      this.stack.push(fn)
      return this
    }
  
    hasNext() {
      return this.currentIndex < this.stack.length - 1
    }
  
    next () {
      ++this.currentIndex
      this.run()
    }
  
    run() {
      const handle = this.stack[this.currentIndex]
  
      if (!handle) {
        if (this.parent) {
          this.parent.next()
        }
      } else if (handle instanceof Flow) {
        handle.parent = this
        handle.next()
      } else {
        handle(this.next.bind(this))
      }
  
    }
  
  }

  module.exports = Flow
  
  
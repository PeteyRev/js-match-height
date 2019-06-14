export class MatchHeight {
  constructor($el, opts) {
    this.defaults = {
      timeout: 250
    };
    this.options = Object.assign(this.defaults, opts);
    this.$els = document.querySelectorAll($el);
    this.$elsArray = Array.prototype.slice.call(this.$els);
    this.getAndSet(this.$elsArray);
    this.debounceHeight = this.debounce(() => {
      this.getAndSet(this.$elsArray);
    }, this.options.timeout);
    window.addEventListener('resize', () => {
      this.debounceHeight();
    });
  }

  getAndSet($elsArray) {
    $elsArray.forEach($el => $el.removeAttribute('style'));
    const height = Math.max(...$elsArray.map(o => o.clientHeight));
    $elsArray.forEach(($el) => {
      Object.assign($el.style, { height: `${height}px`, verticalAlign: 'top' });
    });
  }

  debounce(func, wait, immediate) {
    let timeout;
    return () => {
      const context = this;
      const args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}

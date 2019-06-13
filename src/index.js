

export class MatchHeight {
  constructor($el, opts) {
    this.defaults = {
      timeout: 250
    }
    this.options = Object.assign(this.defaults, opts);
    this.$els = document.querySelectorAll($el);
    this.$elsArray = Array.prototype.slice.call(this.$els);
    this.getAndSet(this.$elsArray);
    this.debounceHeight = this.debounce(() => {
      this.getAndSet(this.$elsArray);
      console.log(this.defaults.timeout)
    }, this.options.timeout);
    window.addEventListener('resize', () => {
      this.debounceHeight();
    });
  }

  getAndSet($elsArray)  {
    for (const $el of $elsArray) {
      $el.removeAttribute('style');
    }
    const height = Math.max.apply(Math, $elsArray.map(o => o.clientHeight));
    for (const $el of $elsArray) {
      $el.style.height = `${height}px`;
    }
  };

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
  };

}

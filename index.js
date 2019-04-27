(function () {

  // constructor function
  this.MatchHeight = function ($el, opts) {
    this.defaults = {
      timeout: 250
    }
    this.options = Object.assign(this.defaults, opts);
    this.$els = document.querySelectorAll($el);
    this.$elsArray = Array.prototype.slice.call(this.$els);
    getAndSet(this.$elsArray);
    this.debounceHeight = debounce(() => {
      getAndSet(this.$elsArray);
      console.log(this.defaults.timeout)
    }, this.options.timeout);
    window.addEventListener('resize', () => {
      this.debounceHeight();
    });
  }


  // Private Methods
  const getAndSet = ($elsArray) => {
    for (const $el of $elsArray) {
      $el.removeAttribute('style');
    }
    const height = Math.max.apply(Math, $elsArray.map(o => o.clientHeight));
    for (const $el of $elsArray) {
      $el.style.height = `${height}px`;
    }
  };

  const debounce = (func, wait, immediate) => {
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

  // make accessible globally
  window.MatchHeight = MatchHeight;

})();

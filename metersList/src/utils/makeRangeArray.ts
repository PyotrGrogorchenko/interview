export const makeRangeArray = (from: number, to: number): number[] => {
  const range = {
    from,
    to,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };

  return Array.from(range);
};

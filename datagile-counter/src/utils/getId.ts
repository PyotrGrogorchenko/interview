export const getId = (function() {
  let id = 0
  return () => {
    return String(id++)
  }
})()

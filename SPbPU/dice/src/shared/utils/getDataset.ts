export const getDataset = (e: unknown, name: string, closest = '') => {
  const target = (e as MouseEvent).target as HTMLElement

  if (closest) {
    const el = target.closest(closest)
    if (!el) return null
    return el.getAttribute(name)
  }
  return target.getAttribute(name)
}

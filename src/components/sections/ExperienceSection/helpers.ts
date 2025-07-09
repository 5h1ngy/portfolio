const DEFAULT_TRUNCATE_LENGTH = 140
const ELLIPSIS = '\u2026'

export const truncateSummary = (value: string, length: number = DEFAULT_TRUNCATE_LENGTH) =>
  value.length > length ? `${value.slice(0, length).trim()}${ELLIPSIS}` : value

export { DEFAULT_TRUNCATE_LENGTH }


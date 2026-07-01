export function countWords(text = '') {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export function formatWordCount(text = '') {
  const count = countWords(text)
  return `Word count: ${count} ${count === 1 ? 'word' : 'words'}`
}

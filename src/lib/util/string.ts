/**
 * @name UUID generator
 * @param l : UUID length
 */
const generateUUID = (l: number = 20) => {
  const array = new Uint8Array((l || 40) / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, (dec: number) =>
    dec < 10 ? 0 + String(dec) : dec.toString(16)
  ).join('');
};

export { generateUUID };

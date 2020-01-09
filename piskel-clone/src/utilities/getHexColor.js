export default function getHexColor(sample) {
  return sample.reduce((a, b) => {
    let B = b.toString(16);
    if (B.length < 2) B = `0${B}`;
    return `${a}${B}`;
  }, '#');
}

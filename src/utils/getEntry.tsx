export const getEntry = (url: string) => {
  let matches = url.match(/\d+/g);

  if (matches) {
    return matches[1];
  }
};

export const search = term => {
  return function(x) {
    return x.episode.toLowerCase().includes(term.toLowerCase()) || !term; //The includes() method determines whether a string contains the characters of a specified string.
  };
};

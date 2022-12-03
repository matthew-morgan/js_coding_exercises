export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (!nums.includes(n) || nums.indexOf(n) === nums.length - 1) {
    return null;
  } else {
    return (nums.find((num, index, self) => self[index - 1] === n));
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return {
    1: str.split("").filter(e => e === "1").length,
    0: str.split("").filter(e => e === "0").length
  }
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return (parseInt(Array.from(String(n), Number).reverse().join("")));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((a, b) => a + b);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  }
  else {
    const first = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = first;
    return arr;
  }
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack).some(value => String(value).toLowerCase().includes(searchTerm.toLowerCase()));
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let frequencyMap = {};
  str.replace(/[^a-z0-9 ]/gi, '').toLowerCase().split(" ").forEach(word => {
    if (frequencyMap[word]) {
      frequencyMap[word]++;
    } else {
      frequencyMap[word] = 1;
    }
  });
  return frequencyMap;
};

export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  nums.forEach((e) => {
    if (e < 1) {
      result.push(e);
    }
  });
  return result;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let result = [];
  names.forEach((e) => {
    if (e.charAt(0) === char) {
      result.push(e);
    }
  });
  return result;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let result = [];
  words.forEach((e) => {
    if (e.substring(0, 3) == 'to ') {
      result.push(e);
    }
  });
  return result;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  nums.forEach((e) => {
    if (Number.isInteger(e)) {
      result.push(e);
    }
  });
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let result = [];
  users.forEach((e) => {
    result.push(e.data.city.displayName);
  });
  return result;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  nums.forEach((e) => {
    result.push(Math.round((Math.sqrt(e) * 100)) / 100);
  });
  return result;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result = [];
  sentences.forEach((e) => {
    if (e.toLowerCase().includes(str.toLowerCase())) {
      result.push(e);
    }
  });
  return result;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let result = [];
  triangles.forEach((e) => {
    result.push(Math.max(...e));
  });
  return result;
}

export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      result.push(nums[i]);
    }
  }
  return result;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let result = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) {
      result.push(names[i]);
    }
  }
  return result;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, 3) == 'to ') {
      result.push(words[i]);
    }
  }
  return result;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let result = [];
  for (let i = 0; i < users.length; i++) {
    result.push(users[i].data.city.displayName);
  }
  return result;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(Math.round((Math.sqrt(nums[i]) * 100)) / 100);
  }
  return result;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      result.push(sentences[i]);
    }
  }
  return result;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let result = [];
  for (let i = 0; i < triangles.length; i++) {
    result.push(Math.max(...triangles[i]));
  }
  return result;
}

function sumFor(nums) {
  let sum = 0;
  for(let x = 0; x < nums.length; x++) {
    sum += nums[x];
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let x = 0;

  while(x < nums.length) {
    sum += nums[x];
    x++;
  }
  return sum;
}

function sumRecursion(nums, index) {
  if (index === nums.length-1) {
    return nums[index];
  } else {
    return nums[index] + sumRecursion(nums, index + 1);
  }
}

function sumTheSimpleWay(nums) {
  let sum = 0;
  _.each(nums, function(num) {
    sum += num;
  });
  return sum;
}

numbers = [1, 2, 3];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers, 0));
console.log(sumTheSimpleWay(numbers));

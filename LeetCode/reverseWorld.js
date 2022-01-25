var reverseWords = function(s) {
    return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");   
};

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));
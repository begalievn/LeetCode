var numUniqueEmails = function (emails) {
  let obj = {};
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i].split("@");
    let localName = "";
    for (let j = 0; j < email[0].length; j++) {
      if (email[0][j] == "+") {
        break;
      } else if (email[0][j] != ".") {
        localName += email[0][j];
      }
    }
    email[0] = localName;
    obj[email.join("@")] = 1;
  }
  return Object.keys(obj).length;
};

let emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];
console.log(numUniqueEmails(emails));

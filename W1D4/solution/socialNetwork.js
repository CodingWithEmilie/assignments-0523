/*
Implement solutions to the following questions/problems by writing functions for each one:
Instruction
Implement a function biggestFollower() which returns the name of the individual who follows the most people.
Instruction
Implement mostPopular() which returns the name of the most popular (most followed) individual.
Instruction
Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.
Instruction
Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.
Instruction
Implement some or all these remaining functions.
Identify who has the most followers over 30
Identify who follows the most people over 30
List everyone and their reach (sum of # of followers and # of followers of followers)
Tips
You are encouraged to create some additional functions in order to avoid having very large functions that try to do everything. That said, be sure to name them well. All this may sound familiar - that's because it was covered recently as part of our Function Best Practices.
 */

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f04", "f05"],
  },
};

const biggestFollower = (data) => {
  //   console.log("data", data);
  let biggestFollowerName = "";
  let follows = 0;
  data.forEach((user) => {
    if (user.follows.length > follows) {
      follows = user.follows.length;
      biggestFollowerName = user.name;
    }
  });
  return biggestFollowerName;
};

// console.log("biggest follower", biggestFollower(Object.values(data)));

const mostPopular = (data) => {
  const users = Object.values(data);
  const follows = {};
  users.forEach((user) => {
    user.follows.forEach((follow) => {
      if (follows[follow]) {
        follows[follow]++;
      } else {
        follows[follow] = 1;
      }
    });
  });
  console.log("follows", follows);
  let mostPopularUser = "";
  let mostFollows = 0;
  for (const userId in follows) {
    if (follows[userId] > mostFollows) {
      mostPopularUser = data[userId].name;
      mostFollows = follows[userId];
    }
  }
  return mostPopularUser;
};

// console.log("most popular", mostPopular(data));

const printAll = (data) => {
  const all = {};
  for (const userId in data) {
    const user = data[userId];
    all[user.name] = {
      follows: user.follows.map((follow) => data[follow].name),
      isFollowed: [],
    };
  }
  //   console.log("all", all);
  for (const userId in data) {
    const user = data[userId];
    user.follows.forEach((follow) => {
      //   all[data[follow]];
      all[data[follow].name].isFollowed.push(user.name);
    });
  }
  return all;
};

// console.log("print all", printAll(data));

/*
{
    name: {
        follows: [names],
        isFollowed: [names]
    }, ...
}
*/

const unrequitedFollowers = (data) => {
  const all = printAll(data);
  const unrequited = [];
  for (const name in all) {
    all[name].follows.forEach((follow) => {
      if (!all[name].isFollowed.includes(follow)) {
        if (!unrequited.includes(name)) {
          unrequited.push(name);
        }
      }
    });
  }
  return unrequited;
};

console.log("unrequited followers", unrequitedFollowers(data));

// const task1 = (callback) => {
//   setTimeout(() => {
//     console.log("Task 1 completed");
//     callback();
//   }, 3000);
// };

// const task2 = (callback) => {
//   setTimeout(() => {
//     console.log("Task 2 completed");
//     callback();
//   }, 2000);
// };

// const task3 = (callback) => {
//   setTimeout(() => {
//     console.log("Task 3 completed");
//     callback();
//   }, 1000);
// };

// task1(() => {
//   task2(() => {
//     task3(() => {});
//   });
// });

//
const userData = { id: 1, name: "Agnes Appia" };
const usersPosts = [
  { id: 101, content: "Post 1" },
  { id: 102, content: "Post 2" },
];
const postComments = {
  101: ["Comment 1", "Comment 2"],
  102: ["Comment 1", "Comment 2"],
};

const fetchUserData = (userId, callback) => {
  console.log("Fetching user data");
  setTimeout(() => {
    callback(userData);
  }, 1000);
};
const fetchUserPosts = (userId, callback) => {
  console.log("Fetching users posts");
  setTimeout(() => {
    callback(usersPosts);
  }, 1000);
};
const fetchUserComments = (postId, callback) => {
  console.log("Fetching post comments");
  setTimeout(() => {
    callback(postComments[postId || []]);
  }, 1000);
};

fetchUserData(1, function (userData) {
  console.log(userData);

  fetchUserPosts(userData.id, function (userPosts) {
    userPosts.forEach((post) => {
      console.log(post);
      fetchUserComments(post.id, function (comments) {
        console.log("Comments", comments);
      });
    });
  });
});

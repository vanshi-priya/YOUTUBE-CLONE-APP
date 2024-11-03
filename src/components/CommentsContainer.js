// import React from 'react'

// const commentsData = [
//     {
//         name: "Vanshika Srivastava",
//         text: "Awesome Video",
//         replies: [],
//     },
//     {
//         name: "Vanshika Srivastava",
//         text: "Awesome Video",
//         replies: [
//          {
//             name: "Vanshika Srivastava",
//             text: "Awesome Video",
//             replies: [
//                 {
//                     name: "Vanshika Srivastava",
//                     text: "Awesome Video",
//                     replies: [
//                         {
//                             name: "Vanshika Srivastava",
//                             text: "Awesome Video",
//                             replies: [],
//                         },
//                     ],
//                 },
//             ],
//         },],
//     },
//     {
//         name: "Vanshika Srivastava",
//         text: "Awesome Video",
//         replies: [],
//     },
//     {
//         name: "Vanshika Srivastava",
//         text: "Awesome Video",
//         replies: [],
//     },
//     {
//         name: "Vanshika Srivastava",
//         text: "Awesome Video",
//         replies: [
//             {
//                 name: "Vanshika Srivastava",
//                 text: "Awesome Video",
//                 replies: [],
//             },
//             {
//                 name: "Vanshika Srivastava",
//                 text: "Awesome Video",
//                 replies: [
//                     {
//                         name: "Vanshika Srivastava",
//                         text: "Awesome Video",
//                         replies: [],
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         name: "Vanshika Srivastava",
//         text: "Awesome Video",
//         replies: [],
//     },

// ]

// const Comment = ({data}) => {
//    const { name, text, replies } = data;
//    return(
//     <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
//         <img className='w-12 h-12'
//         alt='user'
//         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
//          />

//      <div className='px-3'>
//         <p className='font-bold'>{name}</p>
//         <p>{text}</p>
//      </div>

//     </div>
//    );
// };

// const CommentsList = ({comments}) => {
//  return comments.map((comment, index) =>
//  <div key={index}>
//     <Comment data={comment} />
//     <div className='pl-5 border border-l-black ml-5'>
//      <CommentsList comments={comment.replies} />
//     </div>
//   </div>);

// }

// const CommentsContainer = () => {
//   return (
//     <div className='m-5 p-2'>
//        <h1 className='text-2xl font-bold'>Comments: </h1>
//        <CommentsList comments= {commentsData}  />
//     </div>
//   )
// }

// export default CommentsContainer;

import React from "react";

// Arrays of random names and texts
const randomNames = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Lee",
  "Eva Green",
  "Frank Wright",
];
const randomTexts = [
  "Great video!",
  "Very informative, thanks!",
  "Awesome content!",
  "I learned so much!",
  "Thanks for sharing!",
  "Really enjoyed this!",
];

// Function to generate random comment data
const generateRandomComments = (depth = 0) => {
  // Limit the depth of replies to avoid an excessively deep structure
  if (depth > 3) return [];

  const numberOfComments = Math.floor(Math.random() * 3) + 1; // Random number of comments (1-3)
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    const comment = {
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      text: randomTexts[Math.floor(Math.random() * randomTexts.length)],
      replies: generateRandomComments(depth + 1), // Recursive call to generate replies
    };
    comments.push(comment);
  }

  return comments;
};

// Generate the random comments data
const commentsData = generateRandomComments();

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

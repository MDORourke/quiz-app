const RoundConfig = [
  {
    id: "round1",
    questions: [
      {
        questionText: "Question 1",
        questionType: "video",
        questionProps: {
          videoId: "dQw4w9WgXcQ",
        },
        answers: [
          {
            answerType: "freetext",
            answerProps: {
              caption: "Artist",
            },
          },
          {
            answerType: "freetext",
            answerProps: {
              caption: "Title",
            },
          },
        ],
      },
      {
        questionText: "Question 2",
        questionType: "video",
        questionProps: {
          videoId: "L_jWHffIx5E",
        },
        answers: [
          {
            answerType: "freetext",
            answerProps: {
              caption: "Artist",
            },
          },
          {
            answerType: "freetext",
            answerProps: {
              caption: "Title",
            },
          },
        ],
      },
    ],
  },
  {
    id: "round2",
    questions: [
      {
        questionText: "Question 1",
        questionType: "text",
        questionProps: {
          text: "This statement is true",
        },
        answers: [
          {
            answerType: "options",
            answerProps: {
              options: ["True", "False"],
            },
          },
        ],
      },
    ],
  },
];

export default RoundConfig;

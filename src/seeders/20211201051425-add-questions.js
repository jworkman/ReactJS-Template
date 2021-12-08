'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Questions', [
    // Quiz 1
    {
      question: 'Question one?',
      quizId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 2
    {
      question: 'Question one?',
      quizId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 3
    {
      question: 'Question one?',
      quizId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 4
    {
      question: 'Question one?',
      quizId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Quizzes', {[Sequelize.Op.or]: [
      {quizId: 1}, 
      {quizId: 2},
      {quizId: 3},
      {quizId: 4},
    ]});
  }
};

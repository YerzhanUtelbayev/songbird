import {
  SET_CORRECT_ANSWER_NUMBER,
  PROCEED_TO_NEXT_STAGE,
  HANDLE_CORRECT_ANSWER,
  HANDLE_INCORRECT_ANSWER,
} from '../types/actionTypes';

interface SetCorrectAnswerNumberAction {
  type: typeof SET_CORRECT_ANSWER_NUMBER;
  payload: number;
}

interface ProceedToNextStageAction {
  type: typeof PROCEED_TO_NEXT_STAGE;
}

interface HandleCorrectAnswer {
  type: typeof HANDLE_CORRECT_ANSWER;
}

interface HandleIncorrectAnswer {
  type: typeof HANDLE_INCORRECT_ANSWER;
}

export type GameActionTypes =
  | SetCorrectAnswerNumberAction
  | ProceedToNextStageAction
  | HandleCorrectAnswer
  | HandleIncorrectAnswer;

export const setCorrectAnswerNumber = (
  answerNumber: number,
): GameActionTypes => ({
  type: SET_CORRECT_ANSWER_NUMBER,
  payload: answerNumber,
});

export const proceedToNextStage = (): GameActionTypes => ({
  type: PROCEED_TO_NEXT_STAGE,
});

export const handleCorrectAnswer = (): HandleCorrectAnswer => ({
  type: HANDLE_CORRECT_ANSWER,
});

export const handleIncorrectAnswer = (): HandleIncorrectAnswer => ({
  type: HANDLE_INCORRECT_ANSWER,
});

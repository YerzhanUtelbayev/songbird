import {
  SET_CORRECT_ANSWER_NUMBER,
  PROCEED_TO_NEXT_STAGE,
} from '../types/actionTypes';

interface SetCorrectAnswerNumberAction {
  type: typeof SET_CORRECT_ANSWER_NUMBER;
  payload: number;
}

interface ProceedToNextStageAction {
  type: typeof PROCEED_TO_NEXT_STAGE;
}

export const setCorrectAnswerNumber = (
  answerNumber: number,
): GameActionTypes => ({
  type: SET_CORRECT_ANSWER_NUMBER,
  payload: answerNumber,
});

export const proceedToNextStage = (): GameActionTypes => ({
  type: PROCEED_TO_NEXT_STAGE,
});

export type GameActionTypes =
  | SetCorrectAnswerNumberAction
  | ProceedToNextStageAction;

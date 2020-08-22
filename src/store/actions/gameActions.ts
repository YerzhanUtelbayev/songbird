import {
  SET_CORRECT_ANSWER_ID,
  PROCEED_TO_NEXT_STAGE,
  HANDLE_CORRECT_ANSWER,
  HANDLE_INCORRECT_ANSWER,
  RESTART_GAME,
  SET_PLAYING_COMPONENT,
  RESET_PLAYING_COMPONENT,
} from '../types/actionTypes';

interface SetCorrectAnswerIdAction {
  type: typeof SET_CORRECT_ANSWER_ID;
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

interface RestartGame {
  type: typeof RESTART_GAME;
}

interface SetPlayingComponent {
  type: typeof SET_PLAYING_COMPONENT;
  payload: string;
}

interface ResetPlayingComponent {
  type: typeof RESET_PLAYING_COMPONENT;
}

export type GameActionTypes =
  | SetCorrectAnswerIdAction
  | ProceedToNextStageAction
  | HandleCorrectAnswer
  | HandleIncorrectAnswer
  | RestartGame
  | SetPlayingComponent
  | ResetPlayingComponent;

export const setCorrectAnswerId = (answerId: number): GameActionTypes => ({
  type: SET_CORRECT_ANSWER_ID,
  payload: answerId,
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

export const restartGame = (): RestartGame => ({
  type: RESTART_GAME,
});

export const setPlayingComponent = (componentType: string): SetPlayingComponent => ({
  type: SET_PLAYING_COMPONENT,
  payload: componentType,
});

export const resetPlayingComponent = (): ResetPlayingComponent => ({
  type: RESET_PLAYING_COMPONENT,
});

import { IBirdData } from '../types/reducerTypes';
import {
  SET_CORRECT_ANSWER_ID,
  PROCEED_TO_NEXT_STAGE,
  HANDLE_ANSWER,
  RESTART_GAME,
  SET_PLAYING_COMPONENT,
  RESET_PLAYING_COMPONENT,
} from '../types/actionTypes';

interface SetCorrectAnswerIdAction {
  type: typeof SET_CORRECT_ANSWER_ID;
  payload: IBirdData['id'];
}

interface ProceedToNextStageAction {
  type: typeof PROCEED_TO_NEXT_STAGE;
}

interface HandleAnswerById {
  type: typeof HANDLE_ANSWER;
  payload: IBirdData['id'];
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
  | HandleAnswerById
  | RestartGame
  | SetPlayingComponent
  | ResetPlayingComponent;

export const setCorrectAnswerId = (answerId: IBirdData['id']): GameActionTypes => ({
  type: SET_CORRECT_ANSWER_ID,
  payload: answerId,
});

export const proceedToNextStage = (): GameActionTypes => ({
  type: PROCEED_TO_NEXT_STAGE,
});

export const handleAnswerById = (birdId: IBirdData['id']): HandleAnswerById => ({
  type: HANDLE_ANSWER,
  payload: birdId,
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

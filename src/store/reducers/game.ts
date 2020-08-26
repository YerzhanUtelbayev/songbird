import mockData from '../../utilities/mockData.json';
import stageTitles from '../../utilities/stageTitles';
import {
  SET_CORRECT_ANSWER_ID,
  PROCEED_TO_NEXT_STAGE,
  HANDLE_CORRECT_ANSWER,
  HANDLE_INCORRECT_ANSWER,
  RESTART_GAME,
  SET_PLAYING_COMPONENT,
  RESET_PLAYING_COMPONENT,
} from '../types/actionTypes';
import { GameActionTypes } from '../actions/gameActions';
import { MAX_STAGE_SCORE } from '../../utilities/constants';

export interface IBirdData {
  id: string;
  name: string;
  species: string;
  description: string;
  image: string;
  thumbnail: string;
  audio: string;
}

export type IBirdsList = IBirdData[][];

export interface IGameSate {
  birdsList: IBirdsList;
  activeStage: number;
  score: number;
  correctAnswerId: string | null;
  stageAttempts: number;
  hasAnsweredCorrectly: boolean;
  isGameOver: boolean;
  playingComponentType: string | null;
}

const initialState: IGameSate = {
  birdsList: mockData as IBirdsList,
  activeStage: 1,
  score: 0,
  correctAnswerId: null,
  stageAttempts: 0,
  hasAnsweredCorrectly: false,
  isGameOver: false,
  playingComponentType: null,
};

export default (state = initialState, action: GameActionTypes): IGameSate => {
  switch (action.type) {
    case SET_CORRECT_ANSWER_ID:
      return { ...state, correctAnswerId: action.payload };
    case PROCEED_TO_NEXT_STAGE:
      if (state.activeStage === stageTitles.length) {
        return { ...state, isGameOver: true };
      }
      return {
        ...state,
        activeStage: state.activeStage + 1,
        stageAttempts: 0,
        hasAnsweredCorrectly: false,
      };

    case HANDLE_CORRECT_ANSWER:
      return {
        ...state,
        score: state.score + (MAX_STAGE_SCORE - state.stageAttempts),
        hasAnsweredCorrectly: true,
      };
    case HANDLE_INCORRECT_ANSWER:
      return { ...state, stageAttempts: state.stageAttempts + 1 };

    case RESTART_GAME:
      return { ...initialState };

    case SET_PLAYING_COMPONENT:
      return { ...state, playingComponentType: action.payload };
    case RESET_PLAYING_COMPONENT:
      return { ...state, playingComponentType: null };

    default:
      return state;
  }
};

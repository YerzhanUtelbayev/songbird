import mockData from '../../utilities/mockData.json';
import stageTitles from '../../utilities/stageTitles';
import {
  SET_CORRECT_ANSWER_NUMBER,
  PROCEED_TO_NEXT_STAGE,
} from '../types/actionTypes';
import { GameActionTypes } from '../actions/gameActions';

export interface IBirdData {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export type IBirdsList = IBirdData[][];

export interface IGameSate {
  birdsList: IBirdsList;
  activeStage: number;
  score: number;
  correctAnswer: number | null;
}

const initialState: IGameSate = {
  birdsList: mockData as IBirdsList,
  activeStage: 1,
  score: 0,
  correctAnswer: null,
};

export default (state = initialState, action: GameActionTypes): IGameSate => {
  switch (action.type) {
    case SET_CORRECT_ANSWER_NUMBER:
      return { ...state, correctAnswer: action.payload };
    case PROCEED_TO_NEXT_STAGE:
      if (state.activeStage === stageTitles.length) {
        return state;
      }
      return { ...state, activeStage: state.activeStage + 1 };
    default:
      return state;
  }
};

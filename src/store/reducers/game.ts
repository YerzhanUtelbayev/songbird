import { Action } from 'redux';
import mockData from '../../utilities/mockData.json';

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

export default (state = initialState, { type }: Action): IGameSate => {
  switch (type) {
    default:
      return state;
  }
};

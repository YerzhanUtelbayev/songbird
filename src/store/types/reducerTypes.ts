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
  correctAnswerId: IBirdData['id'] | null;
  stageAttempts: number;
  hasAnsweredCorrectly: boolean;
  isGameOver: boolean;
  playingComponentType: string | null;
}

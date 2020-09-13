import { IBirdData } from '../store/types/reducerTypes';

const Logger = {
  bird: String.fromCodePoint(0x1f989),
  introduction:
    'Hi there! I want to help build fast and accessible web experience used by people around the world. I am open for a junior frontend developer or intern position. Head on over to https://www.linkedin.com/in/yerzhan-utelbayev/ to find out more about me',
  styles: {
    answerTip: ['color: #fff', 'background: #0d47a1', 'padding: 5px', 'border-radius: 5px'],
    title: [
      'color: white',
      'text-shadow: 3px 3px purple',
      'background: #5c6bc0',
      'font-size: 5em',
      'border: 2px solid purple',
      'padding: 20px 20px',
      'font-family: cursive',
    ],
    intro: ['padding: 5px 50px 5px 0', 'font-weight: 500'],
  },
  logBirdName(birdData: IBirdData | undefined): void {
    if (birdData) {
      console.log(
        `%cCorrect answer - ${birdData.name}`,
        this.styles.answerTip.join(';'),
        this.bird,
      );
    }
  },
  logIntro(): void {
    console.log('%cSongbird', this.styles.title.join(';'));
    console.log(`%c${this.introduction}`, this.styles.intro.join(';'));
  },
};

export default Logger;

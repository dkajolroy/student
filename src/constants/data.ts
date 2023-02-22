import {CategoryType} from '../Interface/dataInterface';

export const categoryName = {
  DOCUMENT: 'DOCUMENT',
  QR_CODE: 'QR_CODE',
  NOTES: 'NOTES',
  VOICES: 'VOICES',
  BRAIN: 'BRAIN',
  DICTIONARY: 'DICTIONARY',
};

export const categoryData: CategoryType[] = [
  {
    name: categoryName.DOCUMENT,
    image: require('../assets/category/doc.jpg'),
  },
  {
    name: categoryName.QR_CODE,
    image: require('../assets/category/qr.png'),
  },
  {
    name: categoryName.NOTES,
    image: require('../assets/category/note.jpg'),
  },
  {
    name: categoryName.VOICES,
    image: require('../assets/category/voice.png'),
  },
  {
    name: categoryName.BRAIN,
    image: require('../assets/category/brain.jpg'),
  },
  {
    name: categoryName.DICTIONARY,
    image: require('../assets/category/dic.jpg'),
  },
];

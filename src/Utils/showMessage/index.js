import {showMessage} from 'react-native-flash-message';

export const showError = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: '#E06379',
    color: 'white',
  });
};

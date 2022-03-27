/* eslint-disable import/prefer-default-export */
import {
  BUTTON_CLICK,
  AUTHENTICATE_USER,
} from './types';

const onButtonClick = () => ({
  type: BUTTON_CLICK,
});

const authenticateUser = () => ({
  type: AUTHENTICATE_USER,
});

export {
  onButtonClick,
  authenticateUser,
};

import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 350;
export const guidelineBaseHeight = 680;
export const screenSize = Math.sqrt(WINDOW_WIDTH * WINDOW_HEIGHT) / 100;

export const heightStatusBar = StatusBar.currentHeight || 40;
export const heightTabbar = Platform.OS === 'ios' ? 40 : 20;

export const heightInput = 35;
export const heightButton = 40;

type Rect = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type Styles = {
  [key: string]: number;
};

export const scaleSize = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale();

function dimensions(
  top: number,
  right = top,
  bottom = top,
  left = right,
  property: string,
): Styles {
  const styles: Styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(rect: Rect): Styles {
  return dimensions(rect.top, rect.right, rect.bottom, rect.left, 'margin');
}

export function padding(rect: Rect): Styles {
  return dimensions(rect.top, rect.right, rect.bottom, rect.left, 'padding');
}

export function boxShadow(
  color: string = '#000000',
  offset = {height: 2, width: 1},
  radius = 2.84,
  opacity = 0.25,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: 5,
  };
}

import { gutters } from 'theme';
import getStyleSheet from 'theme/Helper/currentStyleSheet';

export const style = (Gutters: typeof gutters) => {
  return getStyleSheet().create({
    descContainer: {
      ...Gutters.smallTMargin,
      ...Gutters.mediumBMargin,
    },
  });
};

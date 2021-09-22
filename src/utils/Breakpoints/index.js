import { generateMedia } from 'styled-media-query';

export const breakpoints = generateMedia({
  desktop: '1281px',
  laptop: '1280px',
  tablet: '800px',
  mobile: '481px',
  minimobile: '320px',
});

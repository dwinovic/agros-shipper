import { generateMedia } from 'styled-media-query';

export const breakpoints = generateMedia({
  desktop: '1500px',
  laptop: '1280px',
  tablet: '800px',
  mobile: '481px',
  minimobile: '420px',
});

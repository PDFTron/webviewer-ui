export const svgHeight = 21;
export const getCircleRadius = (isMobile, customCircleRadius) => {
  if (isMobile) {
    return 8;
  }
  if (customCircleRadius) {
    return customCircleRadius;
  }
  return 4;
};
export const circleRadius = 8;
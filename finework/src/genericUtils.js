//from here we will export the the breakpoints with there respected class
export const classGenerator = (width, className) => {
  let breakpoints = {
    lg: 1024,
    md: 768,
    sm: 425,
  };
  console.log("width", width, breakpoints.lg);
  if (width >= breakpoints.lg) {
    return `${className}-lg`;
  } else if (width > breakpoints.sm && width < breakpoints.lg) {
    return `${className}-md`;
  } else if (width <= breakpoints.sm) {
    return `${className}-sm`;
  }
};

const spaces = [32, 64, 128, 256, 512, 1024, 1536, 2048];
const spaceEntries = spaces.reduce((obj, space) => {
  obj[space] = `${space}px`;
  obj[`-${space}`] = `-${space}px`;
  return obj;
}, {});

module.exports = {
  theme: {
    fontFamily: {
      heading: ['Cairo', 'sans'],
      text: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        main: '#8F034F',
        text: '#393939',
        bg: '#F9F9F9'
      },
      maxWidth: {
        none: 'none'
      },
      opacity: {
        '025': '.025',
        '05': '.05'
      },
      inset: {
        ...spaceEntries
      },
      spacing: {
        ...spaceEntries
      }
    }
  }
};

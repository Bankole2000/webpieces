import { LightenDarkenColor } from './darken';

const generateColors = (theme) => {
  const colors = ['secondary', 'error', 'warning', 'success', 'info', 'primary', 'accent'];
  const colorValues = [];
  const baseColorDark = '#111111';
  const baseColorLight = '#eeeeee';
  const colorComboForward = [];
  let rainbowText = 'linear-gradient(to right,';
  let reverseRainbowText = 'linear-gradient(to right,';
  const generatedColors = {};
  const shadowTypes = ['depressed', 'normal', 'elevated'];
  const gradientTypes = [
    `vertical`,
    `horizontal`,
    `diagonal`,
    `diagonal-reverse`,
    'horizontal-fade',
    'vertical-fade',
    'diagonal-fade',
    `vertical-fade-reverse`,
  ];
  for (const key in theme) {
    generatedColors[`--${key}`] = theme[key];
    // colors.push(key);
    colorValues.push(theme[key]);
  }
  let lightenBackground = LightenDarkenColor(baseColorDark, 20);
  let darkenBackground = LightenDarkenColor(baseColorDark, -20);
  let lightenBackgroundLight = LightenDarkenColor(baseColorLight, 20);
  let darkenBackgroundLight = LightenDarkenColor(baseColorLight, -20);

  lightenBackground = lightenBackground.length < 7 ? (lightenBackground = '#cccccc') : lightenBackground;
  lightenBackgroundLight =
    lightenBackgroundLight.length < 7 ? (lightenBackgroundLight = '#ffffff') : lightenBackgroundLight;
  darkenBackground = darkenBackground.length < 7 ? (darkenBackground = '#000000') : darkenBackground;
  darkenBackgroundLight =
    darkenBackgroundLight.length < 7 ? (darkenBackgroundLight = '#cccccc') : darkenBackgroundLight;

  console.log({ generatedColors, lightenBackground, darkenBackground });
  generatedColors[`--neomorph-dark`] = `3px 3px 3px ${darkenBackground}, -3px -3px 3px ${lightenBackground}`;
  generatedColors[`--glass-dark`] = `${darkenBackground}10`;
  generatedColors[`--glass-light`] = `${lightenBackground}10`;
  generatedColors[`--glass-border-dark`] = `1px solid ${darkenBackground}33`;
  generatedColors[`--glass-border-light`] = `1px solid ${lightenBackgroundLight}88`;
  shadowTypes.forEach((shadowType, i) => {
    const value = i * 3;
    generatedColors[`--glass-shadow-${shadowType}`] = `${value}px ${value}px ${value *
      1.5}px rgba(0, 0, 0, 0.5)`;
    generatedColors[`--glass-blur-${shadowType}`] = `blur(${i * 2 + 1}px)`;
  });
  generatedColors[
    `--neomorph-dark-raised`
  ] = `7px 7px 6px ${darkenBackground}, -7px -7px 6px ${lightenBackground}`;
  generatedColors[
    `--neomorph-dark-reverse`
  ] = `inset 3px 5px 5px ${darkenBackground}, inset -3px -5px 5px ${lightenBackground}`;
  generatedColors[
    `--neomorph-light`
  ] = `5px 5px 5px ${darkenBackgroundLight}, -5px -5px 5px ${lightenBackgroundLight}`;
  generatedColors[
    `--neomorph-light-raised`
  ] = `9px 9px 7px ${darkenBackgroundLight}, -9px -9px 7px ${lightenBackgroundLight}`;
  generatedColors[
    `--neomorph-light-reverse`
  ] = `inset 5px 5px 5px ${darkenBackgroundLight}, inset -5px -5px 5px ${lightenBackgroundLight}`;
  for (let i = 0; i < colors.length; i++) {
    const lighten = LightenDarkenColor(theme[colors[i]], 50);

    const darken = LightenDarkenColor(theme[colors[i]], -60);

    generatedColors[`--${colors[i]}-glass`] = `${theme[colors[i]]}30`;
    // generatedColors[`--${colors[i]}-glass-light`] = `${lightenBackground}30`;
    // generatedColors[`--${colors[i]}-glass-border-dark`] = `1px solid ${darken}33`;
    generatedColors[`--${colors[i]}-glass-border`] = `1px solid ${lighten}88`;

    generatedColors[
      `--${colors[i]}-neomorph-reverse`
    ] = `inset 5px 5px 3px ${darken}, inset -5px -5px 3px ${lighten}`;

    rainbowText += ` ${theme[colors[i]]} ${i}%, ${theme[colors[i]]} ${((i + 1) / colors.length) * 100}%`;
    if (i === 0) {
      reverseRainbowText += ` ${theme[colors[i]]} ${i}%, ${theme[colors[i]]} ${((i + 1) / colors.length) *
        100}%`;
    } else {
      reverseRainbowText += ` ${theme[colors[colors.length - i]]} ${i}%, ${
        theme[colors[colors.length - i]]
      } ${((i + 1) / colors.length) * 100}%`;
    }
    generatedColors[`--${colors[i]}-gradient-${gradientTypes[4]}`] = `linear-gradient(to right, ${
      theme[colors[i]]
    }, ${theme[colors[i]]}00)`;
    generatedColors[`--${colors[i]}-gradient-${gradientTypes[5]}`] = `linear-gradient(to top, ${
      theme[colors[i]]
    }, ${theme[colors[i]]}00)`;
    generatedColors[`--${colors[i]}-gradient-${gradientTypes[6]}`] = `linear-gradient(to top right, ${
      theme[colors[i]]
    }, ${theme[colors[i]]}00)`;
    generatedColors[`--${colors[i]}-gradient-${gradientTypes[7]}`] = `linear-gradient(${theme[colors[i]]}, ${
      theme[colors[i]]
    }00)`;
    if (i == colors.length - 1) {
      rainbowText += ')';
      reverseRainbowText += ')';
    } else {
      rainbowText += ',';
      reverseRainbowText += ',';
    }
    if (i !== 0) {
      colorComboForward.push(`${colors[0]}-${colors[i]}`);
    }
    if (i !== 1) {
      colorComboForward.push(`${colors[1]}-${colors[i]}`);
    }
    if (i !== 2) {
      colorComboForward.push(`${colors[2]}-${colors[i]}`);
    }
    if (i !== 3) {
      colorComboForward.push(`${colors[3]}-${colors[i]}`);
    }
    if (i !== 4) {
      colorComboForward.push(`${colors[4]}-${colors[i]}`);
    }
    if (i !== 5) {
      colorComboForward.push(`${colors[5]}-${colors[i]}`);
    }
    if (i !== 6) {
      colorComboForward.push(`${colors[6]}-${colors[i]}`);
    }
  }

  for (let i = 0; i < colorComboForward.length; i++) {
    generatedColors[`--${colorComboForward[i]}-gradient-${gradientTypes[0]}`] = `linear-gradient(${
      theme[colorComboForward[i].split('-')[0]]
    }, ${theme[colorComboForward[i].split('-')[1]]})`;

    generatedColors[`--${colorComboForward[i]}-gradient-${gradientTypes[1]}`] = `linear-gradient(to right, ${
      theme[colorComboForward[i].split('-')[0]]
    }, ${theme[colorComboForward[i].split('-')[1]]})`;

    generatedColors[
      `--${colorComboForward[i]}-gradient-${gradientTypes[2]}`
    ] = `linear-gradient(to top right, ${theme[colorComboForward[i].split('-')[0]]}, ${
      theme[colorComboForward[i].split('-')[1]]
    })`;

    generatedColors[
      `--${colorComboForward[i]}-gradient-${gradientTypes[3]}`
    ] = `linear-gradient(to bottom right, ${theme[colorComboForward[i].split('-')[0]]}, ${
      theme[colorComboForward[i].split('-')[1]]
    })`;
  }

  generatedColors[`--rainbow`] = rainbowText;
  generatedColors[`--rainbow-reverse`] = reverseRainbowText;
  return generatedColors;
};

export { generateColors };

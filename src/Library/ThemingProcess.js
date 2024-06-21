export function darkModeBgColorPrecedence(reduxTheme, COLORS) {
  if (reduxTheme == "dark") {
    return COLORS.darkModeBgColor;
  } else {
    return COLORS.lightModeBgColor;
  }
}

export function darkModeTextColorPrecedence(reduxTheme, COLORS) {
  if (reduxTheme == "dark") {
    return COLORS.darkModeTextColor;
  } else {
    return COLORS.lightModeTextColor;
  }
}

export function darkModeIconColorPrecedence(reduxTheme, COLORS) {
  if (reduxTheme == "dark") {
    return COLORS.darkModeIconColor;
  } else {
    return COLORS.lightModeIconColor;
  }
}

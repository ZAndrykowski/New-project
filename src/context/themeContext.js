import React from 'react'

const ThemeContext = React.createContext({
    theme: 'danger',
    themeHeader: 'primary',
    changeTheme: () => {}

});

ThemeContext.displayName ='ThemeContext';

export default ThemeContext;
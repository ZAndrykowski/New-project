import React from 'react'

const ThemeContext = React.createContext({
    theme: 'danger',
    themeHeader: 'primary',
    changeTheme: () => {}

});

export default ThemeContext;
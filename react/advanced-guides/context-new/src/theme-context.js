import React from 'react';

export const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee'
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222'
	}
};

export const ThemeContext = React.createContext(
	themes.dark,// default value
);

export const UserContext = React.createContext({
	name: 'Guest',
	changeName: () => {
		this.name = 'User';
	}
});
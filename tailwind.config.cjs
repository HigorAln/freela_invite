module.exports = {
	mode: 'jit', // criar o css necessario somente para oque a sua aplicacao precisa
	content: ['./src/components/**/*.tsx', './src/**/*.tsx'],
	darkMode: 'class',
	theme: {
    fontFamily: {
      roboto: ["Roboto"]
    },
    colors: {
      'txt-primary': "#4F4F4F",
      'gray-500': "#828282",
      "primary": "#00BCAF",
      "white": "#fff",
    }
	},
	plugins: [],
};

'use strict';

export default (data) => document.querySelector('.gifs')
	.innerHTML = data.map(url => `<img src="${url}" />`)
	.join('');
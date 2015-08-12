
'use strict';

export default (data) => data.data.children
	.filter(post => !post.data.over_18)
	.map(post => post.data.url)
	.filter(url => url.match('.gif'))
	.map(url => url.replace('.gifv', '.gif'))

const url = 'https://www.reddit.com/r/perfectloops/top.json?sort=top&t=month';

export default () => fetch(url).then(response => response.json())
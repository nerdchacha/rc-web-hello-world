import URLSearchParams from '@ungap/url-search-params';

const node = document.createElement('h1');
node.innerText = 'Hello world!';
document.body.appendChild(node);

const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);
button.onclick = () => {
  main();
};

const main = async () => {
  const body = new URLSearchParams();
  body.append('grant_type', 'password');
  body.append('username', 'someuser');
  body.append('password', 'fake');
  body.append('extension', '');
  fetch('https://platform.ringcentral.com/restapi/oauth/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa('jJxc4f1ASJ2JlizgMdNnvg:fake'),
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Accept: 'application/json',
    },
    body,
  });
};
// main();

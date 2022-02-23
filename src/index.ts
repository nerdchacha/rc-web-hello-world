import {SDK as RingCentral} from '@ringcentral/sdk';

const node = document.createElement('h1');
node.innerText = 'Hello world!';
document.body.appendChild(node);

const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);
button.onclick = () => {
  main();
};

const rc = new RingCentral({
  clientId: 'jJxc4f1ASJ2JlizgMdNnvg',
  clientSecret: 'fake',
  server: 'https://platform.ringcentral.com',
});

const main = async () => {
  await rc.login({username: 'fake', extension: '', password: 'fake'});
};
// main();

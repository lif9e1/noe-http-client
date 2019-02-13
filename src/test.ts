import { agent } from './index';

// (async () => {
//   let res = await agent.get(
//     'https://srh.westeurope.cloudapp.azure.com/migration/recipes2'
//   );
//   console.log(JSON.stringify(res, null, 2));
// })();

agent.get('https://www.google.com/test1234').then(res => console.log(res));

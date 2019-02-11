import { HttpResult, HttpAgent } from './model/HttpResult';
import { agent } from './index';

(async () => {
  let res = await agent.get(
    'https://srh.westeurope.cloudapp.azure.com/migration/recipes2',
    null,
    false,
  );
  console.log(JSON.stringify(res, null, 2));
})();

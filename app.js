const BatchProcess = require('./lib/BatchRequest');
const secrets = require('./lib/secrets');
const processor = new BatchProcess();

processor.setToken(secrets.token);

const dispatch = processor.processAll(
  processor.buildUrls({
    templateUrl: 'https://system.upteamco.com/cms/___print/invoice.php?eid=[ID]format=1',
    ids: [26789,27049,27354,27471,27472,27482,27524,27526,27533,27534]
  })
);

console.log(dispatch);
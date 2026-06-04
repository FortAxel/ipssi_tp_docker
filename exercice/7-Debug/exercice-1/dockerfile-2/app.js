require('express')().get('/', (_, r) => r.send('ok')).listen(3000);

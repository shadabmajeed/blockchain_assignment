

//Declare IPFS
const ipfsClient = require('ipfs-http-client')

// leaving out the arguments will default to these values
const projectId = '2IdntdhzjPfZjyTngfOKXun8p09';
const projectSecret = '915e9a7a0e4987c0e443cf64919960e3';

const auth ='Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    
const ipfs = ipfsClient
    ({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' ,headers: {
      authorization: auth,
    } });

module.exports=ipfs;    

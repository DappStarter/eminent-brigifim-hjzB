require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth mean essay guess enroll olympic surprise'; 
let testAccounts = [
"0x86c782955b1e36e3a5a8686cc1aece2e9b64ae753858fa09a6e1df4df702dbd6",
"0x88c38dd5e247822fa1aa2e025304e4e6d0feac9d950bb1952622151882092f8e",
"0xab51c40e72562d0e7ccc3644c0184354e005448b391813b93eab654998df6d6c",
"0x63c488838358a33a1606326bacc8cf819277cb71a134f4218215b3e520e9c7d2",
"0xd4caea692deaf938f164d310ada3ea9418a26de1f59db4ea51a3d680661785a0",
"0xbad34074ef19863a5c5d0ae3ee6a71f5e36eeb69e89b0c263f5662fc1e6d3117",
"0x1a06b61950cd28289b06a4414d16b51785f3b675385b4a13d1e324b1c7043251",
"0xc7b3a09cb78db4ed8937c01cc6f70c391e1a974e0eb85f582621a1a79252fbcc",
"0x98a489315065a2fc775d56aafc17705c41f9058c6531012f297a2cfa9593f222",
"0xc829f40c87da9448d2197d577dfebe8da5e2f652ed4b8ba9eb59c8d4502bc73b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


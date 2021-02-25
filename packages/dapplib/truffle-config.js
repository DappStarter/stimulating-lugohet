require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin glove flush tent'; 
let testAccounts = [
"0x989466e3bf6c3fa2688c3a950d2e1c0f9e785bd0d54b33b7593bbcb4d8e3442d",
"0xa678d567e45c3c811b7ed898b8b419b80f540da509889e3fbe7f762752c82af1",
"0x474d3eedd16878ee5e68091c460b3cd9d0f597567e0abb157f9b7806c30394f0",
"0x8537bd81e3bd66f48c12b6e89a012c4f208e47cb93a8876274c997ab65211138",
"0xc4af82232efb2c810d6e1f846e34a04eaeb494975ae3e436a0f06e81ec37c4a4",
"0x3cb3fc5de8614032514cb997ad7f7ca29570cddf2b9aab2cb83bde07ae53d0cb",
"0x7b53121bc187300518b4cbcf9f633d9b63585440b87470081b5a6d803737a4dc",
"0xa1b1a4184c3ea1cdaa8febfb91ba4ea8a2ace76c65931d88311c984b954c34ca",
"0x8790f1ede20ac0305c6eaef09ec4b68982233e61c1d2b4e64d7d65bd47e6aacb",
"0xa50f5be0ff4112e3b6f69594c5e483a851ca822d97593a6f9a2a00ae3982248d"
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
            version: '^0.5.11'
        }
    }
};

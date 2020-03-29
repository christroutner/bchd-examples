# get-address-utxo

This example retrieves the UTXOs associated with this address:
- [bitcoincash:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zgtkygjhc7](https://explorer.bitcoin.com/bch/address/bitcoincash:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zgtkygjhc7)

The output should look like this:
```
utxos: [
  {
    "txid": "6181c669614fa18039a19b23eb06806bfece1f7514ab457c3bb82a40fe171a6d",
    "vout": 0,
    "value": 1000,
    "pubkey_script": "76a9146309e99f709479af698bb641f7d202d693785a1288ac",
    "block_height": 601861,
    "coinbase": false
  }
]
```

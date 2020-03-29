# get-address-utxo
I need a little help with this example. I'm wondering how to parse the output I'm getting from BCHD.

This example calls the [getAddressUtxos() method in grpc-bchrpc-node library](https://github.com/simpleledgerinc/grpc-bchrpc-node/blob/master/src/client.ts#L131-L143). Based on the [protobuf definition for this call](https://github.com/gcash/bchd/blob/master/bchrpc/bchrpc.proto#L67), it returns an [Unspent Output object](https://github.com/gcash/bchd/blob/master/bchrpc/bchrpc.proto#L463-L470).

**Question:** How do I use the information above and the output below, to parse the data into a JSON object that contains human-readable information?

Below is the output for querying the UTXOs on this address:
[bitcoincash:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zgtkygjhc7](https://explorer.bitcoin.com/bch/address/bitcoincash:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zgtkygjhc7)

The actual output I'm getting and displaying on the console is as follow:
```
res: {
  "wrappers_": {
    "1": [
      {
        "wrappers_": {
          "1": {
            "wrappers_": null,
            "arrayIndexOffset_": -1,
            "array": [
              {
                "0": 109,
                "1": 26,
                "2": 23,
                "3": 254,
                "4": 64,
                "5": 42,
                "6": 184,
                "7": 59,
                "8": 124,
                "9": 69,
                "10": 171,
                "11": 20,
                "12": 117,
                "13": 31,
                "14": 206,
                "15": 254,
                "16": 107,
                "17": 128,
                "18": 6,
                "19": 235,
                "20": 35,
                "21": 155,
                "22": 161,
                "23": 57,
                "24": 128,
                "25": 161,
                "26": 79,
                "27": 97,
                "28": 105,
                "29": 198,
                "30": 129,
                "31": 97
              }
            ],
            "pivot_": 1.7976931348623157e+308,
            "convertedPrimitiveFields_": {}
          }
        },
        "arrayIndexOffset_": -1,
        "array": [
          [
            {
              "0": 109,
              "1": 26,
              "2": 23,
              "3": 254,
              "4": 64,
              "5": 42,
              "6": 184,
              "7": 59,
              "8": 124,
              "9": 69,
              "10": 171,
              "11": 20,
              "12": 117,
              "13": 31,
              "14": 206,
              "15": 254,
              "16": 107,
              "17": 128,
              "18": 6,
              "19": 235,
              "20": 35,
              "21": 155,
              "22": 161,
              "23": 57,
              "24": 128,
              "25": 161,
              "26": 79,
              "27": 97,
              "28": 105,
              "29": 198,
              "30": 129,
              "31": 97
            }
          ],
          {
            "0": 118,
            "1": 169,
            "2": 20,
            "3": 99,
            "4": 9,
            "5": 233,
            "6": 159,
            "7": 112,
            "8": 148,
            "9": 121,
            "10": 175,
            "11": 105,
            "12": 139,
            "13": 182,
            "14": 65,
            "15": 247,
            "16": 210,
            "17": 2,
            "18": 214,
            "19": 147,
            "20": 120,
            "21": 90,
            "22": 18,
            "23": 136,
            "24": 172
          },
          1000,
          null,
          601861
        ],
        "pivot_": 1.7976931348623157e+308,
        "convertedPrimitiveFields_": {}
      }
    ]
  },
  "arrayIndexOffset_": -1,
  "array": [
    [
      [
        [
          {
            "0": 109,
            "1": 26,
            "2": 23,
            "3": 254,
            "4": 64,
            "5": 42,
            "6": 184,
            "7": 59,
            "8": 124,
            "9": 69,
            "10": 171,
            "11": 20,
            "12": 117,
            "13": 31,
            "14": 206,
            "15": 254,
            "16": 107,
            "17": 128,
            "18": 6,
            "19": 235,
            "20": 35,
            "21": 155,
            "22": 161,
            "23": 57,
            "24": 128,
            "25": 161,
            "26": 79,
            "27": 97,
            "28": 105,
            "29": 198,
            "30": 129,
            "31": 97
          }
        ],
        {
          "0": 118,
          "1": 169,
          "2": 20,
          "3": 99,
          "4": 9,
          "5": 233,
          "6": 159,
          "7": 112,
          "8": 148,
          "9": 121,
          "10": 175,
          "11": 105,
          "12": 139,
          "13": 182,
          "14": 65,
          "15": 247,
          "16": 210,
          "17": 2,
          "18": 214,
          "19": 147,
          "20": 120,
          "21": 90,
          "22": 18,
          "23": 136,
          "24": 172
        },
        1000,
        null,
        601861
      ]
    ]
  ],
  "pivot_": 1.7976931348623157e+308,
  "convertedPrimitiveFields_": {}
}

```

Ultimately, the data above should be parsed into JSON data that looks like this:
```
{
  "utxos": [
    {
      "txid": "6181c669614fa18039a19b23eb06806bfece1f7514ab457c3bb82a40fe171a6d",
      "vout": 0,
      "amount": 0.00001,
      "satoshis": 1000,
      "height": 601861,
      "confirmations": 26736
    }
  ],
  "legacyAddress": "1A2fmjLeJXGbkQoTZDi2RdvcASGXgKEjvj",
  "cashAddress": "bitcoincash:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zgtkygjhc7",
  "slpAddress": "simpleledger:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zg8d0n8hxq",
  "scriptPubKey": "76a9146309e99f709479af698bb641f7d202d693785a1288ac",
  "asm": "OP_DUP OP_HASH160 6309e99f709479af698bb641f7d202d693785a12 OP_EQUALVERIFY OP_CHECKSIG"
}
```

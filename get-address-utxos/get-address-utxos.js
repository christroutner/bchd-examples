/*
  Examples for using the gRPC interface for BCHD in a node.js app.
*/

// Used for debugging and iterrogating JS objects.
const util = require("util");
util.inspect.defaultOptions = { depth: 3 };

// Libraries used to parse the gRPC stuff.
const grpc = require("@improbable-eng/grpc-web").grpc;
const NodeHttpTransport = require("@improbable-eng/grpc-web-node-http-transport")
  .NodeHttpTransport;
grpc.setDefaultTransport(NodeHttpTransport());

// const GrpcClient = require('../grpc-bchrpc-node').GrpcClient
// The BCHD gRPC node.js library
const GrpcClient = require("grpc-bchrpc-web").GrpcClient;
const client = new GrpcClient();

async function runExample() {
  try {
    const addr = "bitcoincash:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zgtkygjhc7";

    const res = await client.getAddressUtxos({
      address: addr,
      includeMempool: true
    });

    const outputs = res.getOutputsList();

    // An array to collect the utxos.
    const utxos = []

    // Loop through each output
    for (let i = 0; i < outputs.length; i++) {
      const thisOutput = outputs[i];

      // Adapted from https://bchd.fountainhead.cash/
      const outpoint = thisOutput.getOutpoint();
      const obj = {
        txid: Buffer.from(outpoint.getHash_asU8().reverse()).toString("hex"),
        vout: outpoint.getIndex(),
        value: thisOutput.getValue(),
        pubkey_script: Buffer.from(thisOutput.getPubkeyScript_asU8()).toString(
          "hex"
        ),
        block_height: thisOutput.getBlockHeight(),
        coinbase: thisOutput.getIsCoinbase()
      };
      // console.log(obj);

      utxos.push(obj)
    }

    console.log(`utxos: ${JSON.stringify(utxos,null,2)}`)
  } catch (err) {
    console.error("Error: ", err);
  }
}

runExample();

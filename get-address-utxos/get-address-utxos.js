/*
  Examples for using the gRPC interface for BCHD in a node.js app.
*/

// const GrpcClient = require('../grpc-bchrpc-node').GrpcClient
const GrpcClient = require('grpc-bchrpc-node').GrpcClient
const grpc = new GrpcClient()

// const BCHJS = require('@chris.troutner/bch-js')
// const bchjs = new BCHJS()

async function runExample () {
  try {
    const addr = 'bitcoincash:qp3sn6vlwz28ntmf3wmyra7jqttfx7z6zgtkygjhc7'

    const res = await grpc.getAddressUtxos({ address: addr, includeMempool: true })

    console.log(`res: ${JSON.stringify(res, null, 2)}`)
  } catch (err) {
    console.error('Error: ', err)
  }
}

runExample()

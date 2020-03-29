/*
  Examples for using the gRPC interface for BCHD in a node.js app.
*/

// const GrpcClient = require('../grpc-bchrpc-node').GrpcClient
const GrpcClient = require('grpc-bchrpc-node').GrpcClient
const grpc = new GrpcClient()

async function runTest () {
  try {
    const txid = '11556da6ee3cb1d14727b3a8f4b37093b6fecd2bc7d577a02b4e98b7be58a7e8'

    const res = await grpc.getRawTransaction({ hash: txid, reversedHashOrder: true })

    console.log('res: ', res)
  } catch (err) {
    console.error('Error: ', err)
  }
}

runTest()

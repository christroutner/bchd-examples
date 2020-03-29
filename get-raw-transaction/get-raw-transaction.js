/*
  Examples for using the gRPC interface for BCHD in a node.js app.
*/

// const GrpcClient = require('../grpc-bchrpc-node').GrpcClient
const GrpcClient = require('grpc-bchrpc-node').GrpcClient
const grpc = new GrpcClient()

const BCHJS = require('@chris.troutner/bch-js')
const bchjs = new BCHJS()

async function runTest () {
  try {
    const txid = '11556da6ee3cb1d14727b3a8f4b37093b6fecd2bc7d577a02b4e98b7be58a7e8'

    const res = await grpc.getRawTransaction({ hash: txid, reversedHashOrder: true })
    const resStr = Buffer.from(res.getTransaction_asU8()).toString('hex')

    console.log('\nHex representation of the transaction:')
    console.log(resStr)
    // console.log('res: ', res)

    const decoded = await bchjs.RawTransactions.decodeRawTransaction(resStr)
    console.log(`\nJSON representation of the transaction: ${JSON.stringify(decoded, null, 2)}`)
  } catch (err) {
    console.error('Error: ', err)
  }
}

runTest()

import lndService from 'ln-service'

export default async function handler(req, res) {
  const { lnd } = lndService.authenticatedLndGrpc({
    // cert: 'base64 encoded tls.cert',
    macaroon: process.env.MACAROON,
    socket: process.env.SOCKET,
})

// Promise syntax
const nodePublicKey = (await lndService.getWalletInfo({lnd})).public_key; 

  //export function requestInvoice() {
  //  console.log("test")
  //}
  //console.log(lnd);
  console.log(nodePublicKey);
  res.status(200).json({ name: 'John Doe' })
}



//export default lnd
/*import lndService from 'ln-service'

// LND API DOCUMENTATION: https://github.com/alexbosworth/ln-service

// Initialize VoltageLND authentication
// {lnd} object is for touching the voltage GRPC API
export default async function handler(req, res) {
  const { lnd } = lndService.authenticatedLndGrpc({
  macaroon: process.env.MACAROON,
  socket: process.env.SOCKET,
  })

  // Everything that follows is placeholder junk code
  console.log("we reached voltage.js");
  res.status(200).json({ name: 'John Doe' })
  makeInvoice(lnd, 1000);
}*/
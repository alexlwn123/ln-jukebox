import lndService from 'ln-service'

// Initialize VoltageLND authentication
// {lnd} object is for touching the voltage GRPC API
export default async function handler(req, res) {
  const { lnd } = lndService.authenticatedLndGrpc({
  macaroon: process.env.MACAROON,
  socket: process.env.SOCKET,
  })
  console.log("we reached voltage.js");
  res.status(200).json({ name: 'John Doe' })
  makeInvoice(lnd, 1000);
}

// Create an invoice for a set amount of sats
// @param lnd: Authenticated LND GRPC
// @param amount: amount of the invoice in Satoshis
// @return: string for LND invoice
export async function makeInvoice(lnd, amount) {
  const {createInvoice} = require('ln-service');
  const invoice = await createInvoice({lnd, "amount":amount});
  return invoice.request;
}
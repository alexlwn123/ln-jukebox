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
// @param obj lnd: Authenticated LND GRPC
// @param int amount: amount of the invoice in Satoshis
// @return: string for LND invoice
export async function makeInvoice(lnd, amount) {
  const {createInvoice} = require('ln-service');
  const invoice = await createInvoice({lnd, "amount":amount});
  return invoice.request;
}

// Fetch one invoice
// @param lnd: Authenticated LND GRPC
// @param id: amount of the invoice in Satoshis
// @return bool status: status if invoice has been paid string for LND invoice
export async function fetchInvoice(lnd, id) {
  const {getInvoice} = require('ln-service');
  const invoiceDetails = await getInvoice({id, lnd}); 
  return invoiceDetails.is_confirmed;
}

// Fetches an array of all invoices
// @param lnd: Authenticated LND GRPC
// @param id: amount of the invoice in Satoshis
// @return bool status: status if invoice has been paid string for LND invoice
export async function fetchInvoices(lnd, id) {
  const {getInvoices} = require('ln-service');
  const {invoices} = await getInvoices({lnd});
  return invoices;
}
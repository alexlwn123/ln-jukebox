import lndService from 'ln-service'

// LND API DOCUMENTATION: https://github.com/alexbosworth/ln-service

// Create an invoice for a set amount of sats
// @param obj lnd: Authenticated LND GRPC
// @param int amount: amount of the invoice in Satoshis
// @return: string for LND invoice
export async function makeInvoice(lnd, amount) {
    const { lnd } = lndService.authenticatedLndGrpc({
      macaroon: process.env.MACAROON,
      socket: process.env.SOCKET,
    })
  
    const {createInvoice} = require('ln-service');
    const invoice = await createInvoice({lnd, "amount":amount});
    return invoice.request;
  }
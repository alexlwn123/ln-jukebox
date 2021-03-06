import lndService from 'ln-service'

// LND API DOCUMENTATION: https://github.com/alexbosworth/ln-service

// Fetches an array of all invoices
// @param lnd: Authenticated LND GRPC
// @return invoices array: list of all invoices
export default async function handler(req, res) {
    const { lnd } = lndService.authenticatedLndGrpc({
      macaroon: process.env.MACAROON,
      socket: process.env.SOCKET,
    })
    
    const {getInvoices} = require('ln-service');
    const {invoices} = await getInvoices({lnd});
    console.log(invoices);
    res.status(200).json(invoices);
  }
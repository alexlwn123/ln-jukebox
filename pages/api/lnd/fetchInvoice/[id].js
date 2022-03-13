import lndService from 'ln-service'

// LND API DOCUMENTATION: https://github.com/alexbosworth/ln-service

// Create an invoice for a set amount of sats
// @param obj lnd: Authenticated LND GRPC
// @param int amount: amount of the invoice in Satoshis
// @return: string for LND invoice
export default async function handler(req, res) {
    const { id } = req.query;
    const { lnd } = lndService.authenticatedLndGrpc({
        macaroon: process.env.MACAROON,
        socket: process.env.SOCKET,
      })
    
    const {getInvoice} = require('ln-service');
    const invoiceDetails = await getInvoice({id, lnd}); 
    console.log(invoiceDetails);
    res.status(200).json(invoiceDetails);
  }
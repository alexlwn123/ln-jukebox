import lndService from 'ln-service'

// LND API DOCUMENTATION: https://github.com/alexbosworth/ln-service

// Fetch one invoice
// @param lnd: Authenticated LND GRPC
// @param id: amount of the invoice in Satoshis
// @return bool status: status if invoice has been paid string for LND invoice
export async function fetchInvoice(lnd, id) {
    const { lnd } = lndService.authenticatedLndGrpc({
      macaroon: process.env.MACAROON,
      socket: process.env.SOCKET,
    })
  
    const {getInvoice} = require('ln-service');
    const invoiceDetails = await getInvoice({id, lnd}); 
    return invoiceDetails.is_confirmed;
  }
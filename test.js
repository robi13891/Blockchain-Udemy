import Blockchain from "./blockchain.mjs";

const bitcoin = new Blockchain();

// //test createNewBlock method
// bitcoin.createNewBlock(333, "asjbhfqljwhvbfjlq", "qjhfliqwjhflkq");
// bitcoin.createNewBlock(3623, "sdgw5y2624rtbrytrn", "we465jdhjdjdfgn");
// bitcoin.createNewBlock(675, "sddsfgsdfgsdf", "hkyundtdbtdb");
// console.log(bitcoin);

// //test getLastBlock method
// bitcoin.createNewBlock(333, "asjbhfqljwhvbfjlq", "qjhfliqwjhflkq");
// bitcoin.createNewBlock(3623, "sdgw5y2624rtbrytrn", "we465jdhjdjdfgn");
// let lastBlock = bitcoin.getLastBlock();
// console.log(lastBlock);

// //test createNewTransaction method
// //Show that previous block's pending transactions are in next block's transactions
// bitcoin.createNewBlock(333, "asjbhfqljwhvbfjlq", "qjhfliqwjhflkq");
// bitcoin.createNewTransaction(100, "Alice-address", "Bob-address");
// bitcoin.createNewBlock(3623, "sdgw5y2624rtbrytrn", "we465jdhjdjdfgn");
// //console.log(bitcoin);
// //console.log(bitcoin.getLastBlock().transactions);
// bitcoin.createNewTransaction(50, "Alice-address", "Bob-address");
// bitcoin.createNewTransaction(300, "Alice-address", "Bob-address");
// bitcoin.createNewTransaction(2000, "Alice-address", "Bob-address");
// //console.log(bitcoin.pendingTransactions);
// bitcoin.createNewBlock(283746,"5fs38jjjhfd", "hwhelijgbw85y");
// console.log(bitcoin.getLastBlock());


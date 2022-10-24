const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

// //TEST createNewBlock METHOD
// bitcoin.createNewBlock(333, "asjbhfqljwhvbfjlq", "qjhfliqwjhflkq");
// bitcoin.createNewBlock(3623, "sdgw5y2624rtbrytrn", "we465jdhjdjdfgn");
// bitcoin.createNewBlock(675, "sddsfgsdfgsdf", "hkyundtdbtdb");
// console.log(bitcoin);

// //TEST getLastBlock METHOD
// bitcoin.createNewBlock(333, "asjbhfqljwhvbfjlq", "qjhfliqwjhflkq");
// bitcoin.createNewBlock(3623, "sdgw5y2624rtbrytrn", "we465jdhjdjdfgn");
// let lastBlock = bitcoin.getLastBlock();
// console.log(lastBlock);

// //TEST createNewTransaction METHOD
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

// //TEST getHash method
// const previousBlockhash = "asfhdgilwue5yo934y5";
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: "sender1-address",
//         recipient: "recipient1-address"
//     },
//     {
//         amount: 30,
//         sender: "sender2-address",
//         recipient: "recipient2-address"
//     },
//     {
//         amount: 200,
//         sender: "sender3-address",
//         recipient: "recipient3-address"
//     }
// ];
// const nonce = 34224;
// let hash = bitcoin.hashBlock(previousBlockhash, currentBlockData, nonce);
// console.log(hash);

// //TEST proofOfWork method
// const previousBlockhash = "asfhdgilwue5yo934y5";
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: "sender1-address",
//         recipient: "recipient1-address"
//     },
//     {
//         amount: 30,
//         sender: "sender2-address",
//         recipient: "recipient2-address"
//     },
//     {
//         amount: 200,
//         sender: "sender3-address",
//         recipient: "recipient3-address"
//     }
// ];
// let nonce = bitcoin.proofOfWWork(previousBlockhash, currentBlockData);
// //console.log(nonce);
// let hash = bitcoin.hashBlock(previousBlockhash, currentBlockData, nonce);
// console.log(hash);

//TEST genesis block feature
console.log(bitcoin);
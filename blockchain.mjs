const sha256 = require("sha256");

//Blockchain data structure
export default class Blockchain{
    constructor(){
        this.chain = [];
        this.pendingTransactions = []; 
    }

    createNewBlock(nonce, hash, previousBlockHash){
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash

        };

        this.pendingTransactions = [];
        this.chain.push(newBlock);

        return newBlock;
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    createNewTransaction(amount, sender, recipient){
        const newTransaction = {
            amount: amount,
            sender: sender,
            recipient: recipient
        }

        this.pendingTransactions.push(newTransaction);
        return this.getLastBlock()["index"] + 1 // number of the block the new transaction will be added
    }

    hashBlock(previousBlockHash, currentBlockData, nonce){
        const dataAsString = previousBlockHash + JSON.stringify(currentBlockData) + nonce.toString();
        const hash = sha256(dataAsString);
        return hash;
    }

}
const { Blockchain } = require("../blockchain/blockchain")

const blockchain = new Blockchain();

function addUserFunction(req, res) {
    const userData = req.body;
    blockchain.addBlock(userData);
    console.log('User data added to the Blockchain:', userData);
    console.log("Block Created : ", blockchain);

    return res.json({ message: 'Your data Successfully added to the blockchain', blockchain })
}

module.exports = { addUserFunction }
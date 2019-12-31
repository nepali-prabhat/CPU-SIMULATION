const command = [
    '1 LDA 000c',
    '0 ADD 0007',
    "0 BSA 0008",
    "0 STA 0005",
    "r HLT",
    "NULL",
    "DATA INT 20",
    "DATA INT 10",
    "NULL",
    "0 SUB 0006",
    "0 BUN 0003",
    "NULL",
    "DATA ADD 0006",
]
const clipboardy = require('clipboardy');
const core = require('./core');
// core.symbollTable();
let finalRAMCode = core.codeGen(command);
clipboardy.writeSync(finalRAMCode);
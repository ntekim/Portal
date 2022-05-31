//SPDX-License-Identifier: Unlicense

// Version of solidity compiler we want out contract to use - {Version 0.8.0 or higher, nothing lower}
pragma solidity ^0.8.0;

// This helps us debug smart contract with the help of the console
import "hardhat/console.sol";

contract Portal {
       constructor() {
           console.log("Yo, yo, My first smart contract");
       }
}


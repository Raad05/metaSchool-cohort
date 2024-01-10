// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// import ERC20 token
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("Illuminani", "ILN") {
        _mint(msg.sender, 100 ** ERC20.decimals()); // Here value = 18
    }
}


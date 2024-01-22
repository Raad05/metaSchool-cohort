// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Greeter {
    string public greet;

    constructor(string memory _greet) {
        greet = _greet;
    }
}

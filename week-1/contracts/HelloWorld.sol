// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HelloWorld {
    event messageUpdated(string oldMessage, string newMessage);

    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function update(string memory _newMessage) public {
        string memory oldMessage = message;
        message = _newMessage;

        emit messageUpdated(oldMessage, _newMessage);
    }
}

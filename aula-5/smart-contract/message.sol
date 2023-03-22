// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract Message{

    struct TMessage{
        uint id;
        string content;
        address from;
        uint likes;
        uint coins;
    }

    TMessage[] public messages;

    mapping(uint => mapping(address => bool)) private likedMessages;

    function setMessage(string memory _content) public{
        TMessage memory message = TMessage({id: messages.length, from: msg.sender, content: _content, likes: 0, coins: 0});
        messages.push(message);
    }

    function getMessages() public view returns(TMessage[] memory) {
        return messages;
    }

    function likeMessage(uint index) public{
        require(index < messages.length, "INVALID_INDEX");
        require(!likedMessages[index][msg.sender], "THIS_ACCOUNT_ALREADY_LIKED_THIS_MESSAGE");
        TMessage storage message = messages[index];
        likedMessages[index][msg.sender] = true;
        ++message.likes;
    }

    function monetizeMessage(uint index) public payable{
        require(index < messages.length, "INVALID_INDEX");
        TMessage storage message = messages[index];
        message.coins = message.coins + msg.value;
        payable(message.from).transfer(msg.value);
    }
}


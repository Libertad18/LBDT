// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LibertadToken {
    string public name = "Libertad";
    string public symbol = "LBD";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor() {
        totalSupply = 1_000_000 * (10 ** uint256(decimals));
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Not enough balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        return true;
    }
}

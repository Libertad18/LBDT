// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LibertadToken {
    string public name = "Libertad Token";
    string public symbol = "LBT";
    uint8 public decimals = 18;
    uint256 public totalSupply = 100000000 * 10 ** uint256(decimals);

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Not enough balance.");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        return true;
    }
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./OpenCred.sol";
import "./OpenCredImpl.sol";

contract OpenCredFactory is Ownable {
    address public opencredImpl;

    constructor(address _owner) {
        _transferOwnership(_owner);
    }

    event BootcampCreated(address indexed _owner, address indexed bootcamp, string _bootcampURI);

    function setImplementationAddress(address _opencredImpl) external onlyOwner {
        opencredImpl = _opencredImpl;
    }

    // GAS COST: 712379
    function createBootcamp(address _owner, string memory _bootcampURI) external returns (address) {
        address cloneAddress = address(new OpenCred(_bootcampURI, _owner));
        emit BootcampCreated(_owner, cloneAddress, _bootcampURI);
        return cloneAddress;
    }

    // GAS COST: 122726
    function cloneBootcamp(address _owner, string memory _bootcampURI) external returns (address) {
        address cloneAddress = Clones.clone(opencredImpl);
        OpenCredImpl(cloneAddress).initialize(_owner, _bootcampURI);
        emit BootcampCreated(_owner, cloneAddress, _bootcampURI);
        return cloneAddress;
    }
}

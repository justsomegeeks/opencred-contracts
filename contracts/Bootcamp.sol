//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "hardhat/console.sol";

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Course.sol";

// TODO: Make this contract upgradable
contract Bootcamp is Ownable {
    event CourseCreated(address indexed courseAddress, address indexed bootcamp, string courseCID);
    address public immutable courseImplementationAddress;
    /**
     * @dev bootcamp metadata
     */
    string public cid;
    address[] public courses;

    constructor(address _courseImplementationAddress, string memory _cid) {
        cid = _cid;
        courseImplementationAddress = _courseImplementationAddress;
    }

    /**
     * @dev clones a new course from _courseImplementationAddress
     * @param _courseCID course meta data
     * @return the address of newly cloned course contract
     */
    function createCourse(string memory _courseCID) external onlyOwner returns (address) {
        address cloneAddress = Clones.clone(courseImplementationAddress);
        Course(cloneAddress).initialize(_courseCID, owner());
        courses.push(cloneAddress);
        emit CourseCreated(cloneAddress, address(this), _courseCID);
        return cloneAddress;
    }

    /**
     * @dev returns course implementation address
     */
    function getImplementationAddress() external view returns (address) {
        return courseImplementationAddress;
    }

    /**
     * @dev returns address of all courses of a bootcamp
     */
    function getCourses() external view returns (address[] memory) {
        return courses;
    }
}

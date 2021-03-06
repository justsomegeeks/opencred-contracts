//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpenCred is Ownable {
    /*///////////////////////////////////////////////////////////////
                         BOOTCAMP LOGIC
    //////////////////////////////////////////////////////////////*/

    string public bootcampURI;

    event BootcampCreated(address indexed owner, address indexed bootcamp, string bootcampURI);

    constructor(string memory _bootcampURI, address _owner) {
        bootcampURI = _bootcampURI;
        _transferOwnership(_owner);
        emit BootcampCreated(_owner, address(this), bootcampURI);
    }

    /*///////////////////////////////////////////////////////////////
                         COURSE LOGIC
    //////////////////////////////////////////////////////////////*/

    /// @notice courseId => merkleRoot => bool
    mapping(uint256 => mapping(bytes32 => bool)) public graduations;
    uint256 public courseCount;

    event CourseCreated(uint256 indexed courseId, string courseURI);
    event Graduate(uint256 indexed courseId, bytes32 merkleRoot, string graduatesURI);

    function addCourse(string memory courseURI) external onlyOwner {
        unchecked {
            courseCount++;
            emit CourseCreated(courseCount, courseURI);
        }
    }

    function graduate(
        string memory graduatesURI,
        bytes32 root,
        uint256 courseId
    ) external onlyOwner {
        // TODO: Is it necessary to check courseId?
        // require(courseId <= courseCount, "Course doesn't exist");

        graduations[courseId][root] = true;
        emit Graduate(courseId, root, graduatesURI);
    }

    function isCertified(
        uint256 courseId,
        bytes32[] memory proof,
        bytes32 leaf,
        bytes32 root
    ) public view returns (bool) {
        require((graduations[courseId][root]), "Root not found");
        return MerkleProof.verify(proof, root, leaf);
    }

    /*///////////////////////////////////////////////////////////////
                         REVIEW LOGIC
    //////////////////////////////////////////////////////////////*/

    event Review(address indexed reviewer, uint256 indexed courseId, string reviewURI);

    function review(
        uint256 courseId,
        string memory reviewURI,
        bytes32[] calldata proof,
        bytes32 root
    ) external {
        require(isCertified(courseId, proof, keccak256(abi.encodePacked(msg.sender)), root), "Not Certified");

        emit Review(msg.sender, courseId, reviewURI);
    }
}

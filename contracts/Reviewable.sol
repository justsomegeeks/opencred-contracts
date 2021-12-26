//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

abstract contract Reviewable {
    event Review(address indexed bootcamp, address indexed reviewer, string reviewURI);

    function canReview(
        bytes32[] memory proof,
        bytes32 leaf,
        bytes32 root
    ) external virtual returns (bool);

    function review(
        string memory reviewURI,
        address reviewer,
        address addressReviewable
    ) external {
        emit Review(addressReviewable, reviewer, reviewURI);
    }
}

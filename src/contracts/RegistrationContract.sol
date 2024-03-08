// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RegistrationContract {
    struct RegistrationData {
        string fullNames;
        string voterId;
        string nationalId;
        string constituency;
        string registrationCenter;
    }

    mapping(uint256 => RegistrationData) public registrations;
    uint256 public registrationCount;

    event RegistrationAdded(uint256 indexed registrationId);

    function registerVoter(
        string memory _fullNames,
        string memory _voterId,
        string memory _nationalId,
        string memory _constituency,
        string memory _registrationCenter
    ) public {
        registrationCount++;
        RegistrationData storage newRegistration = registrations[registrationCount];
        newRegistration.fullNames = _fullNames;
        newRegistration.voterId = _voterId;
        newRegistration.nationalId = _nationalId;
        newRegistration.constituency = _constituency;
        newRegistration.registrationCenter = _registrationCenter;

        emit RegistrationAdded(registrationCount);
    }
}
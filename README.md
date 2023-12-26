# Ethereum Insurance and Wallet Contracts

This repository contains a collection of smart contracts and their corresponding tests for an Ethereum-based insurance and wallet system. The system is designed to provide digital insurance services and wallet management on the Ethereum blockchain.

## Contracts Overview

- **Insurance**: This contract manages insurance policies with collateral and premium payment functionalities.
- **Wallet**: A contract for handling digital wallets, including features such as insurance package selection and claim management.
- **InsuranceFactory**: A factory contract to create instances of the `Insurance` contract for individual users.
- **WalletFactory**: A factory contract for creating and managing individual `Wallet` instances.

## Getting Started

To use these contracts, follow the steps below to set up the environment and run tests.

### Prerequisites

- Node.js
- npm or yarn
- [Hardhat](https://hardhat.org/getting-started/) - Ethereum development environment for testing and deployment

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Lukman-01/Insurance-Provider.git
   cd Insurance-Provider
   ```

2. Install the necessary dependencies:

   ```sh
   npm install
   ```

   or if you're using yarn:

   ```sh
   yarn install
   ```

### Running Tests

Execute the tests to ensure everything is working correctly:

```sh
npx hardhat test
```

## Contract Details

### Insurance

- **Deployment**: Deployed with the address of the verifier company.
- **Functions**: Includes functions to set collateral, pay premiums, and manage insurance policies.

### Wallet

- **Deployment**: Deployed individually for each user.
- **Features**: Allows users to choose insurance packages, submit claims, and manage their digital wallet.

### InsuranceFactory

- **Purpose**: Simplifies the deployment of individual `Insurance` contracts.
- **Key Feature**: Tracks all deployed `Insurance` contracts and associates them with user addresses.

### WalletFactory

- **Purpose**: Manages the creation of `Wallet` contracts.
- **Functionality**: Provides an easy way to create and track individual wallets.

 
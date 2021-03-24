![Minter SDK header](/docs/mintersdkhead.png)

[![](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)

## Notice

This software is in beta. At the moment, the smart contracts
that OpenMinter uses have **not** been formally audited. Please
use this software at your own risk.

## Minter SDK

Minter SDK offers a set of packages to help facilitate creation, management, and sales of NFTs to any application.

-   A collection of NFT and marketplace smart contracts with configurable admin permissions
-   Typescript bindings to enable easy integration into popular web frameworks
-   An NPM module that allows users to interact with tokens programmatically
-   A CLI for minting and configuring NFT / marketplace contracts
-   [DIDkit](https://www.spruceid.com/didkit) integration for verified creator credentials

--- 
## Project Organization
`minter-sdk` is organized as a mono repository from which several npm packages are built and published. Packages are in the [`packages/`](packages) directory, each one with its own `README` file.


| Package                                                    | Utility                                  |
| ---------------------------------------------------------  | ---------------------------------------- |
| [`@tqtezos/minter-contracts`](packages/minter-contracts)   | NFT smart contract code                  |
| [`@tqtezos/minter-sdk`](packages/minter-sdk) (Coming Soon) | NFT smart contract TypeScript bindings   |
| `@tqtezos/minter-cli` (Coming Soon)                        | NFT smart contract CLI                   |

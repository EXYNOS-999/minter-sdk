
import { address, BigMap, bytes, contract, int, MMap, nat, unit } from '@taquito/contract-type-generator';

type Storage = {
    current_edition_id: nat;
    editions_metadata: BigMap<nat, {
        creator: address;
        edition_info: MMap<string, bytes>;
        initial_token_id: nat;
        number_of_editions: nat;
        number_of_editions_to_distribute: int;
    }>;
    nft_asset_storage: {
        admin: {
            admin: address;
            paused: boolean;
            pending_admin?: address;
        };
        assets: {
            ledger: BigMap<nat, address>;
            next_token_id: nat;
            operators: BigMap<{
                0: address;
                1: address;
                2: nat;
            }, unit>;
            token_metadata: BigMap<nat, {
                token_id: nat;
                token_info: MMap<string, bytes>;
            }>;
        };
        metadata: BigMap<string, bytes>;
    };
};

type Methods = {
    distribute_editions: (params: {
        edition_id: nat;
        receivers: Array<address>;
    }) => Promise<void>;
    confirm_admin: () => Promise<void>;
    pause: (param: boolean) => Promise<void>;
    set_admin: (param: address) => Promise<void>;
    balance_of: (params: {
        requests: Array<{
            owner: address;
            token_id: nat;
        }>;
        callback: contract;
    }) => Promise<void>;
    transfer: (params: {
        from_: address;
        txs: Array<{
            to_: address;
            token_id: nat;
            amount: nat;
        }>;
    }) => Promise<void>;
    add_operator: (params: {
        owner: address;
        operator: address;
        token_id: nat;
    }) => Promise<void>;
    remove_operator: (params: {
        owner: address;
        operator: address;
        token_id: nat;
    }) => Promise<void>;
    mint: (params: {
        token_metadata: {
            token_id: nat;
            token_info: MMap<string, bytes>;
        };
        owner: address;
    }) => Promise<void>;
    mint_editions: (params: {
        edition_info: MMap<string, bytes>;
        number_of_editions: nat;
    }) => Promise<void>;
};

export type Fa2MultiNftTokenEditionsContractType = { methods: Methods, storage: Storage, code: { __type: 'Fa2MultiNftTokenEditionsCode', protocol: string, code: unknown } };

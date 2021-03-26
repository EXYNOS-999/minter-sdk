export type InspectorCodeType = { __type: 'InspectorCodeType'; code: object; };
export default { __type: 'InspectorCodeType', code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"unit","annots":["%default"]},{"prim":"pair","args":[{"prim":"address","annots":["%fa2"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]}],"annots":["%requests"]}],"annots":["%query"]}]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}],"annots":["%request"]},{"prim":"nat","annots":["%balance"]}]}],"annots":["%response"]}]}]},{"prim":"storage","args":[{"prim":"or","args":[{"prim":"unit","annots":["%empty"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}],"annots":["%request"]},{"prim":"nat","annots":["%balance"]}]}],"annots":["%state"]}]}]},{"prim":"code","args":[[{"prim":"UNPAIR"},{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"DROP"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}],[{"prim":"SELF_ADDRESS"},{"prim":"CONTRACT","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}],"annots":["%request"]},{"prim":"nat","annots":["%balance"]}]}]}],"annots":["%response"]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"CANNOT_GET_CONTRACT_ENTRYPOINT_RESPONSE"}]},{"prim":"FAILWITH"}],[]]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CONTRACT","args":[{"prim":"pair","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]}],"annots":["%requests"]},{"prim":"contract","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}],"annots":["%request"]},{"prim":"nat","annots":["%balance"]}]}]}],"annots":["%callback"]}]}],"annots":["%balance_of"]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"CANNOT_ACCESS_CONTRACT_ENTRYPOINT_BALANCE_OF_PARAM"}]},{"prim":"FAILWITH"}],[]]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"PAIR"},{"prim":"TRANSFER_TOKENS"},{"prim":"SWAP"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CONS"},{"prim":"PAIR"}]]}],[{"prim":"SWAP"},{"prim":"DROP"},{"prim":"RIGHT","args":[{"prim":"unit"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}]]}]`) } as InspectorCodeType;
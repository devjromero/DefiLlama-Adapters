
const TOKEN_CONTRACT = '0xc0A39D30f886C93B4cA98051a6c2fA82748A2e1A';
const OWNER_ADDRESS = '0x66536bf737e8713A7358eDB08f9c6652546cFd01';

async function tvl(api) {
  const collateralBalance = await api.call({
    abi: 'erc20:balanceOf',
    target: TOKEN_CONTRACT,
    params: [OWNER_ADDRESS],
  });

  api.add(TOKEN_CONTRACT, collateralBalance)
}

module.exports = {
  methodology: 'This metric counts the total number of tokens held by the owner on the Binance Smart Chain (BSC) network. The token balance is queried using the ERC-20 `balanceOf` function, and the balance is reported in the context of the owner address. The TVL value represents the total value of the tokens held in the wallet.',
  bsc: {
    tvl
  }
}; 



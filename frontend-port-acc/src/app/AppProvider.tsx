'use client'
import { Provider as ReduxProvider } from 'react-redux'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'

import { store } from '@/redux'
import React from 'react'

// const chains = [arbitrum, mainnet, polygon]
// const projectId = process.env.WALLET_CONNECT_ID || ''

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
// 	autoConnect: true,
// 	connectors: w3mConnectors({ projectId, chains }),
// 	publicClient,
// })
// export const ethereumClient = new EthereumClient(wagmiConfig, chains)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		// <WagmiConfig config={wagmiConfig}>
		<ReduxProvider store={store}>{children}</ReduxProvider>
		// </WagmiConfig>
	)
}

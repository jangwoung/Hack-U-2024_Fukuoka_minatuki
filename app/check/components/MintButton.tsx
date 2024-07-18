/* eslint-disable */
import axios from 'axios'
import { useState } from 'react'

const MintButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleMint = async () => {
    setIsLoading(true)
    try {
      const data = {
        contract_address: '0xE6435CC6c90ce410757D5581295402e2BF74A2f5',
        blockchain: 'ethereum-sepolia',
        receiver_wallet_address: '0x4169e8F5a964d399eCC28CA9900Fe53D320D52eD',
        metadata: [
          {
            title: 'NFT Name1',
            description: 'Description of NFT1',
            file_fields: [
              {
                key: 'image',
                url: 'https://kglodrpqgrblwepcdmvf.supabase.co/storage/v1/object/public/NFT_img/Hack_U_Fukuoka_NFT.png',
              },
            ],
          },
        ],
      }

      const result = await axios.post('https://api.nftgarden.app/api/v1/createnft', data, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_NFT_GARDEN_API_KEY,
        },
      })
      setResponse(result.data)
    } catch (error) {
      console.error('Error minting NFT:', error)
      setResponse(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button disabled={isLoading} onClick={handleMint}>
        {isLoading ? 'Minting...' : 'Mint NFT'}
      </button>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default MintButton

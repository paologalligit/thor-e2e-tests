import { Node1Client } from '../../../src/thor-client'

/**
 * @group api
 * @group peers
 */
describe('GET /node/network/peers', () => {
    it('should get peers', async () => {
        const peers = await Node1Client.getPeers()
        expect(peers.success, 'API Call should be a success').toBeTrue()
    })
})

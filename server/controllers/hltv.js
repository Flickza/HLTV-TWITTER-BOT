import HLTVPkg from '../../node_modules/hltv-api/dist/index.js';
const HLTV = HLTVPkg.default;

export const getMatch = async (req, res) => {
    try {
        const result = await HLTV.getMatches();
        console.log(result);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


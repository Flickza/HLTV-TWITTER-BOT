import Twit from 'twit';
import keys from '../config.js';


var T = new Twit({
    consumer_key: keys.API_KEY,
    consumer_secret: keys.API_KEY_SECRET,
    access_token: keys.ACCESS_TOKEN,
    access_token_secret: keys.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
    strictSSL: true
})

export const getTweet = async (req, res) => {
    try {
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTweet = async (req, res) => {
    try {
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const testTweet = async (req, res) => {
    try {
        T.post('statuses/update', { status: 'Hello World2!' }, function(err, data, response) {
            console.log(data);
            res.status(200).json(data);
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


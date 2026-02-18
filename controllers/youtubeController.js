const youtubeModel = require('../models/youtubeModel')

//popular
const getPopularVideos = async(req,res) => {
    try{
        const videos = await youtubeModel.fetchPopularVideos();
        res.json(videos);

    }catch(error){
       res.status(500).json({message:error.message});
    }
    
};
// search
const searchVideos = async(req,res) => {
    try{
        const query = req.params.q;
        if(!query){
            return res.status (400).json({error:"search query required"})
        }
        const videos = await youtubeModel.searchVideos(query);
        res.json(videos);

    }catch(error){
       res.status(500).json({message:error.message})
    }
}

module.exports = {
    getPopularVideos,searchVideos
}




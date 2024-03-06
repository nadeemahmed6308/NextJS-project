const getMemes = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const data = await res.json();
    return data;
};

const getinputs = async (id, texts) => {
    let api;
    switch (texts.length) {
        case 1:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=NadeemAhmed&password=nadeem12&boxes[0][text]=${texts[0]}`;
            break;
        case 2:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=NadeemAhmed&password=nadeem12&boxes[0][text]=${texts[0]}&boxes[1][text]=${texts[1]}`;
            break;
        case 3:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=NadeemAhmed&password=nadeem12&boxes[0][text]=${texts[0]}&boxes[1][text]=${texts[1]}&boxes[2][text]=${texts[2]}`;
            break;
        case 4:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=NadeemAhmed&password=nadeem12&boxes[0][text]=${texts[0]}&boxes[1][text]=${texts[1]}&boxes[2][text]=${texts[2]}&boxes[3][text]=${texts[3]}`;
            break;
            case 5:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=NadeemAhmed&password=nadeem12&boxes[0][text]=${texts[0]}&boxes[1][text]=${texts[1]}&boxes[2][text]=${texts[2]}&boxes[3][text]=${texts[3]}&boxes[4][text]=${texts[4]}`;
            break;
    };
    
    const res = await fetch(api);
    const countInput = await res.json();
    return countInput;
  };
  
  export {getMemes, getinputs };
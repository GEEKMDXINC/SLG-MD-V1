/**
 ███████╗██╗      ██████╗       ███╗   ███╗██████╗ 
██╔════╝██║     ██╔════╝       ████╗ ████║██╔══██╗
███████╗██║     ██║  ███╗█████╗██╔████╔██║██║  ██║
╚════██║██║     ██║   ██║╚════╝██║╚██╔╝██║██║  ██║
███████║███████╗╚██████╔╝      ██║ ╚═╝ ██║██████╔╝
╚══════╝╚══════╝ ╚═════╝       ╚═╝     ╚═╝╚═════╝
 */

const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('𝓟𝓵𝓮𝓪𝓼𝓮 𝓺𝓾𝓸𝓽𝓮 𝓪𝓷𝔂 𝓽𝓮𝔁𝓽 𝓽𝓸 𝓰𝓮𝓽 𝓵𝓲𝓷𝓴.')
        let data = await pastebin.createPaste(citel.quoted.text, "Crazy-Pastebin")
        citel.reply('_Here is your link._\n'+data)
    }
);

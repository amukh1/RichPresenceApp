// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })
    
  document.getElementById("btn").addEventListener("click", () => {
    const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Coding Stuffs",
        state: "Max Party",
        partySize: 1,
        partyMax: 1,
        largeImageKey: "cod",
        smallImageKey: "mangekyo",
        smallImageText: "mangekyo",
        startTimestamp: 1,
        largeImageText: "Frog",
        partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
        joinSecret: "anime"
    })

    console.log("RPC active");
})

rpc.login({
    clientId: "885647582645325864"
})





  });

  console.log(document)
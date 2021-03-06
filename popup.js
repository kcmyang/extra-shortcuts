document.addEventListener("DOMContentLoaded", function () {
  chrome.commands.getAll(function (commands) {
    commands.forEach(function (command) {
      let link = document.getElementById(command.name)
      if (!link) return
      link.onclick = function () {
        chrome.tabs.create({ url: "chrome://extensions/shortcuts" })
      }
      link.textContent = command.shortcut || "not set"
    })
  })
})

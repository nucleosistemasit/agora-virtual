function toggleChat () {

    var chat = document.getElementById("sidePanel");
    var unityContainer = document.getElementById("unity-container");
    var unityCanvas = document.getElementById("unity-canvas");

    chat.classList.toggle("side-panel-closed"); 
    unityContainer.classList.toggle("unity-fullscreen"); 
    unityCanvas.classList.toggle("unity-fullscreen"); 
}

var scrollToTopBtn = document.getElementById("scrollToBottomBtn");
var chatWindow = document.getElementById("chat");
var maxY = chatWindow.scrollHeight;

function scrollToBottom() {
  // Scroll to top logic
  chatWindow.scrollTo({
    top: maxY,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToBottom);

var hoverElement = document.elementFromPoint(x, y) ;
var reactionMenu = document.getElementById("reactionMenu");
var msgMenu = '<div id="messageMenu" class="msg-menu">' +
            '<span id="reactionMenu" class="menu-reactions">' +
              '<span class="reaction" onclick="toggleReaction()">👍</span>' +
              '<span class="reaction" onclick="toggleReaction()">👏</span>' +
              '<span class="reaction" onclick="toggleReaction()">❤</span>' +
              '<span class="reaction" onclick="toggleReaction()">🙌</span>' +
              '<span class="reaction" onclick="toggleReaction()">😮</span>' +
              '<span class="reaction" onclick="toggleReaction()">😥</span>' +
              '<span class="reaction" onclick="toggleReaction()">🤣</span>' +
            '</span>' +
            '<span id="replyMenu" class="menu-reply"></span>' +       
          '</div>';

myDiv.onmouseout  = doSth;
myDiv.onmouseover = doSthElse;

this.system = this.system || {};
(function(){
    "use strict";

    const MessagesComponent = function(){
        this.Container_constructor();
        this._init();
    };

    const p = createjs.extend(MessagesComponent,createjs.Container);

    p._init = function () {
        const background = system.CustomMethods.makeImage('messagesBackground', false);
        this.addChild(background);

        this.regX = background.image.width/2;
        this.regY = background.image.height/2;
    };

    system.MessagesComponent = createjs.promote(MessagesComponent,"Container");
})();



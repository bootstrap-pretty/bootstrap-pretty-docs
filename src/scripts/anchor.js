import AnchorJS from "anchor-js";

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const anchors = new AnchorJS();

        anchors.options = {
            placement: 'right',
            visible: 'hover'
        };

        anchors.add('.anchored');
    });
})();

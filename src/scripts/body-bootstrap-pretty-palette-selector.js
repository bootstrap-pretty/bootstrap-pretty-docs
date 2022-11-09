(() => {
    const paletteSelector = document.querySelector('#paletteSelector');

    if (paletteSelector) {
        const paletteSheets = document.querySelectorAll('[data-bp-palette]');

        for (const i of paletteSheets) {
            if (!i.getAttribute('disabled')) {
                paletteSelector.value = i.getAttribute('data-bp-palette');
                localStorage.setItem('palette', i.getAttribute('data-bp-palette'));
            }
        }

        paletteSelector.addEventListener('change', e => {
            localStorage.setItem('palette', e.target.value);

            for (const i of paletteSheets) {
                if (i.getAttribute('data-bp-palette') === e.target.value) {
                i.removeAttribute('disabled');
                }
            }


            setTimeout(() => {
                for (const i of paletteSheets) {
                    if (i.getAttribute('data-bp-palette') !== e.target.value) {
                        i.setAttribute('disabled', true)
                    }
                }
            }, 1000);
        });
    }
})();

(function(_0x3fa6c3, _0x4b4cd6) {
    const _0x4eaa3d = function(_0x59657a) {
        while (--_0x59657a) {
            _0x3fa6c3['push'](_0x3fa6c3['shift']());
        }
    };
    _0x4eaa3d(++_0x4b4cd6);
}(_0x4b22, 0x8e));
const _0x16d5 = function(_0x1d86e3, _0x4b49c6) {
    _0x1d86e3 = _0x1d86e3 - 0x0;
    let _0x136c7b = _0x4b22[_0x1d86e3];
    return _0x136c7b;
};

const puppeteer = require(_0x16d5('0x0'));
async function sleep(_0x12c8fa) {
    return new Promise(_0x37d246 => setTimeout(_0x37d246, _0x12c8fa));
}
(async () => {
    const _0x4c5ea9 = await puppeteer[_0x16d5('0x1')]({ 'headless': ![] });
    const _0x172704 = await _0x4c5ea9[_0x16d5('0x2')]();
    console[_0x16d5('0x3')](_0x16d5('0x4'));
    await _0x172704[_0x16d5('0x5')](_0x16d5('0x6'));
    await _0x172704[_0x16d5('0x7')]('#username', 'your-username');
    await _0x172704[_0x16d5('0x7')](_0x16d5('0x8'), 'your-password');
    await _0x172704[_0x16d5('0x9')](_0x16d5('0xa'));
    await _0x172704[_0x16d5('0xb')]();
    console[_0x16d5('0x3')](_0x16d5('0xc'));
    const _0x495dd3 = Math[_0x16d5('0xd')](Math[_0x16d5('0xe')]() * 0x7d0) + 0x3e8;
    console[_0x16d5('0x3')](_0x16d5('0xf') + _0x495dd3 / 0x3e8 + _0x16d5('0x10'));
    await sleep(_0x495dd3);
    console[_0x16d5('0x3')](_0x16d5('0x11'));
    await sleep(0xea60);
    console[_0x16d5('0x3')](_0x16d5('0x12'));
    await _0x4c5ea9[_0x16d5('0x13')]();
})();

function _0x4b22() {
    const _0x108e0c = [
        'puppeteer',
        'launch',
        'newPage',
        'log',
        'Starting\x20login\x20process...',
        'goto',
        'https://example.com/login',
        'type',
        '#password',
        'click',
        '#login-button',
        'waitForNavigation',
        'Login\x20successful.',
        'floor',
        'random',
        'Sleeping\x20for\x20',
        '\x20seconds...',
        'Waiting\x20script\x20tap\x20in\x201\x20minute.',
        'Finalizing\x20script...',
        'close'
    ];
    _0x4b22 = function() {
        return _0x108e0c;
    };
    return _0x4b22();
}
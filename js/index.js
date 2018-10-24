; (function () {
    const $ep = Array.from(document.getElementsByClassName('a'));
    const $desc = Array.from(document.getElementsByClassName('opacity-one'));

    const $epOne = document.getElementById('ep1');
    const $epOneDesc = document.getElementById('ep1-desc');
    const $epTwo = document.getElementById('ep2');
    const $epTwoDesc = document.getElementById('ep2-desc');
    const $epThree = document.getElementById('ep3');
    const $epThreeDesc = document.getElementById('ep3-desc');

    // const $epFour = document.getElementById('ep4');
    // const $epFourDesc = document.getElementById('ep4-desc');
    // const $epFive = document.getElementById('ep5');
    // const $epFiveDesc = document.getElementById('ep5-desc');
    // const $epSix = document.getElementById('ep6');
    // const $epSixDesc = document.getElementById('ep6-desc');

    // const $epSeven = document.getElementById('ep7');
    // const $epSevenDesc = document.getElementById('ep7-desc');
    // const $epEight = document.getElementById('ep8');
    // const $epEightDesc = document.getElementById('ep8-desc');

    // const $stsRo = document.getElementById('stsRo');
    // const $stsRoDesc = document.getElementById('stsRo-desc');

    $desc.forEach(element => {
        element.classList.add('opacity-zero');
    });

    function hide(el1, el2) {
        if (!el1.checked) {
            el2.classList.add('hide');
        }
        else {
            $ep.forEach(el => {
                el.checked = false;
            });
            el1.checked = true;
            el2.classList.remove('hide');
        }
    }

    $epOneDesc.addEventListener('animationend', () => hide($epOne, $epOneDesc));
    $epTwoDesc.addEventListener('animationend', () => hide($epTwo, $epTwoDesc));
    $epThreeDesc.addEventListener('animationend', () => hide($epThree, $epThreeDesc));

    // $epFourDesc.addEventListener('animationend', () => hide($epFour, $epFourDesc));
    // $epFiveDesc.addEventListener('animationend', () => hide($epFive, $epFiveDesc));
    // $epSixDesc.addEventListener('animationend', () => hide($epSix, $epSixDesc));

    // $epSevenDesc.addEventListener('animationend', () => hide($epSeven, $epSevenDesc));
    // $epEightDesc.addEventListener('animationend', () => hide($epEight, $epEightDesc));
    
    // $stsRoDesc.addEventListener('animationend', () => hide($stsRo, $stsRoDesc));
})();

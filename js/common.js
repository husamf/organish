// Test Destroy Slider
$('#anchorDestroy').rangeSlider({
    direction: 'vertical',
    settings: true,
    skin: 'green',
    type: 'interval',
    scale: true,
}, {
    step: 1,
}, );
$('#anchorDestroy').rangeSlider('destroy');
//
$('#anchor').rangeSlider();
//
// Test Methods
$('#anchor').rangeSlider({ skin: 'red', direction: 'vertical' }, { step: 1, values: [1] });
$('#anchor').rangeSlider({ skin: 'green', direction: 'horizontal' });
$('#anchor').rangeSlider('reset');
$('#anchor').rangeSlider({ skin: 'red', direction: 'horizontal', type: 'interval', settings: false, scale: false });
$('#anchor').rangeSlider({}, { step: 1, values: [1], min: 1, max: 250 });
// $('#anchor').rangeSlider('onChange', event => console.log(event.detail));
//
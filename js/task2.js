
'use strict'
const tooltips =
tooltips.forEach((tooltip) => {
});
tooltip.addEventListener('click', onTooltipClick);
function onTooltipClick (evt) {
}
evt.currentTarget.classList.toggle('tooltip-animated');
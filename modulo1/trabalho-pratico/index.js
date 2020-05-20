window.addEventListener('load', function() {
    const boxColor = this.document.querySelector('.box-color')

    const rangeRed = this.document.getElementById('rangeRed')
    const inputRed = this.document.getElementById('inputRed')
    const rangeGreen = this.document.getElementById('rangeGreen')
    const inputGreen = this.document.getElementById('inputGreen')
    const rangeBlue = this.document.getElementById('rangeBlue')
    const inputBlue = this.document.getElementById('inputBlue')

    addListener(rangeRed, inputRed)
    addListener(rangeGreen, inputGreen)
    addListener(rangeBlue, inputBlue)

    reset()

    function addListener(range, input) {
        range.addEventListener('change', function($event) {
            input.value = $event.target.value
            setBoxColor()
        })
    }

    function setBoxColor() {
        const color = 'rgb(' + rangeRed.value + ',' + rangeGreen.value + ',' + rangeBlue.value + ')'
        boxColor.style.backgroundColor = color
    }

    function reset() {
        rangeRed.value = 0
        rangeGreen.value = 0
        rangeBlue.value = 0
        inputRed.value = 0
        inputGreen.value = 0
        inputBlue.value = 0
        setBoxColor()
    }
})
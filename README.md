# Steps JS

The fast, lightweight, easy-to-use, JavaScript Steps plugin.

## How to use

To use this plugin add the following code to your page:

```
<script src="steps.js"></script>

var steps = new Steps({
    steps: 'selector'
});
```

Call the steps actions whenever you need to move on another step:

```
button.addEventListener('click', function(event) {
    event.preventDefault();

    var moveToStep = this.getAttribute('data-move-to');

    if ( moveTo == 'next' ) {
        steps.next(); // To go to the next step
    } else if ( moveTo == 'prev' ) {
        steps.prev(); // To go to the previous step
    } else {
        steps.to(moveTo); // To go the a specific step, should be an index number
    }
});
```

## Options

- `steps` (`string`)

    - selector, used to link the steps. Default '[data-step]'.

- `activeClass` (`string`)

    - class to be set on active step. Default 'active'.

- `customOrder` (`boolean`)
    - If false, the steps will be ordered as per their original DOM order.

    - Set to `true` if the steps order is not the default DOM order, requires 'data-step-index="someIndex"' attribute for each step element. Example usage when `step-4` is placed before `step-2` in the DOM. Default false.

- `activeStep` (`integer`)

    - the initially active step index. Default 0.

- `container` (`selector`)
    - the parent selector for the steps (mainly used for multiple initializations). Default 'document'.

## Methods

Use the following methods to wire up your functionality.

- `next()`

    - sets the active class to the next step.

- `prev()`

    - sets the active class to the previous step.

- `to(index)`

    - sets the active class to specific step.

- `progress()`

    - returns progress value - (activeStep / totalStepsLength - 1) * 100.

## Examples

Use steps.html for example functionality.

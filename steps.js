var Steps = (function() {

	Steps = function(config) {
		this.settings = {
			steps: '[data-step]',
			activeClass: 'active',
			customOrder: false,
			activeStep: 0,
			container: document
		}

		extend(this.settings, config);

		this.steps = this.settings.container.querySelectorAll(this.settings.steps);

		this.activeStepIndex = this.settings.activeStep;

		if ( this.settings.customOrder ) {
			// Rearrange the elements based on their INDEX value
			this.reArrange();
		}
	};

	Steps.prototype.reArrange = function() {
		var tempSteps = [];

		this.steps.forEach(function(el) {
			var index = el.getAttribute('data-step-index');

			tempSteps.splice(index, 0, el);
		});

		this.steps = tempSteps;
	};

	Steps.prototype.next = function() {
		this.toggle(this.activeStepIndex, this.activeStepIndex + 1);
	};

	Steps.prototype.prev = function() {
		this.toggle(this.activeStepIndex, this.activeStepIndex - 1);
	};

	Steps.prototype.to = function(index) {
		this.toggle(this.activeStepIndex, parseInt(index));
	};

	Steps.prototype.toggle = function(oldStepIndex, newStepIndex) {
		if ( this.steps[newStepIndex] != undefined ) {
			this.steps[oldStepIndex].classList.remove(this.settings.activeClass);

			this.steps[newStepIndex].classList.add(this.settings.activeClass);

			this.activeStepIndex = newStepIndex;
		}
	};

	Steps.prototype.progress = function() {
		return ( this.activeStepIndex / ( this.steps.length - 1 ) ) * 100;
	};

	function extend(defaultObj, newObj) {
		for ( var i in newObj ) {
			if ( newObj.hasOwnProperty(i) ) {
				defaultObj[i] = newObj[i];
			}
		}
	};

	return Steps;
})();

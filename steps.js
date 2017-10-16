var Steps = (function() {

	Steps = function(config) {
		this.settings = {
			steps: '[data-step]',
			activeClass: 'active',
			customOrder: true,
			activeStep: 0,
			container: document
		}

		extend(this.settings, config);

		this.collection = this.settings.container.querySelectorAll(this.settings.steps);

		this.activeIndex = this.settings.activeStep;

		if ( this.settings.customOrder ) {
			// Rearrange the elements based on their INDEX value
			this.reArrange();
		}
	};

	Steps.prototype.reArrange = function() {
		var tempSteps = [];

		for (var i = 0; i < this.collection.length; i++) {
			var el = this.collection[i];

			var index = el.getAttribute('data-step-index');

			tempSteps.splice(index, 0, el);
		};

		this.collection = tempSteps;
	};

	Steps.prototype.next = function() {
		this.toggle(this.activeIndex, this.activeIndex + 1);
	};

	Steps.prototype.prev = function() {
		this.toggle(this.activeIndex, this.activeIndex - 1);
	};

	Steps.prototype.to = function(index) {
		this.toggle(this.activeIndex, parseInt(index));
	};

	Steps.prototype.toggle = function(oldStepIndex, newStepIndex) {
		if ( this.collection[newStepIndex] != undefined ) {
			this.collection[oldStepIndex].classList.remove(this.settings.activeClass);

			this.collection[newStepIndex].classList.add(this.settings.activeClass);

			this.activeIndex = newStepIndex;
		}
	};

	Steps.prototype.progress = function() {
		return ( this.activeIndex / ( this.collection.length - 1 ) ) * 100;
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

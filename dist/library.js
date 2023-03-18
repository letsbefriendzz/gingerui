'use strict';

var vue = require('vue');

var script = {
  name: 'RadioButton',
  components: {

  },
  data() {
    return {

    }
  },
  props: {

  },
  computed: {

  }
};

const _hoisted_1 = { type: "radio" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1))
}

script.render = render;
script.__file = "src/RadioButton.vue";

var components = {
    RadioButton: script,
};

const plugin = {
    install (Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

module.exports = plugin;

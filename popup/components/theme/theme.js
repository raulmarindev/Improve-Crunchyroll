core.components.theme = (object) => {
  const component = document.createElement('div');
  let active;

  component.className = 'theme';
  object.options.forEach((option) => {
    const component_option = core.components.item(option);
    const component_switch = core.components.switch();

    if (chromeStorage[object.key] === option.value) {
      active = component_switch;
      component_switch.setAttribute('value', 'true');
    }

    component_option.classList.add(`theme-${option.value}`);
    component_option.appendChild(component_switch);
    component_option.addEventListener('click', () => {
      if (chromeStorage[object.key] !== option.value) {
        chromeStorage[object.key] = option.value;
        if (active) active.setAttribute('value', false);
        component_switch.setAttribute('value', 'true');
        active = component_switch;
      } else {
        chromeStorage[object.key] = 0;
        component_switch.setAttribute('value', 'false');
        active = undefined;
      }
    });
    component.appendChild(component_option);
  });

  return component;
};

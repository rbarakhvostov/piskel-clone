export default function swapColors() {
  const primaryColor = document.querySelector('.primary-color');
  const secondaryColor = document.querySelector('.secondary-color');
  [primaryColor.value, secondaryColor.value] = [secondaryColor.value, primaryColor.value];
}

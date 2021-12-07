export function displayTapLevels(tapData) {
  console.log(tapData.taps);
  const allTap = tapData.taps;

  allTap.forEach((element) => {
    console.log(element.beer + ": " + element.level);
  });
}

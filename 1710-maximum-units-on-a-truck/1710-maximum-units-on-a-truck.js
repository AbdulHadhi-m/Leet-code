function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let total = 0;

  for (let [boxes, units] of boxTypes) {
    if (truckSize === 0) break;

    const take = Math.min(boxes, truckSize);
    total += take * units;
    truckSize -= take;
  }

  return total;
}
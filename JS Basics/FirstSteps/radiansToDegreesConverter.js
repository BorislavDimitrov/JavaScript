function radiusToDegrees(radians) {
  let radiansNumber = Number(radians);
  let degrees = (radiansNumber * 180) / Math.PI;
  console.log(degrees.toFixed(0));
}

radiusToDegrees("6.283");

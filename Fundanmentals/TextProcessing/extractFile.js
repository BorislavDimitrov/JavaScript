function solve(path) {
  let files = path.split("\\");
  let file = files[files.length - 1];

  let startIndexOfExtension = file.lastIndexOf(".");
  let extension = file.substring(startIndexOfExtension);
  let name = file.substring(0, startIndexOfExtension);

  console.log(`Name: ${name}`);
  console.log(`Extension: ${extension}`);
}

solve("C:\\Internal\\training-internal\\Template.pptx");

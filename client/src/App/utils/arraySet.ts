export default function removeDuplicates(array: any[]) {
  // return array.filter((a, b) => array.indexOf(a) === b);
  const dataSet = new Set(array);
  return Array.from(dataSet);
}
    
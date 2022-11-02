export default function removeDuplicates(array: any[]) {
  return array.filter((a, b) => array.indexOf(a) === b);
}
    
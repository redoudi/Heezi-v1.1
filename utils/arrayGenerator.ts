export default function* arrayGenerator(arr: any[]) {
  for (const item of arr) {
    yield item;
  }
}

function sortByName(a: any[]): any[] {
  var result = a.slice(0);
  result.sort(function (x, y) {
    return x.name.localCompare(y.name);
  });
  return result;
}
sortByName(5);
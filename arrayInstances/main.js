function arrayInstances(entry) {
    return [...new Set(entry.sort((a,b) => a - b))].map(number => {
        return [number, entry.reduce((instances, current) => {
            return number === current ? instances + 1 : instances;
        }, 0)];
    });
}

let array1 = [5,2,6,5,6,4,5,2,4,5,2,5,4,5,2,3,6,5,4,1,7,8,1];

console.log(arrayInstances(array1));
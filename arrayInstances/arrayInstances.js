function arrayInstances(entry) {
    return [...new Set(entry.sort((a,b) => a - b))].map(number => {
        return [number, entry.reduce((instances, current) => {
            return number === current ? instances + 1 : instances;
        }, 0)];
    });
}

//returns an array of the form [[value, instances], [...]]
//a basic numerical ordering is performed
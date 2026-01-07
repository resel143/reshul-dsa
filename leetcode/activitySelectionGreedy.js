function activitySelection(start, end){
    let activities = [];
    let n = start.length;

    for(let i=0;i<n;i++){
        activities.push([start[i], end[i], i]);
    }

    // sort activities according to end time
    activities.sort((a,b)=> a[1]-b[1]);

    let selected = [];
    let lastEnd = -1;

    for(let [s, e, idx] of activities){
        if(s >= lastEnd){
            selected.push(idx);
            lastEnd = e;
        }
    }

    return selected;

}


let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];

let result = activitySelection(start, end);
console.log("Selected activity indices:", result); // Output: [0, 1, 3, 4]
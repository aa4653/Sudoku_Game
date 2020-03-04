// const row = 9;
// const col = 9;

// let grid = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];

// for(let i = 0; i < grid.length; i++) {
//     for(let k = 0; k < grid[i].length; k++) {
//         console.log(grid[i][k]);
//     }
//     console.log("~~~~~~R~~~~~~")
// }


// grid.forEach(function(row) {
//     row.forEach(function(col) {
//         console.log(col);
//     });
//     console.log("~~~~~~C~~~~~")
// })


// console.log(grid[1][6])

class myArray {
    constructor(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9) {
        this.arr1 = arr1,
        this.arr2 = arr2, 
        this.arr3 = arr3,
        this.arr4 = arr4,
        this.arr5 = arr5,
        this.arr6 = arr6,
        this.arr7 = arr7,
        this.arr8 = arr8,
        this.arr9 = arr9
    }

}
    var arr1 = [];
    while(arr1.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr1.indexOf(r) === -1) arr1.push(r);
    }
    
    var arr2 = [];
    while(arr2.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr2.indexOf(r) === -1) arr2.push(r);
    }

    var arr3 = [];
    while(arr3.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr3.indexOf(r) === -1) arr3.push(r);
    }

    var arr4 = [];
    while(arr4.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr4.indexOf(r) === -1) arr4.push(r);
    }

    var arr5 = [];
    while(arr5.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr5.indexOf(r) === -1) arr5.push(r);
    }

    var arr6 = [];
    while(arr6.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr6.indexOf(r) === -1) arr6.push(r);
    }

    var arr7 = [];
    while(arr7.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr7.indexOf(r) === -1) arr7.push(r);
    }


    var arr8 = [];
    while(arr8.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr8.indexOf(r) === -1) arr8.push(r);
    }
    

    var arr9 = [];
    while(arr9.length < 9) {
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr9.indexOf(r) === -1) arr9.push(r);
    }



console.log(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9)

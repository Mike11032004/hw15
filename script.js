let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    }
]

// Найти количество людей одного типа из массива и сохранить их в массив категории. В массиве категорий специально допущены ошибки (исходный массив менять нельзя).

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]

// for (let i = 0; i <= arr.length -1; i++) {
//     let key = arr[i].info.faculity.toUpperCase()

//     if (info.faculity[key]) {
//         categories.course.push(arr[i].info.faculity)
//         categories.count++
//     } else {
//         alert('Wrong item')
//     }
// }
for (let item of arr) {
    key = arr.faculity.toUpperCase()

    if (item.info.faculity === 'SMM') {
        categories.course.push(item)
        categories.count++
    } else if (item.info.faculity === 'PROGRAMMING') {
        categories.course.push(item)
        categories.count++
    } else if (item.info.faculity === '3DSMAX') {
        categories.course.push(item)
        categories.count++
    } else if (item.info.faculity === 'DIZAYN') {
        categories.course.push(item)
        categories.count++
    } else if (item.info.faculity === 'BACKEND') {
        categories.course.push(item)
        categories.count++
    }
}

console.log(categories);



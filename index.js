/* function displayCurrentDate() {
    const dateElement = document.getElementById("date");

    if (!dateElement) {
        console.error("Element with id='date' not found.");
        return;
    }

    const currentDate = new Date();

    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);

    console.log("Date element:", dateElement);
    console.log("Current Date:", currentDate);
}

window.onload = displayCurrentDate;> */

// const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'x-rapidapi-key': '7ad324063dmsh29d535b16e02f31p1f4baajsn72725407838a',
// 		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
// 		'Content-Type': 'application/x-www-form-urlencoded'
// 	},
// 	body: new URLSearchParams({woeid: ' 23424934'})
// };

// let graphData = [];

// fetch(url, options).then(res => res.json()).then(data => {
//         console.log(data);

//         for(let i = 0; i < 25; i++){
//             graphData.push({
//                 name: data.trends [i].name,
//                 volume: data.trends[i].volume,
//             })
//         }

//         for (let i = 0; i < graphData.length; i++) {
//             console.log(
//                 i, 
//                 graphData[i].name, 
//                 graphData[i].volume, 
//                 graphData[i].queryUrl);
//           }

//     let topics = graphData.map(object =>{
//         console.log(object, object.name);
//         return object.name;
//     })

//     console.log(topics);

//     let volumes = graphData.map(object =>{
//         console.log(object, object.volume);
//         return object.volumt; //volume <-
//     })

//     console.log(volumes);

//     const myChart = document.getElementById("myChart");

//     let barChart = new Chart(myChart, {
//         type: 'bar',
//         data: {
//           labels: topics,
//           datasets: [{
//             label: '# of Votes',
//             data: volumes, 
//             borderWidth: 2,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 205, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(201, 203, 207, 0.2)'
//             ],
//             borderColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//             ],
//             hoverBackgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//             ]
//           }]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           },
//           indexAxis: 'y'

//         }
//     });
//     });


// 	// let myPost = {
// 	// 	name: "Lee Sung Kyung",
// 	// 	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
// 	// 	volume: 31799,
// 	// 	followers: 3895734
// 	// }

// 	// console.log(myPost);
// 	// console.log(myPost.name);
// 	// console.log(myPost.queryUrl);
// 	// console.log(myPost.volume);
// 	// console.log(myPost.followers);

//     // let graphData = [{
//     //     name: "#PorDeeReunion", 
//     //     queryUrl: "search?q=%23PorDeeReunion", 
//     //     volume: 67000},
//     //     {
//     //     name: "#BGYO3rdAnniversary", 
//     //     queryUrl: "search?q=%23BGYO3rdAnniversary", 
//     //     volume: 27400}
// 	// ];

// 	// console.log(graphData);
// 	// // Arrays use "index" as the indicator for the position of the "element" in a list.
// 	// // Arrays start at 0 index for the first item, 1 for the second item and 2 for the 3rd item
// 	// console.log(graphData[1]);

// 	// // Since the first element/item in the array is an object, we can use dot notation to access it's properties
// 	// console.log(graphData[1].name);
// 	// console.log(graphData);

// 	// graphData.push(myPost);
// 	// console.log(graphData);

//     // console.log(graphData[0].volume);

//     //mini act

function displayCurrentDate() {
    const dateElement = document.getElementById("date");

    if (!dateElement) {
        console.error("Element with id='date' not found.");
        return;
    }

    const currentDate = new Date();

    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);

    console.log("Date element:", dateElement);
    console.log("Current Date:", currentDate);
}

window.onload = displayCurrentDate;

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
    method: 'POST',
    headers: {
        'x-rapidapi-key': 'b69573448bmsh08d85036ebb16cep1c0db2jsnd993feba3197',
        'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ woeid: '23424934' })
};

let graphData = [];

// fetch retrieves and receives data in a JSON format
fetch(url, options).then(res => res.json()).then(data => {
    console.log(data);

    for (let i = 0; i < 25; i++) {
        graphData.push({
            name: data.trends[i].name,
            volume: data.trends[i].volume
        })
    }

    // Mini-Activity
    // for loop - type of repitional statements to repeat a soecifc task for a specific number of times.
    for (let i = 0; i < graphData.length; i++) {
        console.log(graphData[i])
        console.log(graphData[i].name);
        console.log(graphData[i].queryUrl);
        console.log(graphData[i].volume);
    }
    // .map() method iterates over the array and returns an array of result
    let topics = graphData.map(object => {
        console.log(object, object.name);
        return object.name;
    })

    console.log(topics);

    let volumes = graphData.map(object => {
        console.log(object, object.volume);
        return object.volume;
    })
    console.log(volumes);

    const myChart = document.getElementById("myChart");

    let barChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: topics,
            datasets: [{
                label: '# of tweets/xeets',
                data: volumes,
                borderWidth: 2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                hoverBackgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            indexAxis: 'y'
        }
    });
})
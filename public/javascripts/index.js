const axios = require('axios');
const Search = require('./search');
const Footer = require('./footer');
const Sidebar = require('./sidebar');

axios.get(`/test`)
    .then((response) => {
        return response; 
    })
    .catch(function (error) {
        return error;
    });

document.addEventListener('DOMContentLoaded', () => {

    let main = document.getElementById("main")

    // axios.get(`/search`)
    //     .then((response) => {
    //         console.log(response); 
    //         return response
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    new Search(main).render()
    
    
})

document.addEventListener("DOMContentLoaded", () => {
    let sidebar = document.getElementById("sidebar")


    new Sidebar(sidebar).render()
})


// document.addEventListener("DOMContentLoaded", () => {
//     let footer = document.getElementById("footer")


//     new Footer(footer).render()
// })


// let isbn = '0201558025';
    // axios.get(`/books/${isbn}`)
    // .then((response) => {
    //     console.log(response); 
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    // let query = "grace hopper";
    // axios.get(`/search?string=${query}`)
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
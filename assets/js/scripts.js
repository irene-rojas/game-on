$(document).ready(function() {

    function createLogo() {
        var logo = $("<img>", {
            src: "./assets/images/logo.png",
            id: "logo",
            alt: "logo image",
            class: "logoImage slide-in-blurred-bottom"
        });
        $("#logoDiv").append(logo);
    };
    createLogo();
    
    function createFindGroup() {
        var findGroup = $("<button>", {
            class: "btn-large slide-in-blurred-left",
            id: "findGroup",
            text: "Find a game near you!"
        });
        $("#findDiv").append(findGroup);
    };
    createFindGroup();


    function createCreateGroup() {
        var createGroup = $("<button>", {
            class: "btn-large slide-in-blurred-right",
            text: "Create an event!",
            id: "createGroup"
        });
        $("#createDiv").append(createGroup);
    };
    createCreateGroup();

    
    function createSearchDiv() {
        $("#findGroup").click(function() {
            $("#findDiv").empty();
            $("#createDiv").empty();

            var searchForm = $("<div>", {
                class: "input-field inline",
                id: "searchForm",
                type: "text",
                text: "Enter your zip code:"
            });
            $("#searchResultsDiv").append(searchForm);

            // show -hide








            
        // var searchCard = $("<div>", {
        //     class: "card",
        //     id: "searchCard"
        // });
        // $("#searchResultsDiv").append(searchCard);
        // // end create master card


        // // start zipCodeDiv
        // var zipCodeDiv = $("<div>", {
        //     class: "form",
        //     id: "zipCodeDiv"
        // });
        // $("#searchCard").append(zipCodeDiv);

        // var zipCode = $("<div>", {
        //     class: "input-field inline",
        //     id:"zipCode",
        //     text: "Enter your zip code:",
        //     type: "text"
        // });
        // $("#zipCodeDiv").append(zipCode);
        // end zipCodeDiv area


        // // start gamingDiv
        // var gamingDiv = $("<div>", {
        //     id: "gamingDiv",
        //     class: "div"
        // });
        // $("#gamingBtnDiv").append(gamingDiv);

        // var gamingBtn = $("<button>", {
        //     class: "btn-large",
        //     id: "gamingBtn",
        //     text: "Gaming"
        // });
        // $("#searchCard").append(gamingBtn);
        // // end gamingDiv area


        // // start sportsDiv
        // var sportsDiv = $("<div>",{
        //     id: "sportsDiv",
        //     class: "div"
        // });
        // $("#sportsBtnDiv").append(sportsDiv);

        // var sportsBtn = $("<button>", {
        //     class: "btn-large",
        //     id: "sportsBtn",
        //     text: "Sports"
        // });
        // $("searchCard").append(sportsBtn);
        // // end sportsDiv area


        });
    };
    createSearchDiv();

























    // particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;



}); //end document.ready
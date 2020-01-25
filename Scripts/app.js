/**
 * Author: Josh Bakos
 * Student ID: 100652490
 * Date Completed: 2020-01-24
 */

(function() {

    function Start()
    {
        console.log("App started.");
        Main();
    }

    function Main()
    {
        /**
         * Rename Products to Projects
         */
        let products = document.getElementsByClassName("nav-item")[1];
        let projects_content = '<a class="nav-link" href="#"> <i class="fas fa-th"></i> Products</a>';
        products.innerHTML = projects_content;

        // Add new navbar choice
        let navbar = document.getElementsByClassName("navbar-nav ml-auto")[0];
        

        /**
         * Creating the new nav tab
         */
        human_resources_tab = document.createElement('li');
        human_resources_tab.setAttribute('class', 'nav-item');
        // Create the inner HTML for the new li
        let human_resources_content = ' <a class="nav-link" href="#"> <i class="fas fa-hands-helping"></i> Human Resources</a> ';
        // Set the inner HTML
        human_resources_tab.innerHTML = human_resources_content;
        // Insert between About Us and Contact Us
        navbar.insertBefore(human_resources_tab, navbar.children[4]);


        /**
         * Creating new fixed-bottom navbar
         */
        bottom_nav = document.createElement('nav');
        // Set nav class to fixed-bottom and dark themed
        bottom_nav.setAttribute('class', 'navbar fixed-bottom navbar-dark bg-dark');
        // Create nav inner HTML content
        let bottom_nav_content = '<a class="navbar-brand" href="http://www.linkedin.com/in/jzbakos/" target="_blank">&copy Josh Bakos 2020</a>';
        // Set inner HTML
        bottom_nav.innerHTML = bottom_nav_content;
        // Append the new navbar to the body
        document.body.appendChild(bottom_nav);
    }
    window.addEventListener("load", Start);
})()
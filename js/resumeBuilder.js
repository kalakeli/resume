/* ----------------------------
 * helper.js
 * ----------------------------
 */
// -----------------------------------------------
// BIO
// -----------------------------------------------
var bio = {
    name: "Karsten Berlin",
    role: "Webdeveloper",
    contacts: {
        mobile: "0049 179 1052288",
        email: "karsten.berlin@gmail.com",
        github: "https://github.com/kalakeli",
        twitter: "@kalakeli",
        location: "Muenster (Westf.), Germany"
    },
    welcomeMessage: "Hi! Nice to meet you! My name is Karsten and you are watching my online resume",
    skills: [
        "fluent in several languages",
        "proficient programmer in HTML, PHP, JavaScript, and others",
        "proficient database designer",
    ],
    biopic: "https://c2.staticflickr.com/2/1687/26584194746_89b0fc67d9_n.jpg",
    display: function() {

        // add Name and role to the beginning of the header
        $('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
        $('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

        // add contact info
        $('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
        $('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
        $('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));

        // add picture
        $('#header').append(HTMLbioPic.replace("%data%", bio.biopic));

        // add welcomeMessage
        $('#header').append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        // add skills
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++) {
                $('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }

        // connection info is also used for the footer, so here goes ..
        $('#footerContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
        $('#footerContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $('#footerContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
        $('#footerContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
    }
};


// -----------------------------------------------
// EDUCATION
// -----------------------------------------------
var education = {
    schools: [{
            name: "Westfälische Wilhelms-Universität Münster",
            location: "Münster (Westf.), Germany",
            degree: "Diploma in Ecology",
            majors: ["Zoology", "Botany", "Geoinformatics"],
            dates: "1994-2000",
            url: "http://www.uni-muenster.de/en/"
        },
        {
            name: "Rheinische Akademie",
            location: "Cologne, Germany",
            degree: "Biological Technical Assistant",
            majors: ["Zoology", "Botany"],
            dates: "1990-1992",
            url: "http://www.rak.de/content/"
        },
        {
            name: "Gymnasium zum Wirteltor",
            location: "Düren, Germany",
            degree: "A levels",
            majors: ["English", "Mathematics", "Sports", "Philosophy"],
            dates: "1975-1988",
            url: "http://www.wirteltor-gymnasium.de/"
        },
    ],
    onlineCourses: [{
            title: "Front-End Web Developer Nanodegree",
            school: "udacity",
            dates: "2016-2017",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            title: "Programming Foundations with Python",
            school: "udacity",
            dates: "2016",
            url: "https://www.udacity.com/course/programming-foundations-with-python--ud036"
        }
    ],
    display: function() {

        // add education
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            for (var i = 0; i < education.schools.length; i++) {
                $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name));
                $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
                $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
                $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));

                majors = "";
                if (education.schools[i].majors.length > 0) {
                    for (var j = 0; j < education.schools[i].majors.length; j++) {
                        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
                    }
                }
            }
        }

        // add online classes
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            for (var i = 0; i < education.onlineCourses.length; i++) {
                $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
                $(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
                $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
                $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));

            }
        }
    }
};


// -----------------------------------------------
// WORK
// -----------------------------------------------
var work = {
    jobs: [{
            employer: "Dachverband Deutscher Avifaunisten",
            title: "Administrator",
            location: "Münster (Westf.), Germany",
            dates: "in progress",
            description: "I am responsible for maintaining hard- and software, " +
                "installing and repairing computers, but also designing and " +
                "programming databases and web applications using vast " +
                "amounts of ornithological data"
        },
        {
            employer: "Carinthia University of Applied Sciences",
            title: "Lecturer",
            location: "Villach, Austria",
            dates: "2002-2006",
            description: "As a Human-Computer Interaction specialist, I taught beginner " +
                "and intermediate courses in User Interface Design for " +
                "Geographic Information Systems (GIS)"
        },
        {
            employer: "GIS Akademie",
            title: "Lecturer",
            location: "Hamburg, Germany",
            dates: "1998-2001",
            description: "I taught courses in Avenue, Esri's then main programming language"
        },
        {
            employer: "Westfälische Wilhelms-Universität Münster",
            title: "Researcher",
            location: "Münster (Westf.), Germany",
            dates: "1997-2001",
            description: "First as a student assistent, later as a graduate student I  " +
                "worked for the Institute for Geoinformatics"
        },
        {
            employer: "Tropical Research Station",
            title: "Researcher",
            location: "Cape Tribulation, Australia",
            dates: "1997",
            description: "I did extensive ecological research in a wet palm forest in Australia "
        }
    ],
    display: function() {
        // add work experiences
        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            for (var i = 0; i < work.jobs.length; i++) {
                $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
                $(".work-entry").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
                $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
                $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
                $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
            }
        }
    }
};

// -----------------------------------------------
// PROJECTS
// -----------------------------------------------
var projects = {
    projects: [{
            title: "Säugetieratlas NRW",
            dates: "2014-ongoing",
            description: "An atlas for all mammals occuring in the state of North-Rhine Westphalia " +
                "in Germany. Sightings can be checked plus new ones added.",
            images: ["http://www.dda-web.de/austausch/kb/pics/proj_lwl_atlas1.jpg", "http://www.dda-web.de/austausch/kb/pics/proj_lwl_atlas2.jpg"]
        },
        {
            title: "Ornithologische Schriftenschau",
            dates: "2011-ongoing",
            description: "An online literature database gathering articles on ornithological topics. Slowly but steadily growing",
            images: ["http://www.dda-web.de/austausch/kb/pics/proj_os1.jpg"]
        },
        {
            title: "Avifauna Rheinland-Pfalz",
            dates: "2013-ongoing",
            description: "The avifauna of Rhineland-Palatinate needed mony to support the " +
                "production and publication of the books. This website offers " +
                "the possibility to support the process by donating for specific birds. " +
                "A total of more than 70.000 Euros have been gathered that way.",
            images: ["http://www.dda-web.de/austausch/kb/pics/proj_avirlp1.jpg", "http://www.dda-web.de/austausch/kb/pics/proj_avirlp2.jpg"]
        },
        {
            title: "Die Brutvögel Nordrhein-Westfalens",
            dates: "2013-ongoing",
            description: "The avifauna of North-Rhine Westphalia in an online version " +
                "providing visitors with data on their favourite species.",
            images: ["http://www.dda-web.de/austausch/kb/pics/proj_nrw1.jpg", "http://www.dda-web.de/austausch/kb/pics/proj_nrw2.jpg"]
        }
    ],
    display: function() {
        // add projects
        if (projects.projects.length > 0) {

            $("#projects").append(HTMLprojectStart);

            for (var i = 0; i < projects.projects.length; i++) {
                $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
                $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
                $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
                if (projects.projects[i].images.length > 0) {
                    for (var j = 0; j < projects.projects[i].images.length; j++) {
                        $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
                    }
                }
            }
        }
    }
};

// show the content
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

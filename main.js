
const currentPage = window.location.pathname;
console.log(currentPage)
// Start page Header
let pageHeaderHtml = `
    <!-- Start Header -->
    <header>
        <div class="container">
            <div class="logo"><a href="index.html">ALVARO</a></div>
            <input type="checkbox" id="burger">
            <label class="burger" for="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="games-and-scores.html">Games & Scores</a></li>
                <li><a href="group-stage.html">Groups</a></li>
                <li><a href="knockout.html">Knockout</a></li>
                <li><a href="all-news.html">News</a></li>
                <li><a href="teams.html">Teams</a></li>
            </ul>
        </div>
    </header>
    <!-- End Header -->
`
let pageHeader = document.createElement("div")
let pageBody = document.querySelector("body")
if (!currentPage.includes("games-and-scores.html")) {
    pageHeader.innerHTML = pageHeaderHtml
    pageBody.prepend(pageHeader)
}
// End page Header


// Start Teams Data 
let allTeams = {
    t1: {
        name: "abtal hai yasmine",
        subName: "AHY",
        flagPic: "abtal-hai-yasmine.png",
        // players: {
        //     p1: {
        //         fName: "Santana",
        //         lName: "EDERSON",
        //         position: "GOALKEEPER",
        //         photo: "ederson.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Ruben",
        //         lName: "DIAS",
        //         position: "DEFENDER",
        //         photo: "ruben-dias.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Kyle",
        //         lName: "WALKER",
        //         position: "DEFENDER",
        //         photo: "kyle-walker.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p4: {
        //         fName: "Kevin",
        //         lName: "DE BRUYNE",
        //         position: "MIDFIELDER",
        //         photo: "kevin-de-bruyne.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p5: {
        //         fName: "Hernandez",
        //         lName: "RODRIGO",
        //         position: "MIDFIELDER",
        //         photo: "rodrigo.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p6: {
        //         fName: "Riyad",
        //         lName: "MAHREZ",
        //         position: "FORWARD",
        //         photo: "riyad-mahrez.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p7: {
        //         fName: "Erling",
        //         lName: "HAALAND",
        //         position: "FORWARD",
        //         photo: "erling-haaland.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     manager: {
        //         fName: "Pep",
        //         lName: "GUARDIOLA",
        //         position: "MANAGER",
        //         photo: "pep-guardiola.webp",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },
    t2: {
        name: "canastel",
        subName: "CSJC",
        flagPic: "canastel.png",
        // players: {
        //     p1: {
        //         fName: "Thibaut",
        //         lName: "COURTOIS",
        //         position: "GOALKEEPER",
        //         photo: "COURTOISthumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Daniel",
        //         lName: "CARVAJAL",
        //         position: "DEFENDER",
        //         photo: "CARVAJALThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Eder",
        //         lName: "MILITAO",
        //         position: "DEFENDER",
        //         photo: "MILITAO.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p4: {
        //         fName: "Luka",
        //         lName: "MODRIC",
        //         position: "MIDFIELDER",
        //         photo: "MODRICThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p5: {
        //         fName: "Toni",
        //         lName: "KROOS",
        //         position: "MIDFIELDER",
        //         photo: "KROOSThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p6: {
        //         fName: "Paixao de Oliveira",
        //         lName: "VINICIUS JR.",
        //         position: "FORWARD",
        //         photo: "VINICIUSThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p7: {
        //         fName: "Goes",
        //         lName: "RODRYGO",
        //         position: "FORWARD",
        //         photo: "RODRYGOThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     manager: {
        //         fName: "Carlo",
        //         lName: "ANCELOTTI",
        //         position: "MANAGER",
        //         photo: "ANCELOTTIThumb.jpg",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },
    t3: {
        name: "chabeb fajer wahran",
        subName: "CFO",
        flagPic: "fajr-wahran.png",
        // players: {
        //     p1: {
        //         fName: "Ter",
        //         lName: "STEGEN",
        //         position: "GOALKEEPER",
        //         photo: "01-MARC-ANDRE_TER_STEGEN-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p2: {
        //         fName: "Ronald",
        //         lName: "ARAUJO",
        //         position: "DEFENDER",
        //         photo: "04-RONALD_ARAUJO_-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p3: {
        //         fName: "Eric",
        //         lName: "GARCIA",
        //         position: "DEFENDER",
        //         photo: "24-ERIC_GARCIA-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p4: {
        //         fName: "González López",
        //         lName: "PEDRI",
        //         position: "DEFENDER",
        //         photo: "08-PEDRI-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p5: {
        //         fName: "Frenkie",
        //         lName: "DE JONG",
        //         position: "MIDFIELDER",
        //         photo: "21-FRENKIE_DE_JONG-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p6: {
        //         fName: "Robert",
        //         lName: "LEWANDOWSKI",
        //         position: "FORWARD",
        //         photo: "09-ROBERT_LEWANDOWSKI-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     p7: {
        //         fName: "&#8203;",
        //         lName: "RAPHINHA",
        //         position: "FORWARD",
        //         photo: "22-RAPHINHA-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     },
        //     manager: {
        //         fName: "XAVI",
        //         lName: "HERNANDEZ",
        //         position: "MANAGER",
        //         photo: "00_XAVI_HERNANDEZ-removebg-preview.png",
        //         city: "SI hawes",
        //         age: "52yo",
        //         height: "178cm",
        //         proClub: "without club"
        //     }
        // }
    },
    t4: {
        name: "widad amal carteaux",
        subName: "WAC",
        flagPic: "widad-amal-carteaux.png"
    },
    t5: {
        name: "wihdat amel bir eldjir",
        subName: "WAB",
        flagPic: "wihdat-amel-bir-eldjir.png"
    },
    t6: {
        name: "aadl zabana",
        subName: "WZM",
        flagPic: "cazamo.png"
    },
    t7: {
        name: "emir khaled",
        subName: "CAK",
        flagPic: "chabab emir khaled.png"
    },
    t8: {
        name: "chorouk castor",
        subName: "CSC",
        flagPic: "chorouk castor.png"
    },
    t9: {
        name: "taraji senia",
        subName: "ESS",
        flagPic: "esperance es-senia.png"
    },
    t10: {
        name: "yaghmouracen jil",
        subName: "JIL",
        flagPic: "yaghmouracen.png"
    },
    t11: {
        name: "aaawo",
        subName: "AWO",
        flagPic: "aaawo.png"
    },
    t12: {
        name: "rmot",
        subName: "RMT",
        flagPic: "csarmot.png"
    },
    t13: {
        name: "espoir senia",
        subName: "AAS",
        flagPic: "espoir senia.png"
    },
    t14: {
        name: "pepso",
        subName: "CSA",
        flagPic: "pepso.png"
    },
    t15: {
        name: "j.t oranais",
        subName: "JO",
        flagPic: "talent.png"
    },
    t16: {
        name: "jil monte carlo",
        subName: "JMC",
        flagPic: "jil monte carlo.png"
    },
    t17: {
        name: "widad hai el zitoun",
        subName: "WHZ",
        flagPic: "widad hai el zitoun.png"
    },
    t18: {
        name: "espoir sport city",
        subName: "SC",
        flagPic: "espoir sport city.png"
    },
    t19: {
        name: "yaghmoracen jyo",
        subName: "JYO",
        flagPic: "yaghmouracen2.png"
    },
    t20: {
        name: "kawkeb sportif oran",
        subName: "KSO",
        flagPic: "kso.png"
    }
}
let AllTeams = Object.values(allTeams)
// End Teams Data


// Start All Games & Scores Data
let days = {
    day1: {
        date: "Monday 04 September 2023",
        game1: {
            teamOne: {
                name: "wihdat amel bir eldjir",
                flag: "wihdat-amel-bir-eldjir.png",
                score: "5",
                goals: {
                    
                }
            },
            teamTwo: {
                name: "widad amal carteaux",
                flag: "widad-amal-carteaux.png",
                score: "2",
                goals: {
                },
            },
            group: "Group A",
            time: "08:30",
            match: "01",
            city: "Oran",
            stadium: "Stade Proxomite Yasmine",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "aadl zabana",
                flag: "cazamo.png",
                score: "0",
                goals: {
                    
                }
            },
            teamTwo: {
                name: "chorouk castor",
                flag: "chorouk castor.png",
                score: "3",
                goals: {
                },
            },
            group: "Group B",
            time: "08:30",
            match: "02",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "canastel",
                flag: "canastel.png",
                score: "3",
                goals: {
                    
                },
                // winner: true
            },
            teamTwo: {
                name: "chabeb fajer wahran",
                flag: "fajr-wahran.png",
                score: "2",
                goals: {
                },
            },
            group: "Group A",
            time: "09:15",
            match: "03",
            city: "Oran",
            stadium: "Stade Proxomite Yasmine",
            highlight: "#"
            // drawInfo: {
            //     winnerTeam: "Barcelona",
            //     scoreOne: "4",
            //     scoreTwo: "2"
            // }
        },
    },
    day2: {
        date: "Tuesday 05 September 2023",
        game1: {
            teamOne: {
                name: "espoir senia",
                flag: "espoir senia.png",
                score: "1",
                goals: {
                },
            },
            teamTwo: {
                name: "rmot",
                flag: "csarmot.png",
                score: "9",
                goals: {
                },
            },
            group: "Group C",
            time: "08:30",
            match: "04",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "pepso",
                flag: "pepso.png",
                score: "1",
                goals: {
                },
            },
            teamTwo: {
                name: "j.t oranais",
                flag: "talent.png",
                score: "3",
                goals: {
                },
            },
            group: "Group C",
            time: "09:15",
            match: "05",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "widad hai el zitoun",
                flag: "widad hai el zitoun.png",
                score: "2",
                goals: {
                    
                }
            },
            teamTwo: {
                name: "espoir sport city",
                flag: "espoir sport city.png",
                score: "1",
                goals: {
                },
            },
            group: "Group D",
            time: "09:15",
            match: "06",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
    },
    day3: {
        date: "Friday 08 September 2023",
        game3: {
            teamOne: {
                name: "emir khaled",
                flag: "chabab emir khaled.png",
                score: "1",
                goals: {
                },
            },
            teamTwo: {
                name: "taraji senia",
                flag: "esperance es-senia.png",
                score: "2",
                goals: {
                },
            },
            group: "Group B",
            time: "08:30",
            match: "07",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "canastel",
                flag: "canastel.png",
                score: "6",
                goals: {
                },
            },
            teamTwo: {
                name: "widad amal carteaux",
                flag: "widad-amal-carteaux.png",
                score: "0",
                goals: {
                },
            },
            group: "Group A",
            time: "09:15",
            match: "08",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "chorouk castor",
                flag: "chorouk castor.png",
                score: "3",
                goals: {
                },
            },
            teamTwo: {
                name: "yaghmouracen jil",
                flag: "yaghmouracen.png",
                score: "1",
                goals: {
                },
            },
            group: "Group B",
            time: "09:15",
            match: "09",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        
    },
    day4: {
        date: "Saturday 09 September 2023",
        game2: {
            teamOne: {
                name: "yaghmoracen jyo",
                flag: "yaghmouracen2.png",
                score: "2",
                goals: {
                },
            },
            teamTwo: {
                name: "espoir sport city",
                flag: "espoir sport city.png",
                score: "1",
                goals: {
                },
            },
            group: "Group D",
            time: "08:30",
            match: "10",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game1: {
            teamOne: {
                name: "rmot",
                flag: "csarmot.png",
                score: "3",
                goals: {
                },
            },
            teamTwo: {
                name: "j.t oranais",
                flag: "talent.png",
                score: "1",
                goals: {
                },
            },
            group: "Group C",
            time: "09:15",
            match: "11",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "widad hai el zitoun",
                flag: "widad hai el zitoun.png",
                score: "1",
                goals: {
                },
            },
            teamTwo: {
                name: "kawkeb sportif oran",
                flag: "kso.png",
                score: "1",
                goals: {
                },
            },
            group: "Group D",
            time: "09:15",
            match: "12",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
    },
    day5: {
        date: "Tuesday 12 September 2023",
        game1: {
            teamOne: {
                name: "abtal hai yasmine",
                flag: "abtal-hai-yasmine.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "canastel",
                flag: "canastel.png",
                score: "6",
                goals: {
                },
            },
            group: "Group A",
            time: "08:30",
            match: "13",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "yaghmouracen jil",
                flag: "yaghmouracen.png",
                score: "2",
                goals: {
                },
            },
            teamTwo: {
                name: "emir khaled",
                flag: "chabab emir khaled.png",
                score: "2",
                goals: {
                },
            },
            group: "Group B",
            time: "08:30",
            match: "14",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "chabeb fajer wahran",
                flag: "fajr-wahran.png",
                score: "6",
                goals: {
                },
            },
            teamTwo: {
                name: "wihdat amel bir eldjir",
                flag: "wihdat-amel-bir-eldjir.png",
                score: "0",
                goals: {
                },
            },
            group: "Group A",
            time: "09:15",
            match: "15",
            city: "Oran",
            stadium: "Stade Proxomite Hay Yasmine",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "taraji senia",
                flag: "esperance es-senia.png",
                score: "1",
                goals: {
                },
            },
            teamTwo: {
                name: "aadl zabana",
                flag: "cazamo.png",
                score: "4",
                goals: {
                },
            },
            group: "Group B",
            time: "09:15",
            match: "16",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
    },
    day6: {
        date: "Wednesday 13 September 2023",
        game3: {
            teamOne: {
                name: "pepso",
                flag: "pepso.png",
                score: "2",
                goals: {
                },
            },
            teamTwo: {
                name: "espoir senia",
                flag: "espoir senia.png",
                score: "5",
                goals: {
                },
            },
            group: "Group C",
            time: "08:30",
            match: "17",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "yaghmoracen jyo",
                flag: "yaghmouracen2.png",
                score: "5",
                goals: {
                },
            },
            teamTwo: {
                name: "kawkeb sportif oran",
                flag: "kso.png",
                score: "0",
                goals: {
                },
            },
            group: "Group D",
            time: "09:15",
            match: "18",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "rmot",
                flag: "csarmot.png",
                score: "5",
                goals: {
                },
            },
            teamTwo: {
                name: "aaawo",
                flag: "aaawo.png",
                score: "0",
                goals: {
                },
            },
            group: "Group C",
            time: "09:15",
            match: "19",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
    },
    day7: {
        date: "Thursday 14 September 2023",
        game1: {
            teamOne: {
                name: "jil monte carlo",
                flag: "jil monte carlo.png",
                score: "3",
                goals: {
                    goal1: {
                        minute: "10'",
                        player: "Dechira ayman",
                        assist: "Bouhdjar rayane",
                        penalty: false
                    },
                    goal2: {
                        minute: "18'",
                        player: "Bouhdjar rayane",
                        assist: false,
                        penalty:false
                    },
                    goal3: {
                        minute: "25'",
                        player: "Bouhdjar rayane",
                        assist: false,
                        penalty: false
                    },
                },
            },
            teamTwo: {
                name: "widad hai el zitoun",
                flag: "widad hai el zitoun.png",
                score: "1",
                goals: {
                    goal1: {
                        minute: "19'",
                        player: "Chetouane haytem",
                        assist: false,
                        penalty: false
                    },
                },
            },
            group: "Group D",
            time: "08:30",
            match: "20",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
    },
    day8: {
        date: "Saturday 16 September 2023",
        game1: {
            teamOne: {
                name: "wihdat amel bir eldjir",
                flag: "wihdat-amel-bir-eldjir.png",
                score: "2",
                goals: {
                },
            },
            teamTwo: {
                name: "abtal hai yasmine",
                flag: "abtal-hai-yasmine.png",
                score: "6",
                goals: {
                },
            },
            group: "Group A",
            time: "08:30",
            match: "21",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "emir khaled",
                flag: "chabab emir khaled.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "aadl zabana",
                flag: "cazamo.png",
                score: "3",
                goals: {
                },
            },
            group: "Group B",
            time: "08:30",
            match: "22",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "chabeb fajer wahran",
                flag: "fajr-wahran.png",
                score: "7",
                goals: {
                },
            },
            teamTwo: {
                name: "widad amal carteaux",
                flag: "widad-amal-carteaux.png",
                score: "0",
                goals: {
                },
            },
            group: "Group A",
            time: "09:15",
            match: "23",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "taraji senia",
                flag: "esperance es-senia.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "chorouk castor",
                flag: "chorouk castor.png",
                score: "3",
                goals: {
                },
            },
            group: "Group B",
            time: "09:15",
            match: "24",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
    },
    day9: {
        date: "Sunday 17 September 2023",
        game1: {
            teamOne: {
                name: "j.t oranais",
                flag: "talent.png",
                score: "6",
                goals: {
                },
            },
            teamTwo: {
                name: "aaawo",
                flag: "aaawo.png",
                score: "2",
                goals: {
                },
            },
            group: "Group C",
            time: "08:30",
            match: "25",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "espoir sport city",
                flag: "espoir sport city.png",
                score: "3",
                goals: {
                },
            },
            teamTwo: {
                name: "jil monte carlo",
                flag: "jil monte carlo.png",
                score: "4",
                goals: {
                },
            },
            group: "Group D",
            time: "08:30",
            match: "26",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "rmot",
                flag: "csarmot.png",
                score: "11",
                goals: {
                },
            },
            teamTwo: {
                name: "pepso",
                flag: "pepso.png",
                score: "3",
                goals: {
                },
            },
            group: "Group C",
            time: "09:15",
            match: "27",
            city: "Oran",
            stadium: "Stade Proxomite Emir Hai Yasmine",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "yaghmoracen jyo",
                flag: "yaghmouracen2.png",
                score: "4",
                goals: {
                },
            },
            teamTwo: {
                name: "widad hai el zitoun",
                flag: "widad hai el zitoun.png",
                score: "0",
                goals: {
                },
            },
            group: "Group D",
            time: "09:15",
            match: "28",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
    },
    day10: {
        date: "Friday 29 September 2023",
        game5: {
            teamOne: {
                name: "abtal hai yasmine",
                flag: "abtal-hai-yasmine.png",
                score: "2",
                goals: {
                    
                },
            },
            teamTwo: {
                name: "chabeb fajer wahran",
                flag: "fajr-wahran.png",
                score: "3",
                goals: {
                },
            },
            group: "Group A",
            time: "08:30",
            match: "29",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game1: {
            teamOne: {
                name: "canastel",
                flag: "canastel.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "wihdat amel bir eldjir",
                flag: "wihdat-amel-bir-eldjir.png",
                score: "3",
                goals: {
                },
            },
            group: "Group A",
            time: "08:30",
            match: "30",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "yaghmouracen jil",
                flag: "yaghmouracen.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "aadl zabana",
                flag: "cazamo.png",
                score: '2',
                goals: {
                },
            },
            group: "Group B",
            time: "08:30",
            match: "31",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "abtal hai yasmine",
                flag: "abtal-hai-yasmine.png",
                score: "8",
                goals: {
                },
            },
            teamTwo: {
                name: "widad amal carteaux",
                flag: "widad-amal-carteaux.png",
                score: "0",
                goals: {
                },
            },
            group: "Group A",
            time: "09:15",
            match: "32",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "emir khaled",
                flag: "chabab emir khaled.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "chorouk castor",
                flag: "chorouk castor.png",
                score: "3",
                goals: {
                },
            },
            group: "Group B",
            time: "09:15",
            match: "33",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game6: {
            teamOne: {
                name: "aaawo",
                flag: "aaawo.png",
                score: "3",
                goals: {
                    
                },
            },
            teamTwo: {
                name: "espoir senia",
                flag: "espoir senia.png",
                score: "0",
                goals: {
                    
                },
            },
            group: "Group C",
            time: "09:00",
            match: "34",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
    },
    day11: {
        date: "Saturday 30 September 2023",
        game1: {
            teamOne: {
                name: "j.t oranais",
                flag: "talent.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "espoir senia",
                flag: "espoir senia.png",
                score: "2",
                goals: {
                },
            },
            group: "Group C",
            time: "08:30",
            match: "35",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game3: {
            teamOne: {
                name: "espoir sport city",
                flag: "espoir sport city.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "kawkeb sportif oran",
                flag: "kso.png",
                score: "3",
                goals: {
                },
            },
            group: "Group D",
            time: "08:30",
            match: "36",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game5: {
            teamOne: {
                name: "yaghmouracen jil",
                flag: "yaghmouracen.png",
                score: "0",
                goals: {
                    
                },
            },
            teamTwo: {
                name: "taraji senia",
                flag: "esperance es-senia.png",
                score: "4",
                goals: {
                    
                },
            },
            group: "Group B",
            time: "08:30",
            match: "37",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game4: {
            teamOne: {
                name: "yaghmoracen jyo",
                flag: "yaghmouracen2.png",
                score: "1",
                goals: {
                },
            },
            teamTwo: {
                name: "jil monte carlo",
                flag: "jil monte carlo.png",
                score: "3",
                goals: {
                },
            },
            group: "Group D",
            time: "09:15",
            match: "38",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "aaawo",
                flag: "aaawo.png",
                score: "0",
                goals: {
                },
            },
            teamTwo: {
                name: "pepso",
                flag: "pepso.png",
                score: "3",
                goals: {
                },
            },
            group: "Group C",
            time: "09:15",
            match: "39",
            city: "Oran",
            stadium: "Stade Proxomite Emir Hai Yasmine",
            highlight: "#"
        },
        game6: {
            teamOne: {
                name: "jil monte carlo",
                flag: "jil monte carlo.png",
                score: "3",
                goals: {
                    
                },
            },
            teamTwo: {
                name: "kawkeb sportif oran",
                flag: "kso.png",
                score: "0",
                goals: {
                    
                },
            },
            group: "Group D",
            time: "10:00",
            match: "40",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
    },
    day12: {
        date: "Tuesday 13 October 2023",
        game1: {
            teamOne: {
                name: "canastel",
                flag: "canastel.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "aadl zabana",
                flag: "cazamo.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Quarter Final",
            time: "08:30",
            match: "41",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "chorouk castor",
                flag: "chorouk castor.png",
                score: false,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "chabeb fajer wahran",
                flag: "fajr-wahran.png",
                score: false,
                goals: {
                    
                },
            },
            group: "Quarter Final",
            time: "09:15",
            match: "42",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        }
    },
    day13: {
        date: "Friday 14 October 2023",
        game1: {
            teamOne: {
                name: "yaghmoracen jyo",
                flag: "yaghmouracen2.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "rmot",
                flag: "csarmot.png",
                score: false,
                goals: {
                    
                }
            },
            group: "Quarter Final",
            time: "08:30",
            match: "43",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "espoir senia",
                flag: "espoir senia.png",
                score: false,
                goals: {
                    
                }
            },
            teamTwo: {
                name: "jil monte carlo",
                flag: "jil monte carlo.png",
                score: false,
                goals: {
                    
                },
            },
            group: "Quarter Final",
            time: "09:15",
            match: "44",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        }
    },
    day14: {
        date: "Saturday 21 October 2023",
        game1: {
            teamOne: {
                name: "winner 41",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            teamTwo: {
                name: "winner 43",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            group: "Semi Final",
            time: "09:00",
            match: "45",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
        },
        game2: {
            teamOne: {
                name: "winner 42",
                flag: "empty.png",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "winner 44",
                flag: "empty.png",
                score: false,
                goals: {
                },
                // winner: true
            },
            group: "Semi Final",
            time: "10:00",
            match: "46",
            city: "Oran",
            stadium: "Stade Proxomite Emir Khaled",
            highlight: "#"
            // drawInfo: {
            //     winnerTeam: "bayern munchen",
            //     scoreOne: "5",
            //     scoreTwo: "4"
            // }
        }
    },
    day15: {
        date: "Saturday 28 October 2023",
        game1: {
            teamOne: {
                name: "Winner 45",
                flag: "empty.png",
                score: false,
                goals: {
                },
            },
            teamTwo: {
                name: "Winner 46",
                flag: "empty.png",
                score: false,
                goals: {
                    
                },
            },
            group: "Final",
            time: "09:00",
            match: "47",
            city: "Oran",
            stadium: "Stade Proxomite Hai Yasmine",
            highlight: "#"
        }
    }
}
    
let dayss = Object.values(days)
// End All Games & Scores Data



// Start Groups Data
// const groupA = {
//     t2: {
//         played: 4,
//         win: 3,
//         draw: 0,
//         lose: 1,
//         GoalDifference: +10,
//         points: 9,
//         subName: "CSJC",
//         flagPic: "canastel.png",
//         qualified: true
//     },
//     t3: {
//         played: 3,
//         win: 2,
//         draw: 0,
//         lose: 1,
//         GoalDifference: 12,
//         points: 6,
//         subName: "CFO",
//         flagPic: "fajr-wahran.png"
//     },
//     t1: {
//         played: 3,
//         win: 2,
//         draw: 0,
//         lose: 1,
//         GoalDifference: 6,
//         points: 6,
//         subName: "AHY",
//         flagPic: "abtal-hai-yasmine.png"
//     },
//     t5: {
//         played: 4,
//         win: 2,
//         draw: 0,
//         lose: 2,
//         GoalDifference: -4,
//         points: 6,
//         subName: "WAB",
//         flagPic: "wihdat-amel-bir-eldjir.png"
//     },
//     t4: {
//         played: 4,
//         win: 0,
//         draw: 0,
//         lose: 4,
//         GoalDifference: -24,
//         points: 0,
//         subName: "WAC",
//         flagPic: "widad-amal-carteaux.png"
//     },
// }
// const groupB = {
//     t3: {
//         played: 4,
//         win: 4,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 11,
//         points: 12,
//         subName: "CSC",
//         flagPic: "chorouk castor.png",
//         qualified: true
//     },
//     t1: {
//         played: 4,
//         win: 3,
//         draw: 0,
//         lose: 1,
//         GoalDifference: 5,
//         points: 9,
//         subName: "WZM",
//         flagPic: "cazamo.png",
//         qualified: true
//     },
//     t4: {
//         played: 3,
//         win: 1,
//         draw: 0,
//         lose: 2,
//         GoalDifference: -5,
//         points: 3,
//         subName: "ESS",
//         flagPic: "esperance es-senia.png"
//     },
//     t5: {
//         played: 3,
//         win: 0,
//         draw: 1,
//         lose: 2,
//         GoalDifference: -4,
//         points: 1,
//         subName: "JIL",
//         flagPic: "yaghmouracen.png"
//     },
//     t2: {
//         played: 4,
//         win: 0,
//         draw: 1,
//         lose: 3,
//         GoalDifference: -7,
//         points: 1,
//         subName: "CAK",
//         flagPic: "chabab emir khaled.png"
//     },
// }
// const groupC = {
//     t2: {
//         played: 4,
//         win: 4,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 23,
//         points: 12,
//         subName: "RMT",
//         flagPic: "csarmot.png",
//         qualified: true
//     },
//     t5: {
//         played: 4,
//         win: 2,
//         draw: 0,
//         lose: 2,
//         GoalDifference: 2,
//         points: 6,
//         subName: "JO",
//         flagPic: "talent.png"
//     },
//     t3: {
//         played: 3,
//         win: 2,
//         draw: 0,
//         lose: 1,
//         GoalDifference: -3,
//         points: 6,
//         subName: "AAS",
//         flagPic: "espoir senia.png"
//     },
//     t4: {
//         played: 4,
//         win: 1,
//         draw: 0,
//         lose: 3,
//         GoalDifference: -10,
//         points: 3,
//         subName: "CSA",
//         flagPic: "pepso.png"
//     },
//     t1: {
//         played: 3,
//         win: 0,
//         draw: 0,
//         lose: 3,
//         GoalDifference: -12,
//         points: 0,
//         subName: "AWO",
//         flagPic: "aaawo.png"
//     },
// }
// const groupD = {
//     t4: {
//         played: 4,
//         win: 3,
//         draw: 0,
//         lose: 1,
//         GoalDifference: 8,
//         points: 9,
//         subName: "JYO",
//         flagPic: "yaghmouracen2.png",
//         qualified: true
//     },
//     t1: {
//         played: 3,
//         win: 3,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 5,
//         points: 9,
//         subName: "JMC",
//         flagPic: "jil monte carlo.png",
//         qualified: true
//     },
//     t5: {
//         played: 3,
//         win: 1,
//         draw: 1,
//         lose: 1,
//         GoalDifference: -2,
//         points: 4,
//         subName: "KSO",
//         flagPic: "kso.png"
//     },
//     t2: {
//         played: 4,
//         win: 1,
//         draw: 1,
//         lose: 2,
//         GoalDifference: -5,
//         points: 4,
//         subName: "WHZ",
//         flagPic: "widad hai el zitoun.png"
//     },
//     t3: {
//         played: 4,
//         win: 0,
//         draw: 0,
//         lose: 4,
//         GoalDifference: -6,
//         points: 0,
//         subName: "SC",
//         flagPic: "espoir sport city.png"
//     },
// }
// const groupE = {
//     madrid: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "RMA",
//         flagPic: "real madrid.png",
//         file: "real madrid.html"
//     },
//     totenham: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "TOT",
//         flagPic: "totenham.png"
//     },
//     galatasaray: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "GAL",
//         flagPic: "galata saray.png"
//     },
//     lazio: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "LAZ",
//         flagPic: "lazio.png"
//     }
// }
// const groupF = {
//     roma: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "ROM",
//         flagPic: "roma.jpg"
//     },
//     leister: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "LEI",
//         flagPic: "leicester.jpg"
//     },
//     ajax: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "AJX",
//         flagPic: "ajax.jpg"
//     },
//     lyon: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "LYO",
//         flagPic: "lyon.png"
//     }
// }
// const groupG = {
//     porto: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "POR",
//         flagPic: "porto.png"
//     },
//     valencia: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "VAL",
//         flagPic: "valencia.png"
//     },
//     lisbon: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "SCP",
//         flagPic: "lisbon.png"
//     },
//     shakhtar: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "SHK",
//         flagPic: "shakhtar.jpg"
//     }
// }
// const groupH = {
//     benfica: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "BEN",
//         flagPic: "benfica.png"
//     },
//     villarreal: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "VIL",
//         flagPic: "villarreal.jpg"
//     },
//     sevilla: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "SEV",
//         flagPic: "sevilla.jpg"
//     },
//     leipzig: {
//         played: 0,
//         win: 0,
//         draw: 0,
//         lose: 0,
//         GoalDifference: 0,
//         points: 0,
//         subName: "RBL",
//         flagPic: "leipzig.png"
//     }
// }
// End Groups Data
let groupA = ["abtal hai yasmine", "chabeb fajer wahran", "canastel", "wihdat amel bir eldjir", "widad amal carteaux"]
let groupB = [ "aadl zabana","taraji senia", "chorouk castor", "yaghmouracen jil", "emir khaled"]
let groupC = ["rmot", "j.t oranais", "espoir senia", "pepso", "aaawo",]
let groupD = ["jil monte carlo", "yaghmoracen jyo", "kawkeb sportif oran", "widad hai el zitoun", "espoir sport city",]




// Start Latest News Data
let newsData = {
    news10: {
        img: "news10.jpg",
        header: " قرعة الدور الربع نهائي",
        description: "إصطدام قوي لأصحاب الريادة في الدور الربع نهائي البلاي أوف فئة اقل 13 سنة و لا حديث الا عن التأهل إلى الدور النصف نهائي .",
        date: "12 Oct 2023",
        lan: "arabic",
        postId: "n10",
    },
    // news9: {
    //     img: "news9.jpg",
    //     header: " قرعة الدور التمهيدي الأول",
    //     description: "رسميا تم تحديد يوم  الجمعة 22 سبتمبر 2023 لاجراء قرعة الكأس في دورها التمهيدي الأول",
    //     date: "20 Sep 2023",
    //     lan: "arabic",
    //     postId: "n9",
    //     // video: "TVV95Cw05og?si=Vl6BRuQVvy3K1I77"
    // },
    news8: {
        img: "yaghmouracen2.png",
        header: "JYO الى الدور الثاني",
        description: "جيل يغموراسن يضفر اليوم بمرتبة مؤهلة للدور الثاني بعد رباعية كاملة أمام منافس لم يكن في يومه وداد حي الزيتون",
        date: "17 Sep 2023",
        lan: "arabic",
        postId: "n8"
    },
    news7: {
        img: "csarmot.png",
        header: "RMOT | العلامة الكاملة",
        description: "رائد مستقبل واد تليلات ينهي دور المجموعات بالعلامة الكاملة في مشوار البطولة و التأهل الرسمي للدور الثاني PLAY OF في انتضار من سيكون المنافس",
        date: "17 Sep 2023",
        lan: "arabic",
        postId: "n7"
    },
    news6: {
        img: "news6.jpg",
        header: "CFO | الطريق نحو التأهل",
        description: "بعد الأداء الرائع ونتيجة اليوم المبشرة, شباب فجر وهران يسير نحو التأهل للدور الثاني من البلاي أوف بقيادة الكوتش عبدالخالق قديدر",
        date: "16 Sep 2023",
        lan: "arabic",
        postId: "n6"
    },
    news5: {
        img: "news5.jpg",
        header: "شروق كاسطور في الصدارة",
        description: "ثلاثي فريق شروق كاسطور يضرب بثلاثية كاملة و يضع فريقه في صدارة ترتيب المجموعة B",
        date: "16 Sep 2023",
        lan: "arabic",
        postId: "n5"
    },
    news4: {
        img: "news4.jpg",
        header: "بوحجر ريان يتألق",
        description: "اللاعب بوحجر ريان يقود فريقه في اول ظهور للفوز بثلاثية كاملة في مقابلة دراماتيكية امام منافس عنيد اسمه وداد حي الزيتون ,حيث برز اللاعب بتقديم اسيست و تسجيل هدفين منهم الهدف الثالث الذي قتل المباراة وقتل طموح المنافس في تعديل النتيجة",
        date: "14 Sep 2023",
        lan: "arabic",
        postId: "n4"
    },
    news3: {
        img: "news3.jpg",
        header: " رائد مستقبل واد تليلات RMOT يهيمن",
        description: "رائد مستقبل واد تليلات RMOT يطيح بفريق ودادية قدماء الحكام AAAWO بخماسية كاملة ويواصل صدارتة في المجموعة C بالعلامة الكاملة مع ضمان تأهله للدور القادم" ,
        date: "13 Sep 2023",
        lan: "arabic",
        postId: "n3"
    },
    news2: {
        img: "man-of-the-match.jpg",
        header: "دحو يونس | رجل اللقاء",
        description: "رجل المقابلة لاعب فريق CZM من مباراة CZM و ESS, دحو يونس من مواليد 30 أوت 2012 سجل هدفين و أسيست على طريقة ليونيل ميسي",
        date: "12 Sep 2023",
        lan: "arabic",
        postId: "n2"
    },
    news1: {
        img: "firstNews.jpg",
        header: "بطولة مصغرة تحضيرية",
        description: "بطولة مصغرة على الطريقة الأوروبية و لأول مرة تحضيرا للموسم الرياضي الجديد من تنظيم كفاءات رياضية",
        date: "12 Sep 2023",
        lan: "arabic",
        postId: "n1"
    },
}
let news = Object.values(newsData)
// End Latest News Data


// Start All News Page
if (currentPage.includes("all-news.html")) {
    function allNewsPageHtml(newsBoxes) {
        let allNewsPageHtml = `
        <div class="all-news-page">
            <div class="all-news-header">Latest News</div>
            <div class="all-news">
                ${newsBoxes}
            </div>
        </div>
        `
        pageBody.innerHTML += allNewsPageHtml
    }
    function newsBoxes(...list) {
        let newsBox = `
        <a href="#" class="news-box forNewsPage" id="${list[3]}">
            <div class="image">
                ${list[5]}
                <img src="images/${list[0]}" alt="">
            </div>
            <div class="news-header ${list[2]}">
                <p>${list[1]}</p>
            </div>
        </a>
        `
        list[4].innerHTML += newsBox
        console.log(list[4])
        return list[4].innerHTML
    }


    let newsBoxLocation = document.createElement("div")
    for (let i = 0; i < news.length; i++) {
        let post = Object.values(news[i])
        let video = " "
        if (post[6] !== undefined) {
            video = `<div class="video-icon-in-news-page"></div> `
        }
        let list = [post[0], post[1], post[4], post[5], newsBoxLocation, video]
        if (i === news.length - 1) {
            allNewsPageHtml(newsBoxes(...list))
        } else {
            newsBoxes(...list)
        }
    }
}

// End All News Page


// Start Latest News In Home Page
function postHtml(...list) {
    let postHtml = `
                <div class="post-slide">
                    <div class="post-img">
                        ${list[8]}
                        <img src="images/${list[0]}" alt="">
                        <a href="${list[5]}" class="over-layer forNewsPage" id="${list[7]}"><i class="fa fa-link"></i></a>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title ${list[4]}">
                            <a href="${list[5]}" class="forNewsPage" id="${list[7]}">${list[1]}</a>
                        </h3>
                        <p class="post-description ${list[4]}">${list[2]}</p>
                        <span class="post-date"><i class="fa fa-clock"></i>${list[3]}</span>
                        <a href="${list[5]}" class="read-more forNewsPage" id="${list[7]}">read more</a>
                    </div>
                </div>
    `
    list[6].innerHTML += postHtml
}

let position = document.querySelector("#news-slider")
if (currentPage.includes("index.html")) {
    let newsContainer = document.querySelector(".news-container")
    if (news.length === 0) {
        newsContainer.innerHTML += "No News Available Yet"
        newsContainer.style.margin = "0px auto 20px"
        newsContainer.style.fontWeight = "500"

    }
}
if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    
    for (let i = 0; i < news.length; i++) {
        if (i === 6) {
            break;
        }
        let post = Object.values(news[i])
        let file = "#"
        let video = " "
        if (post[6] !== undefined) {
            video = `<a href="${file}" class="forNewsPage" id="${post[5]}"><div class="video-icon-in-post-slide"></div></a> `
        }
        let list = [post[0], post[1], post[2], post[3], post[4], file, position, post[5], video]
        
        postHtml(...list)
    }
    $(document).ready(function() {
        $("#news-slider").owlCarousel({
            items : 3,
            itemsDesktop:[1199,3],
            itemsDesktopSmall:[980,2],
            itemsMobile : [600,1],
            navigation:true,
            navigationText:["",""],
            pagination:true,
            autoPlay:true
        });
    });
}

// End Latest News In Home Page
// Start News Generate
function newsGenerateHtml(...list) {
    let newsGenerateHtml = `
    <div class="news-generate-page">
        <div class="container">
            <div class="header-section">
                <div class="news-header ${list[4]}">${list[1]}</div>
                <div class="date-section">
                    <p>published:</p>
                    <div class="date">${list[3]}</div>
                </div>
            </div>
            <div class="image">
                ${list[5]}
            </div>
            <div class="news ${list[4]}">
            ${list[2]}
            </div>
            <div class="fullscreen" id="fullscreen">
                <span class="close" onclick="closeFullscreen()">&times;</span>
                <img src="" alt="Fullscreen Image" class="fullscreen-image"id="fullscreen-image">
            </div>
            <div class="fullscreenHighlightNT" id="fullscreenHighlightNT">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                Highlight Not Available
            </div>
        </div>
    </div>
    `
    pageBody.innerHTML += newsGenerateHtml
}
let clickednews = document.querySelectorAll('.forNewsPage');
let newsUrlParams = new URLSearchParams(window.location.search);
let newsId = newsUrlParams.get('id');

if (currentPage.includes("index.html") || currentPage.includes("all-news.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    clickednews.forEach(element => {
        element.addEventListener("click", () => window.location.href = `news-generate.html?id=${element.id}` );
    });
}

for (let i = 0; i < news.length; i++) {
    let post = Object.values(news[i])
    let newsMedia = `<img src="images/${post[0]}" alt="" class="thumbnail" onclick="openImage('images/${post[0]}')"></img>`
    if (post[6] !== undefined) {
        newsMedia = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${post[6]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
    if (newsId === post[5]) {
        let list = [post[0], post[1], post[2], post[3], post[4], newsMedia]
        newsGenerateHtml(...list)
    }
}

// End News Generate








// Start Games & Scores
// Start Games & Scores Functions
function dayHtml(location, date, games, groupsOrBrackets) {
    let day = `
                <div class="day">
                    <div class="day-info">
                        <div class="date">${date}</div>
                        ${groupsOrBrackets}
                    </div>
                    <div class="games">
                        ${games}
                    </div>
                </div>  `
    location.innerHTML += day
}
function gameHtml(penalties, time, ...list) {
    let game = `        
                            <div class="game" id="g${list[10]}">
                                <div class="game-body">
                                    <div class="game-number">Match ${list[10]}, ${list[1]}</div>
                                    <div class="game-score">
                                        <div class="left-team">
                                            <div class="team-name">
                                                <div class="name">${list[3]}
                                                    ${list[13]}
                                                </div>
                                                <div class="flag" ${list[11]}><img src="images/${list[4]}" alt=""></div>
                                            </div>
                                            ${list[8]}
                                            ${list[7]}
                                        </div>
                                        <div class="right-team">
                                        ${list[9]}
                                            <div class="team-name">
                                                <div class="flag" ${list[12]}><img src="images/${list[6]}" alt=""></div>
                                                <div class="name">${list[5]}
                                                    ${list[14]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="${time} time">${list[2]}</div>
                                </div>
                                ${penalties}
                            </div>
                        
    `
        list[0].innerHTML += game
        return list[0].innerHTML
}
function createDay(day, today, specialTeam, playedNum) {
    let daysLocation = document.querySelector(".days-js")
    let div = document.createElement("div")
    let vsCommented = '<!-- <div class="vs">VS</div> -->'
    let vsNotCommented = '<div class="vs">VS</div>'
    let scoreCommented = '<!-- <div class="team-score">8</div> -->'
    let num =0
    for (let i = 0; i < day.length - 1; i++) {
        let forbid = 0
        for (let t = 0; t < day.length - 1; t++) {
            let game = Object.values(day[t + 1])
            let teamOne = Object.values(game[0])
            let teamTwo = Object.values(game[1])
            if (!(specialTeam === undefined)) {
                if (teamOne[0].toLowerCase() === specialTeam || teamTwo[0].toLowerCase() === specialTeam) {
                    forbid += 1
                }
            }
        }
        // console.log(forbid)
        let game = Object.values(day[i + 1])
        let teamOne = Object.values(game[0])
        let teamTwo = Object.values(game[1])
        let flag = `style="border: 3px solid rgb(16, 30, 63);"`
        let groupsOrBrackets = `<a href="knockout.html">View Brackets</a>`
        let time = ""
        let penalties = ``
        let winnerTeam = `<div class="winner"></div>`

        if (teamOne[2] === false || teamTwo[2] === false) {
            list = [div, game[2], game[3], teamOne[0], teamOne[1], teamTwo[0], teamTwo[1], vsNotCommented, scoreCommented, scoreCommented, game[4]]
            time = "notPlayedYet"
        } else {
            let scoreNotCommented1 = `<div class="team-score">${teamOne[2]}</div>`
            let scoreNotCommented2 = `<div class="team-score">${teamTwo[2]}</div>`
            list = [div, game[2], game[3], teamOne[0], teamOne[1], teamTwo[0], teamTwo[1], vsCommented, scoreNotCommented1, scoreNotCommented2, game[4]]
        }


        if (teamOne[1] === "empty.png") {
            list.push(flag)
        } else {
            list.push("full")
        }
        if (teamTwo[1] === "empty.png") {
            list.push(flag)
        } else {
            list.push("full")
        }

        if (teamOne[4] !== undefined) {
            list.push(winnerTeam)
        } else {
            list.push(" ")
        }
        if (teamTwo[4] !== undefined) {
            list.push(winnerTeam)
        } else {
            list.push(" ")
        }

        if (game[2].includes("Group")) {
            groupsOrBrackets = `<a href="group-stage.html">View Groups</a>`
        }

        if (game[8] !== undefined) {
            let drawInfo = Object.values(game[8])
            penalties = `
            <div class="penalties">
                <div class="penalties-score">${drawInfo[1]} <span class="empty-span"></span> <span class="dot-span">.</span> ${drawInfo[2]}</div>
                <p>${drawInfo[0]} wins ${drawInfo[1]} - ${drawInfo[2]} on penalties</p>
            </div>
            `
        }
        
        if (specialTeam === undefined) {
            
            if (i === day.length - 2) {
                dayHtml(daysLocation, today, gameHtml(penalties, time, ...list), groupsOrBrackets)
            } else {
                gameHtml(penalties, time, ...list)
            }
        } else {
            // console.log(day[0])
            // console.log(i)
            if (teamOne[0].toLowerCase() === specialTeam || teamTwo[0].toLowerCase() === specialTeam) {
                num += 1
                if ((forbid === 1)) {
                    dayHtml(daysLocation, today, gameHtml(penalties, time, ...list), groupsOrBrackets)    
                }
                if ((forbid >= 2)) {
                    if (num === forbid) {
                        dayHtml(daysLocation, today, gameHtml(penalties, time, ...list), groupsOrBrackets)    
                        
                    } else {
                        gameHtml(penalties, time, ...list)
                        
                    }
                }
                
                
            }
        }
        
    }
}
// End Games & Scores Functions

// Start Games And Scores In Home Page
var date = new Date()
let dayName = date.getDay() + 1
let dayNumber = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
function dateConventer(dayName, dayNumber, month, year) {
    if (dayName === 0) {
        dayName = 7
    }
    if (dayName === -1) {
        dayName = 6
    }
    if (dayName === -2) {
        dayName = 5
    }
    if (dayName === -3) {
        dayName = 4
    }
    if (dayName === -4) {
        dayName = 3
    }
    switch (dayName) {
        case 1:
            dayName = "Sunday";
            break
        case 2:
            dayName = "Monday";
            break
        case 3:
            dayName = "Tuesday";
            break
        case 4:
            dayName = "Wednesday";
            break
        case 5:
            dayName = "Thursday";
            break
        case 6:
            dayName = "Friday";
            break
        case 7:
            dayName = "Saturday";
            break
    }
    switch (month) {
        case 1:
            month = "January";
            break
        case 2:
            month = "February";
            break
        case 3:
            month = "March";
            break
        case 4:
            month = "April";
            break
        case 5:
            month = "May";
            break
        case 6:
            month = "June";
            break
        case 7:
            month = "July";
            break
        case 8:
            month = "August";
            break
        case 9:
            month = "September";
            break
        case 10:
            month = "October";
            break
        case 11:
            month = "November";
            break
        case 12:
            month = "December";
            break
    }
    let fullDate = `${dayName} ${dayNumber} ${month} ${year}`
    let dateNumber = fullDate.split(" ")[1]
    if (dateNumber.length < 2) {
        fullDate = `${dayName} 0${dayNumber} ${month} ${year}`
    }
    return fullDate
}
function creatDayInHomePage(fullDate) {
    let num = 0
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        if (day[0] === fullDate) {
            if (dayss[j - 1] !== undefined) {
                let day = Object.values(dayss[j - 1])
                createDay(day, day[0])
            }
            num += 1
        } 
        if (num === 1) {
            fullDate = dateConventer(dayName, dayNumber, month, year)
            day = Object.values(dayss[j])
            if (day[0] === fullDate) {
                createDay(day, "Today")
            } else {
                createDay(day, day[0])
            }
            
            num += 1
        }


        // if (num === 2) {
        //     if (dayss[j + 1] !== undefined) {
        //         day = Object.values(dayss[j + 1])
        //         today = "Tomorrow"
        //         createDay(day, today)
        //     }
        //     num += 1
        // }
    }
    return num
}
if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    let fullDate = dateConventer(dayName, dayNumber, month, year) 
    let returnedNum = creatDayInHomePage(fullDate)
    if (returnedNum === 0) {
        fullDate = dateConventer(dayName - 1, dayNumber - 1, month, year)
        returnedNum = creatDayInHomePage(fullDate)
    }
    if (returnedNum === 0) {
        fullDate = dateConventer(dayName - 2, dayNumber - 2, month, year)
        returnedNum = creatDayInHomePage(fullDate)
    }
    if (returnedNum === 0) {
        fullDate = dateConventer(dayName - 3, dayNumber - 3, month, year)
        returnedNum = creatDayInHomePage(fullDate)
    }
    if (returnedNum === 0) {
        fullDate = dateConventer(dayName - 4, dayNumber - 4, month, year)
        returnedNum = creatDayInHomePage(fullDate)
    }
    if (returnedNum === 0) {
        fullDate = dateConventer(dayName - 4, dayNumber - 4, month, year)
        returnedNum = creatDayInHomePage(fullDate)
    }
    if (returnedNum === 0) {
        createDay(Object.values(dayss[dayss.length - 2]), Object.values(dayss[dayss.length - 2])[0])
        createDay(Object.values(dayss[dayss.length - 1]), Object.values(dayss[dayss.length - 1])[0])
    }
}
// End Games And Scores In Home Page

// Start scroll to todays date function in Games & Scores
function getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return rect.top + scrollTop
}
if (currentPage.includes("games-and-scores.html")) {  
    let position = 0
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        createDay(day, day[0])
    }

    let special = document.querySelectorAll(".date")
    let fixed = document.querySelector(".fixed")
    for (let i = 0; i < special.length; i++) {
        special = document.querySelectorAll(".date")
        fullDate = dateConventer(dayName, dayNumber, month, year)
        if (special[i].innerText === fullDate) {

            position = getElementPosition(special[i]) - 130;

            if (i !== 0) {
                window.scrollTo({ top: position, behavior: "auto" });
            }
            
        } else {
            fullDate = dateConventer(dayName - 1, dayNumber - 1, month, year)
            if (special[i].innerText === fullDate) {
                position = getElementPosition(special[i]) - 130;
    
                if (i !== 0) {
                    window.scrollTo({ top: position, behavior: "auto" });
                }
            } else {
                fullDate = dateConventer(dayName - 2, dayNumber - 2, month, year)
                if (special[i].innerText === fullDate) {
                    position = getElementPosition(special[i]) - 130;
        
                    if (i !== 0) {
                        window.scrollTo({ top: position, behavior: "auto" });
                    }
                }
            }
        }
    }
    window.onscroll = function () {
        if (window.scrollY - 1 < position) {
            fixed.style.position = "fixed"
            fixed.style.top = "0"
            fixed.style.marginTop = `0`
        } else {
            fixed.style.marginTop = `${position}`
            fixed.style.position = "absolute"
        }
    }
    
    
}
// End scroll to todays date function in Games & Scores
// End Games & Scores



// Start Group Stage
// Start Group Stage Functions
function groupCreat(groupName, location, teamLine, gs, gc) {
    let boxHeader = `
                        <h3>${groupName}</h3>
                        <div class="spans">
                            <span>P</span>
                            <span>W</span>
                            <span>D</span>
                            <span>L</span>
                            ${gs}
                            ${gc}
                            <span>GD</span>
                            <span>Pts</span>
                        </div>
                    `
    let groupBox = `
                <div class="box">
                    <div class="box-header box-header-js">
                        ${boxHeader}
                    </div>
                    <div class="teams">
                        ${teamLine}
                    </div>
                </div>
                `
    location.innerHTML += groupBox
}
function teamlines(...list) {
    let teamLine = `
                        <div class="team" ${list[12]}>
                            <div class="info">
                                <span class="qualified">${list[8]}</span>
                                <a href="team-profile-generate.html?id=${list[10]}" class="teamForProfile" id="${list[10]}">
                                    <div class="flag"><img src="images/${list[7]}" alt=""></div>
                                    <div class="name">${list[6]}
                                    <div class="qualifiedText">${list[11]}</div>
                                    </div>
                                </a>
                            </div>
                            <div class="stats">
                                <span>${list[0]}</span> <!-- games played -->
                                <span>${list[1]}</span> <!-- games win -->
                                <span>${list[2]}</span> <!-- games draw -->
                                <span>${list[3]}</span> <!-- games lose -->
                                ${list[13]} <!-- goals scored -->
                                ${list[14]} <!-- goals conceded -->
                                <span>${list[4]}</span> <!-- goal difference -->
                                <span>${list[5]}</span> <!-- points -->
                            </div>
                        </div>
                `
    list[9].innerHTML += teamLine
    return list[9].innerHTML
}
function alreadyQualified(group) {
    let firtsTeamQualified = 0
    let secondTeamQualified = 0
    let thirdTeamQualified = 0
    let forthTeamQualified = 0
    let fifthTeamQualified = 0
    let totalGamesInGroupStageForOneTeam = group.length - 1
    let actualPoints = []
    let maxPoints = []
    let playedArray = []
    for (let b = 0; b < group.length; b++) {
        let teamName = group[b]
        let played = 0
        let win = 0
        let draw = 0
        let lose = 0
        let points = 0
        let totalGoalScored = 0
        let totalGoalConceded = 0
        let goalDifference = 0
        for (let i = 0; i < dayss.length; i++) {
            let day = Object.values(dayss[i])
            for (let j = 0; j < day.length - 1; j++) {
                let game = Object.values(day[j + 1])
                let teamOne = Object.values(game[0])
                let teamTwo = Object.values(game[1])
                if (teamOne[0] === teamName && teamOne[2] !== false) {
                    played += 1
                    let goalScored = parseInt(teamOne[2])
                    let goalConceded = parseInt(teamTwo[2])
                    totalGoalScored += parseInt(teamOne[2])
                    totalGoalConceded += parseInt(teamTwo[2])
                    if (goalScored > goalConceded) {
                        win += 1
                    }
                    if (goalScored < goalConceded) {
                        lose += 1
                    }
                    if (goalScored === goalConceded) {
                        draw += 1
                    }
                }
                if (teamTwo[0] === teamName && teamTwo[2] !== false) {
                    played += 1
                    let goalScored = parseInt(teamTwo[2])
                    let goalConceded = parseInt(teamOne[2])
                    totalGoalScored += parseInt(teamTwo[2])
                    totalGoalConceded += parseInt(teamOne[2])
                    if (goalScored > goalConceded) {
                        win += 1
                    }
                    if (goalScored < goalConceded) {
                        lose += 1
                    }
                    if (goalScored === goalConceded) {
                        draw += 1
                    }
                }
            }
        }
        goalDifference = totalGoalScored - totalGoalConceded
        points = win * 3 + lose * 0 + draw * 1
        if (b === 0) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 1) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 2) {
            actualPoints.push(points)
            maxPoints.push( points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 3) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
        if (b === 4) {
            actualPoints.push(points)
            maxPoints.push(points + (totalGamesInGroupStageForOneTeam - played) * 3)
            playedArray.push(played)
        }
    }
    
    for (let h = 0; h < actualPoints.length; h++) {
        let teamPoints = actualPoints[h]
        let aboveFirst = []
        for (let u = 0; u < maxPoints.length; u++) {
            if (h !== u) {
                if (teamPoints <= maxPoints[u]) {
                    if (h === 0) {
                        if (((teamPoints === maxPoints[u]) && (playedArray[0] === totalGamesInGroupStageForOneTeam && playedArray[u] === totalGamesInGroupStageForOneTeam))) {
                            firtsTeamQualified -= 1
                        }
                        aboveFirst.push(group[u])
                        firtsTeamQualified += 1
                    }
                    if (h === 1) {
                        secondTeamQualified += 1
                    }
                    if (h === 2) {
                        thirdTeamQualified += 1
                    }
                    if (h === 3) {
                        forthTeamQualified += 1
                    }
                    if (h === 4) {
                        fifthTeamQualified += 1
                    }
                }
            }
        }
        if (aboveFirst.length === 2) {
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (((teamOne[0] === aboveFirst[0] || teamTwo[0] === aboveFirst[0]) && (teamOne[0] === aboveFirst[1] || teamTwo[0] === aboveFirst[1])) && (teamOne[2] === false && teamTwo[2] === false)) {
                        firtsTeamQualified -= 1
                    }
                }
            }
        }
        
    }
    if (firtsTeamQualified > 1) {
        firtsTeamQualified = false
    } else {
        firtsTeamQualified = true
    }
    if (secondTeamQualified > 1) {
        secondTeamQualified = false
    } else {
        secondTeamQualified = true
    }
    if (thirdTeamQualified > 1) {
        thirdTeamQualified = false
    } else {
        thirdTeamQualified = true
    }
    if (forthTeamQualified > 1) {
        forthTeamQualified = false
    } else {
        forthTeamQualified = true
    }
    if (fifthTeamQualified > 1) {
        fifthTeamQualified = false
    } else {
        fifthTeamQualified = true
    }
    let totalNumberOfGroupGames = sortedGroups[0].length * (sortedGroups[0].length - 1)
    let playedNumberOfGroupGames = 0
    for (let j = 0; j < playedArray.length; j++){
        playedNumberOfGroupGames += playedArray[j]
    }
    
    if (totalNumberOfGroupGames === playedNumberOfGroupGames) {
        firtsTeamQualified = true
        secondTeamQualified = true
    }
    return [firtsTeamQualified , secondTeamQualified]
}
// End Group Stage Functions
// Start Sorting Group Teams
let groups = [groupA, groupB, groupC, groupD]
for (let n = 0; n < groups.length; n++) {
    let sortedGroup = []
    for (let x = 0; x < groups[n].length; x++) {
        let firstP = " "
        let pointsFirstP = -1
        let goalDifferenceFirstP = 0
        let totalGoalScoredFirstP = 0
        for (let b = 0; b < groups[n].length; b++) {
            let teamName = groups[n][b]
            let played = 0
            let win = 0
            let draw = 0
            let lose = 0
            let points = 0
            let totalGoalScored = 0
            let totalGoalConceded = 0
            let goalDifference = 0
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (teamOne[0] === teamName && teamOne[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamOne[2])
                        let goalConceded = parseInt(teamTwo[2])
                        totalGoalScored += parseInt(teamOne[2])
                        totalGoalConceded += parseInt(teamTwo[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                    if (teamTwo[0] === teamName && teamTwo[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamTwo[2])
                        let goalConceded = parseInt(teamOne[2])
                        totalGoalScored += parseInt(teamTwo[2])
                        totalGoalConceded += parseInt(teamOne[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                            if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                }
                goalDifference = totalGoalScored - totalGoalConceded
                points = win * 3 + lose * 0 + draw * 1
            }
            if (sortedGroup.includes(teamName)) {
                // console.log("heloo")
            } else {
                if (points > pointsFirstP) {
                    pointsFirstP = points
                    goalDifferenceFirstP = goalDifference
                    totalGoalScoredFirstP = totalGoalScored
                    firstP = teamName
                } else if (points === pointsFirstP) {
                    if (goalDifference > goalDifferenceFirstP) {
                        firstP = teamName
                        totalGoalScoredFirstP = totalGoalScored
                    } else if (goalDifference === goalDifferenceFirstP) {
                        if (totalGoalScored > totalGoalScoredFirstP) {
                            totalGoalScoredFirstP = totalGoalScored
                            firstP = teamName
                        }
                    }
                }
            }
        }
        sortedGroup.push(firstP)
    }
    if (n === 0) {
        groupA = sortedGroup
    } else if (n === 1) {
        groupB = sortedGroup
    } else if (n === 2) {
        groupC = sortedGroup
    } else if (n === 3) {
        groupD = sortedGroup
    } 
}
let sortedGroups = [groupA, groupB, groupC, groupD]
// End Sorting Group Teams
// Start Group Stage Page
if (currentPage.includes("group-stage.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    let groupNames = ["Group A", "Group B", "Group C", "Group D"]
    for (let n = 0; n < sortedGroups.length; n++) {
        let div = document.createElement("div")
        for (let b = 0; b < sortedGroups[n].length; b++) {
            let teamName = sortedGroups[n][b]
            let file = teamNameId(sortedGroups[n][b])
            let changeBg = " "
            let qualified = " "
            let gs = " "
            let gc = " "
            let gsScore = " "
            let gcScore = " "
            let played = 0
            let win = 0
            let draw = 0
            let lose = 0
            let points = 0
            let totalGoalScored = 0
            let totalGoalConceded = 0
            let goalDifference = 0
            let subName = " "
            let flagPic = " "
            for (let i = 0; i < AllTeams.length; i++) {
                let team = Object.values(AllTeams[i])
                if (teamName === team[0]) {
                    subName = team[1]
                    flagPic = team[2]
                }
            }
            for (let i = 0; i < dayss.length; i++) {
                let day = Object.values(dayss[i])
                for (let j = 0; j < day.length - 1; j++) {
                    let game = Object.values(day[j + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (teamOne[0] === teamName && teamOne[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamOne[2])
                        let goalConceded = parseInt(teamTwo[2])
                        totalGoalScored += parseInt(teamOne[2])
                        totalGoalConceded += parseInt(teamTwo[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                    if (teamTwo[0] === teamName && teamTwo[2] !== false) {
                        played += 1
                        let goalScored = parseInt(teamTwo[2])
                        let goalConceded = parseInt(teamOne[2])
                        totalGoalScored += parseInt(teamTwo[2])
                        totalGoalConceded += parseInt(teamOne[2])
                        if (goalScored > goalConceded) {
                            win += 1
                        }
                        if (goalScored < goalConceded) {
                            lose += 1
                        }
                        if (goalScored === goalConceded) {
                            draw += 1
                        }
                    }
                }
            }
            goalDifference = totalGoalScored - totalGoalConceded
            points = win * 3 + lose * 0 + draw * 1
            
            
            if (b === 0) {
                if (alreadyQualified(sortedGroups[n])[0] === true) {
                    qualified = "qualified"
                }
            }
            if (b === 1) {
                if (alreadyQualified(sortedGroups[n])[1] === true) {
                    qualified = "qualified"
                }
            }
            let infoList = [played, win, draw, lose, goalDifference, points, subName, flagPic, b + 1, div, file, qualified, changeBg, gsScore, gcScore]
            let location = document.querySelector(".bjs")
            if (b === sortedGroups[n].length - 1) {
                groupCreat(groupNames[n], location, teamlines(...infoList), gs, gc)
                
                break
            } else {
                teamlines(...infoList)
            }
        }
        
    }
    
    let qualifiedElement = document.querySelectorAll(".qualifiedText")
    for (let i = 0; i < qualifiedElement.length; i++) {
        if (qualifiedElement[i].innerHTML > " ") {
            qualifiedElement[i].style.color = "#76b300"
            qualifiedElement[i].style.fontSize = "10px"
        }
    }
    
    let qualified = document.querySelectorAll(".qualified")

    for (let i = 0; i < qualified.length; i++) {
        if (qualified[i].innerHTML === "1" || qualified[i].innerHTML === "2") {
            qualified[i].style.borderLeft = "2px solid #76b300"
        }
    }
}
// End Group Stage Page
// End Group Stage



// Start Knockout
// Start Knockout Functions
function addKnockoutBox(...list) {
    let knockoutBox = `
                        <div class="box game" id="g${list[11]}">
                        ${list[8]}
                            <div class="box-body">
                                <div class="left-team">
                                    <div class="flag"><img ${list[9]} src="images/${list[1]}" alt=""></div>
                                    <div class="name">${list[0]}</div>
                                </div>
                                ${list[4]}
                                <div class="right-team">
                                    <div class="flag"><img ${list[10]} src="images/${list[3]}" alt=""></div>
                                    <div class="name">${list[2]}</div>
                                </div>
                            </div>
                            <span>${list[5]}</span>
                            ${list[6]}
                        </div>
`
list[7].innerHTML += knockoutBox
}
function gameInfo(gameNumber, stage, final) {
    for (let j = 0; j < dayss.length; j++) {
        let day = Object.values(dayss[j])
        for (let i = 0; i < day.length - 1; i++) {
            let game = Object.values(day[i + 1])
            let teamOne = Object.values(game[0])
            let teamTwo = Object.values(game[1])
            if (game[4] === gameNumber) {
                let teamOneName = teamOne[0];
                let teamTwoName = teamTwo[0];
                let time = `<!-- -->`
                let penalties = `<!-- -->`
                let score = `<div class="score">${teamOne[2]} - ${teamTwo[2]}</div>`
                let flagTeamOne = ` `
                let flagTeamTwo = ` `
                if (teamOne[0].toLowerCase().includes("winner") || teamOne[0].toLowerCase().includes("loser")) {
                    let winner = teamOne[0].split(" ")
                    teamOneName = winner[0][0] + winner[1]
                }
                if (teamTwo[0].toLowerCase().includes("winner") || teamTwo[0].toLowerCase().includes("loser")) {
                    let winner = teamTwo[0].split(" ")
                    teamTwoName = winner[0][0] + winner[1]
                }
                for (let i = 0; i < AllTeams.length; i++) {
                    let team = Object.values(AllTeams[i])
            
                    if (teamOne[0].toLowerCase() === team[0]) {
                        teamOneName = team[1]
                    }
                    if (teamTwo[0].toLowerCase() === team[0]) {
                        teamTwoName = team[1]
                    }
                }
        
                if (teamOne[2] === false || teamTwo[2] === false) {
                    if (day[0] === "NY") {
                        score = day[0]
                    } else {
                        let dayDate = day[0].split(" ")
                        let dayNum = dayDate[1]
                        let year = dayDate[3].slice(2)
                        let month = dayDate[2]
                
                        switch (month) {
                            case "January":
                                month = "01";
                                break
                            case "February":
                                month = "02";
                                break
                            case "March":
                                month = "03";
                                break
                            case "April":
                                month = "04";
                                break
                            case "May":
                                month = "05";
                                break
                            case "June":
                                month = "06";
                                break
                            case "July":
                                month = "07";
                                break
                            case "August":
                                month = "08";
                                break
                            case "September":
                                month = "09";
                                break
                            case "October":
                                month = "10";
                                break
                            case "November":
                                month = "11";
                                break
                            case "December":
                                month = "12";
                                break
                        }
                        time = game[3]
                        score = `<div class="score">${dayNum}/${month}/${year}</div>`
                    }
                }
                if (game[8] !== undefined) {
                    let drawInfo = Object.values(game[8])
                    penalties = `<p>${drawInfo[0]} wins <span>${drawInfo[1]} - ${drawInfo[2]}</span> on penalties</p>`
                }
                if (final === undefined) {
                    final = `<!-- -->`
                }

        
                if (teamOne[1] === "empty.png") {
                    flagTeamOne = `style="border: 3px solid rgb(16, 30, 63);"`
                } 
                if (teamTwo[1] === "empty.png") {
                    flagTeamTwo =`style="border: 3px solid rgb(16, 30, 63);"`
                } 

                let list = [teamOneName, teamOne[1], teamTwoName, teamTwo[1], score, time, penalties, stage, final, flagTeamOne, flagTeamTwo, game[4]]
        
                addKnockoutBox(...list)
            }
        }
    }
}
// End Knockout Functions
// Start Knockout Page
if (currentPage.includes("knockout.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    let finalHeader = `<h3>FINAL</h3>`

    // let leftRoundOf16Upper = document.querySelector(".leftRoundOf16Upper")
    // gameInfo("40", leftRoundOf16Upper)
    // gameInfo("43", leftRoundOf16Upper)

    // let leftRoundOf16Lower = document.querySelector(".leftRoundOf16Lower")
    // gameInfo("42", leftRoundOf16Lower)
    // gameInfo("39", leftRoundOf16Lower)

    // let rightRoundOf16Upper = document.querySelector(".rightRoundOf16Upper")
    // gameInfo("41", rightRoundOf16Upper)
    // gameInfo("38", rightRoundOf16Upper)
    
    // let rightRoundOf16Lower = document.querySelector(".rightRoundOf16Lower")
    // gameInfo("37", rightRoundOf16Lower)
    // gameInfo("44", rightRoundOf16Lower)

    let leftQuarterFinal = document.querySelector('.leftQuarterFinal')
    gameInfo("44", leftQuarterFinal)
    gameInfo("42", leftQuarterFinal)

    let rightQuarterFinal = document.querySelector('.rightQuarterFinal')
    gameInfo("43", rightQuarterFinal)
    gameInfo("41", rightQuarterFinal)

    let rightSemiFinal = document.querySelector(".rightSemiFinal")
    gameInfo("45", rightSemiFinal)

    let leftSemiFinal = document.querySelector(".leftSemiFinal")
    gameInfo("46", leftSemiFinal)
    
    // let thirdPlace = document.querySelector(".third-place")
    // gameInfo("47", thirdPlace)
    
    let final = document.querySelector(".final")
    gameInfo("47", final, finalHeader)
}
// End Knockout Page
// End Knockout



// Start Teams
// Start Teams Functions
function addTeam(...list) {
    teamBox = `
                <a href="team-profile-generate.html?id=${list[3]}"class="team teamForProfile" id="${list[3]}">
                    <img src="images/${list[2]}" alt="">
                    <h3>${list[0]}</h3>
                    <span>(${list[1]})</span>
                </a>
    `
    list[4].innerHTML += teamBox
}
function capitalize(sentence) {
    let teamName = sentence.split(" ")
    for (let j = 0; j < teamName.length; j++) {
        teamName[j] = `${teamName[j].charAt(0).toUpperCase()}${teamName[j].slice(1)}`
    }
    return  teamName.join(" ")
}
// End Teams Functions
// Start Teams Page
if (currentPage.includes("teams.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage === "/mini_championnat_coup-u11/") {
    let teamsLocation = document.querySelector(".teamsJs")
    for (let i = 0; i < AllTeams.length; i++) {
        let team = Object.values(AllTeams[i])
        let teamName = team[0].split("")
        let teamNameWithoutSpaceForId =""
        for (let j = 0; j < teamName.length; j++) {
            if (teamName[j] === " ") {
                teamName[j] = "_"
            }
            teamNameWithoutSpaceForId += teamName[j] 
        }

        let list = [capitalize(team[0]), team[1].toUpperCase(), team[2], teamNameWithoutSpaceForId, teamsLocation]
        addTeam(...list)
    }
}
// End Teams Page
// End Teams



// Start Teams Profiles 
// Start Teams Profiles Functions
function openImage(imageSrc) {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imageSrc;
    fullscreen.style.display = 'block';
}
function closeFullscreen() {
    const fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = 'none';
}
function redirectToTeamPage(teamId) {
    window.location.href = `team-profile-generate.html?id=${teamId}`;
}
function teamNameId(teamName) {
    let teamNameSplited = teamName.split("")
    let teamNameWithoutSpaceForId =""
    for (let j = 0; j < teamNameSplited.length; j++) {
        if (teamNameSplited[j] === " ") {
            teamNameSplited[j] = "_"
        }
        teamNameWithoutSpaceForId += teamNameSplited[j] 
    }
    return teamNameWithoutSpaceForId
}


    
function teamHtml(...list) {
    let struct = `
    <div class="fullscreen" id="fullscreen">
        <span class="close" onclick="closeFullscreen()">&times;</span>
        <img src="" class="fullscreen-image"  alt="Fullscreen Image" id="fullscreen-image">
    </div>
    <div class="header">
        <div class="container" >
            <img src="images/${list[0]}" alt="" class="thumbnail" onclick="openImage('images/${list[0]}')">
            <p>${list[1]}</p>
        </div>
    </div>
    <div class="body">
        <div class="container">
            <div class="games-score">
                <h2 class="special-header">Games & Scores</h2>
                <div class="inner-container days-js">
                    
                </div>
            </div>

            <!-- Start Group Stage -->
            <div class="group-stage" id="group-stage">
                <div class="container" style="padding: 0">
                    <h2 class="special-header">Group</h2>
                    <div class="boxes bjs">
                        
                    </div>
                </div>
            </div>
            <!-- End Group Stage -->

            <div class="manager">
                <h2 class="special-header">Manager</h2>
                <div class="boxes manager-box">
                    
                </div>
            </div>
            <div class="squad-list">
                <h2 class="special-header">Squad List</h2>
                <div class="boxes squad-list-boxes">
                    
                </div>
            </div>
        </div>
    </div>
    `
    pageBody.innerHTML += struct
}
function playerCardHTML(...infolist) {
    let playerCardHTML =`
                    <div class="card">
                        <div class="content">
                            <div class="front">
                                <img src="images/${infolist[8]}" alt="">
                                <div class="player-image">
                                    <img src="images/${infolist[3]}" alt="">
                                </div>
                                <div class="info">
                                    <span>${infolist[0]}</span>
                                    <span>${infolist[1]}</span>
                                    <span>${infolist[2]}</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="personal-details">Personal Details</div>
                                <div class="pd">
                                    <p>City</p>
                                    <p>${infolist[4]}</p>
                                </div>
                                <div class="pd">
                                    <p>Age</p>
                                    <p>${infolist[5]}</p>
                                </div>
                                <div class="pd">
                                    <p>Height</p>
                                    <p>${infolist[6]}</p>
                                </div>
                                <div class="pd">
                                    <p>Profesional Club</p>
                                    <p>${infolist[7]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
    infolist[9].innerHTML += playerCardHTML
}
// End Teams Profiles Functions

let clickedTeam = document.querySelectorAll('.teamForProfile');
let teamUrlParams = new URLSearchParams(window.location.search);
let teamId = teamUrlParams.get('id');

if (currentPage.includes("teams.html") || currentPage.includes("index.html") || currentPage === "/" || currentPage.includes("group-stage.html")   ) {
    clickedTeam.forEach(element => {
        element.addEventListener("click", () => redirectToTeamPage(element.id));
    });
}

if (currentPage.includes("team-profile-generate.html") ) {
    for (let i = 0; i < AllTeams.length; i++) {
        let team = Object.values(AllTeams[i])
        let teamName = teamNameId(team[0])
        if (teamId === teamName) {
            let list = [team[2], capitalize(team[0])]
            teamHtml(...list)
            let teamName = team[0].toLowerCase()
            for (let j = 0; j < dayss.length; j++) {
                let day = Object.values(dayss[j])
                let replecatedDate = " "
                for (let i = 0; i < day.length - 1; i++) {
                    let game = Object.values(day[i + 1])
                    let teamOne = Object.values(game[0])
                    let teamTwo = Object.values(game[1])
                    if (teamOne[0].toLowerCase() === teamName || teamTwo[0].toLowerCase() === teamName) {
                        document.querySelector('title').textContent = teamName.toUpperCase()
                        if (replecatedDate !== day[0]) {
                            createDay(day, day[0], teamName)
                            replecatedDate = day[0]
                            // console.log("h")
                        }
                        
                    }
                }
            }

            let groupNames = ["Group A", "Group B", "Group C", "Group D"]
            for (let n = 0; n < sortedGroups.length; n++) {
                let div = document.createElement("div")
                
                for (let b = 0; b < sortedGroups[n].length; b++) {
                    let teamName = sortedGroups[n][b]
                    if (teamName === team[0]) {
                        for (let b = 0; b < sortedGroups[n].length; b++) {
                            let location = document.querySelector(".bjs")
                            let teamName = sortedGroups[n][b]
                            let file = teamNameId(sortedGroups[n][b])
                            let changeBg = " "
                            let qualified = " "
                            let gs = " "
                            let gc = " "
                            let gsScore = " "
                            let gcScore = " "
                            let played = 0
                            let win = 0
                            let draw = 0
                            let lose = 0
                            let points = 0
                            let totalGoalScored = 0
                            let totalGoalConceded = 0
                            let goalDifference = 0
                            let subName = " "
                            let flagPic = " "
                            for (let i = 0; i < AllTeams.length; i++) {
                                let team = Object.values(AllTeams[i])
                                if (teamName === team[0]) {
                                    subName = team[0].toUpperCase()
                                    flagPic = team[2]
                                    if (screen.width < 768) {
                                        subName = team[1]
                                    }
                                }
                            }
                            for (let i = 0; i < dayss.length; i++) {
                                let day = Object.values(dayss[i])
                                for (let j = 0; j < day.length - 1; j++) {
                                    let game = Object.values(day[j + 1])
                                    let teamOne = Object.values(game[0])
                                    let teamTwo = Object.values(game[1])
                                    if (teamOne[0] === teamName && teamOne[2] !== false) {
                                        played += 1
                                        let goalScored = parseInt(teamOne[2])
                                        let goalConceded = parseInt(teamTwo[2])
                                        totalGoalScored += parseInt(teamOne[2])
                                        totalGoalConceded += parseInt(teamTwo[2])
                                        if (goalScored > goalConceded) {
                                            win += 1
                                        }
                                        if (goalScored < goalConceded) {
                                            lose += 1
                                        }
                                        if (goalScored === goalConceded) {
                                            draw += 1
                                        }
                                    }
                                    if (teamTwo[0] === teamName && teamTwo[2] !== false) {
                                        played += 1
                                        let goalScored = parseInt(teamTwo[2])
                                        let goalConceded = parseInt(teamOne[2])
                                        totalGoalScored += parseInt(teamTwo[2])
                                        totalGoalConceded += parseInt(teamOne[2])
                                        if (goalScored > goalConceded) {
                                            win += 1
                                        }
                                        if (goalScored < goalConceded) {
                                            lose += 1
                                        }
                                        if (goalScored === goalConceded) {
                                            draw += 1
                                        }
                                    }
                                }
                            }
                            goalDifference = totalGoalScored - totalGoalConceded
                            points = win * 3 + lose * 0 + draw * 1
                            
                            if (teamName === team[0]) {
                                changeBg = `style="background-color:#faf7f7;"`                               
                            }
                            if (screen.width > 399) {
                                gs = "<span>GS</span>"
                                gc = "<span>GC</span>"
                                gsScore = `<span>${totalGoalScored}</span>`
                                gcScore = `<span>${totalGoalConceded}</span>`
                            }
                            if (b === 0) {
                                if (alreadyQualified(sortedGroups[n])[0] === true) {
                                    qualified = "qualified"
                                }
                            }
                            if (b === 1) {
                                if (alreadyQualified(sortedGroups[n])[1] === true) {
                                    qualified = "qualified"
                                }
                            }
                            let infoList = [played, win, draw, lose, goalDifference, points, subName, flagPic, b + 1, div, file, qualified, changeBg, gsScore, gcScore]
                            
                            location.style.gridTemplateColumns = "1fr"
                            if (b === sortedGroups[n].length - 1) {
                                groupCreat(groupNames[n], location, teamlines(...infoList), gs, gc)
                                break
                            } else {
                                teamlines(...infoList)
                            }
                        }
                        let qualifiedElement = document.querySelectorAll(".qualifiedText")
                        for (let i = 0; i < qualifiedElement.length; i++) {
                        if (qualifiedElement[i].innerHTML > " ") {
                                qualifiedElement[i].style.color = "#76b300"
                                qualifiedElement[i].style.fontSize = "10px"
                            }
                        }
                        
                        let qualified = document.querySelectorAll(".qualified")
                    
                        for (let i = 0; i < qualified.length; i++) {
                            if (qualified[i].innerHTML === "1" || qualified[i].innerHTML === "2") {
                                qualified[i].style.borderLeft = "2px solid #76b300"
                            }
                        }
                    }
                }
            }

            if (team[3] !== undefined) {
                let players = Object.values(team[3])
                let manager = Object.values(players[7])
                let clubFlag = team[2]
                let playersLocation = document.querySelector(".squad-list-boxes")
                let managerLocation = document.querySelector(".manager-box")

                let infoListManager = [manager[0], manager[1], manager[2], manager[3], manager[4], manager[5], manager[6], manager[7], clubFlag, managerLocation]
                playerCardHTML(...infoListManager)
                for (let i = 0; i < players.length - 1; i++) {
                    let player = Object.values(players[i])
                    let infoListPlayer = [player[0], player[1], player[2], player[3], player[4], player[5], player[6], player[7], clubFlag, playersLocation]
                    playerCardHTML(...infoListPlayer)
                }
            }
        }
    }

    
}
// End Teams Profiles




// Start Game Profiles
// Start Game Profiles Functions
function openVideoFullscreen(id) {
    const fullscreen = document.getElementById('fullscreenn');
    fullscreen.style.display = 'block';
    const videoIdOrUrl = id;

    const iframe = document.getElementById('fullscreen-video');
    if (videoIdOrUrl.includes('youtube.com')) {
        const videoId = videoIdOrUrl.split('v=')[1];
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        iframe.src = `https://www.youtube.com/embed/${videoIdOrUrl}`;
    }
}
function openHighlightNTFullscreen() {
    const fullscreenHighlightNT = document.getElementById('fullscreenHighlightNT');
    fullscreenHighlightNT.style.display = 'block';
}
function closeFullscreenn() {
    const fullscreen = document.getElementById('fullscreenn');
    fullscreen.style.display = 'none';
    const fullscreenHighlightNT = document.getElementById('fullscreenHighlightNT');
    fullscreenHighlightNT.style.display = 'none';

    // Pause the YouTube video by resetting the iframe source
    const iframe = document.getElementById('fullscreen-video');
    iframe.src = '';
}


function gameProfileHtml(leftTeamGoals, rightTeamGoals, ...list) {
    gameHtml = `
            <div class="stage-and-date">
                <div class="stage">Match ${list[7]}, ${list[5]}</div>
                <div class="date">${list[6]}, ${list[8]}</div>
            </div>
            <div class="teams">
                <div class="left-team">
                    <a href="team-profile-generate.html?id=${list[18]}" class="team teamForProfile" id="${list[18]}">
                        <div class="team-name" >${list[1]} ${list[20]}</div>
                        <div class="flag"><img ${list[12]} src="images/${list[2]}" alt=""></div>
                    </a>
                </div>
                <div class="score">
                    ${list[9]}
                </div>
                <div class="right-team">
                    <a href="team-profile-generate.html?id=${list[19]}" class="team teamForProfile" id="${list[19]}">
                        <div class="flag"><img ${list[13]} src="images/${list[4]}" alt=""></div>
                        <div class="team-name">${list[3]} ${list[21]}</div>
                    </a>
                </div>
            </div>
            ${list[10]}
            ${list[11]}
            <div class="goals">
                <div class="left-team-goals">
                    ${leftTeamGoals}
                </div>
                <div class="empty-div"></div>
                <div class="right-team-goals">
                    ${rightTeamGoals}
                </div>
            </div>
            
            <div class="competition">
                fifa world cup
            </div>
            <div class="location">
                <div class="city"><p>${list[16]}</p></div>
                <div class="dot">●</div>
                <div class="stadium">${list[17]}</div>
            </div>
            ${list[15]}
            <div class="fullscreenn" id="fullscreenn">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id="fullscreen-video"></iframe>
            </div>
            <div class="fullscreenHighlightNT" id="fullscreenHighlightNT">
                <span class="closee" onclick="closeFullscreenn()">&times;</span>
                Highlight Not Available
            </div>

    `
    list[0].innerHTML = gameHtml
}
function goalHtmlTeamOne(...list) {
    let goal = `
                        <div class="goal">
                            <div class="penalty">${list[4]}</div>
                            <div class="minute">${list[1]}</div>
                            <div class="player">
                                <div class="player-goal">${list[2].toUpperCase()}</div>
                                <div class="player-assist">${list[3]}</div>
                            </div>
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                        </div>
    `
    list[0].innerHTML += goal
    return list[0].innerHTML
}
function goalHtmlTeamTwo(...list) {
    let goal = `
                        <div class="goal">
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div> 
                            <div class="player">
                                <div class="player-goal">${list[2].toUpperCase()}</div>
                                <div class="player-assist">${list[3]}</div>
                            </div>   
                            <div class="minute">${list[1]}</div>
                            <div class="penalty">${list[4]}</div>
                        </div>
    `
    list[0].innerHTML += goal
    return list[0].innerHTML
}    
function redirectToGamePage(gameId) {
    window.location.href = `game-generate.html?id=${gameId}`;
}
// End Game Profiles Functions

const clickedGame = document.querySelectorAll('.game');
clickedGame.forEach(element => {
    element.addEventListener("click", () => redirectToGamePage(element.id));
});
let gameContent = document.querySelector(".gameGenerateJs")
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');


for (let i = 0; i < dayss.length; i++) {
    let day = Object.values(dayss[i])
    for (let j = 0; j < day.length - 1; j++) {
        let game = Object.values(day[j + 1])
        let teamOne = Object.values(game[0])
        let teamTwo = Object.values(game[1])
        let goalsTeamOne = []
        let goalsTeamTwo = []
        if (teamOne[3] !== undefined) {
            goalsTeamOne = Object.values(teamOne[3])
        }
        if (teamTwo[3] !== undefined) {
            goalsTeamTwo = Object.values(teamTwo[3])
        }
        let date = "NY"
        if (day[0] !== "NY") {
            let dateArray = day[0].split(" ")
            date = `${dateArray[1]} ${dateArray[2].slice(0, 3).toUpperCase()} ${dateArray[3]}`
        }
        let score
        let penalties = ` `
        let fullTime = `<div class="full-time">Full Time</div>`
        let leftTeamName = teamOne[0]
        let rightTeamName = teamTwo[0]
        let leftTeamPageLink = `${teamOne[0]}.html`
        let rightTeamPageLink = `${teamTwo[0]}.html`
        let leftFlag = ` `
        let rightFlag = ` `
        let winnerTeamLeft = ` `
        let winnerTeamRight = ` `
        let divTeamOne = document.createElement("div")
        let divTeamTwo = document.createElement("div")
        let goals = `
        <div class="goals">
                <div class="left-team-goals">
                    <div>
                        <div class="goal">
                            <div class="penalty">(P)</div>
                            <div class="minute">42'</div>
                            <div class="player">
                                <div class="player-goal">ORSIC</div>
                                <div class="player-assist">ORSIC</div>
                            </div>
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                        </div>
                        <div class="goal">
                            <div class="penalty">(P)</div>
                            <div class="minute">42'</div>
                            <div class="player">Mislav</div>
                            <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>    
                        </div>
                    </div>
                </div>
                <div class="empty-div"></div>
                <div class="right-team-goals">
                    <div class="goal">
                        <div class="ball-icon"><i class="fa fa-soccer-ball"></i></div>  
                        <div class="player">ORSSAFSHJ</div>
                        <div class="minute">42'</div>  
                        <div class="penalty">(P)</div>
                    </div>
                </div>
            </div>
        `
        let highlight = `
            <div class="highlights-btn">
                <a href="#" id="playButton" onclick="openVideoFullscreen('${game[7]}')">
                    <i class="fa fa-play"></i>
                highlights
                </a>
            </div>
        `
        if (game[7] === "#") {

            highlight = `
            <div class="highlights-btn">
                <a href="#" id="playButton"  onclick="openHighlightNTFullscreen()">
                    <i class="fa fa-play"></i>
                highlights
                </a>
            </div>
            `
        }
        // console.log(highlight)
        if (screen.width < 768) {
            for (let i = 0; i < AllTeams.length; i++) {
                let team = Object.values(AllTeams[i])
                
                if (team[0] === teamOne[0].toLowerCase()) {
                    leftTeamName = team[1]
                }
                if (team[0] === teamTwo[0].toLowerCase()) {
                    rightTeamName = team[1]
                }
            }
            if (teamTwo[0].toLowerCase().includes("loser") || teamTwo[0].toLowerCase().includes("winner")) {
                rightTeamName = `${teamTwo[0].split(" ")[0].charAt(0)}${teamTwo[0].split(" ")[1]}`
            }
            if (teamOne[0].toLowerCase().includes("loser") || teamOne[0].toLowerCase().includes("winner")) {
                leftTeamName = `${teamOne[0].split(" ")[0].charAt(0)}${teamOne[0].split(" ")[1]}`
            }
        }


        if (teamOne[2] === false || teamTwo[2] === false) {
            score = `<p>VS</p>`
            goals = " "
            highlight = " "
            fullTime =  " "
        } else {
            score = `<p>${teamOne[2]}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${teamTwo[2]}</p>`
            
        }

        if (game[8] !== undefined) {
            let drawInfo = Object.values(game[8])
            penalties = `<div class="penalties">${drawInfo[0]} wins ${drawInfo[1]} - ${drawInfo[2]} on penalties</div>`
            score = `
            <span>(${drawInfo[2]})</span>
            <p>${teamOne[2]}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${teamTwo[2]}</p>
            <span>(${drawInfo[1]})</span>
            `
        }
        if (teamOne[1] === "empty.png") {
            leftFlag = `style="border: 5px solid rgb(16, 30, 63);"`
        }
        if (teamTwo[1] === "empty.png") {
            rightFlag = `style="border: 5px solid rgb(16, 30, 63);"`
        }
        
        if (teamOne[4] !== undefined) {
            winnerTeamLeft = `<div class="winner"></div>`
        }
        if (teamTwo[4] !== undefined) {
            winnerTeamRight = `<div class="winner"></div>`
        }

        if (goalsTeamOne.length > 0) {
            for (let n = 0; n < goalsTeamOne.length; n++) {
                let goal = Object.values(goalsTeamOne[n])
                let assist = goal[2]
                let penalty = goal[3]
                let goalScorer = goal[1]
                if (screen.width < 768 && goal[2] !== false) {
                    assist = goal[2].split(" ")
                    assist = assist[assist.length - 1]
                }
                if (goal[2] === false) {
                    assist = ` `
                }
                if (goal[3] === false) {
                    penalty = ` `
                }
                if (screen.width < 768) {
                    goalScorer = goal[1].split(" ")
                    goalScorer = goalScorer[goalScorer.length - 1]
                }
                let listTeamOne = [divTeamOne, goal[0], goalScorer, assist, penalty]


                if (goalsTeamOne.length - 1 === n) {
                    break
                } else {
                    goalHtmlTeamOne(...listTeamOne)
                }
            }
        } 
        for (let n = 0; n < goalsTeamTwo.length; n++) {
            let goal = Object.values(goalsTeamTwo[n])
            let goalScorer = goal[1]
            let assist = goal[2]
            let penalty = goal[3]
            if (screen.width < 768 && goal[2] !== false) {
                assist = goal[2].split(" ")
                assist = assist[assist.length - 1]
            }
            if (goal[2] === false) {
                assist = ` `
            }
            if (goal[3] === false) {
                penalty = ` `
            }
            if (screen.width < 768) {
                goalScorer = goal[1].split(" ")
                goalScorer = goalScorer[goalScorer.length - 1]
            }
            let listTeamTwo = [divTeamTwo, goal[0], goalScorer, assist, penalty]


            if (goalsTeamTwo.length - 1 === n) {
                break
            } else {
                
                goalHtmlTeamTwo(...listTeamTwo)
            }
        }

        
        let functionCallTeamOne = " " 
        let functionCallTeamTwo = " " 
        if (goalsTeamOne.length > 0) {
            let goal = Object.values(goalsTeamOne[goalsTeamOne.length - 1])
            let assist = goal[2]
            let penalty = goal[3]
            let goalScorer = goal[1]
            if (screen.width < 768 && goal[2] !== false) {
                assist = goal[2].split(" ")
                assist = assist[assist.length - 1]
            }
            if (goal[2] === false) {
                assist = ` `
            }
            if (goal[3] === false) {
                penalty = ` `
            }
            if (screen.width < 768) {
                goalScorer = goal[1].split(" ")
                goalScorer = goalScorer[goalScorer.length - 1]
            }
            let listTeamOne = [divTeamOne, goal[0], goalScorer, assist, penalty]

            functionCallTeamOne = goalHtmlTeamOne(...listTeamOne)
            
        }
        if (goalsTeamTwo.length > 0) {
            let goal = Object.values(goalsTeamTwo[goalsTeamTwo.length - 1])
            let goalScorer = goal[1]
            let assist = goal[2]
            let penalty = goal[3]
            if (screen.width < 768 && goal[2] !== false) {
                assist = goal[2].split(" ")
                assist = assist[assist.length - 1]
            }
            if (goal[2] === false) {
                assist = ` `
            }
            if (goal[3] === false) {
                penalty = ` `
            }
            if (screen.width < 768) {
                goalScorer = goal[1].split(" ")
                goalScorer = goalScorer[goalScorer.length - 1]
            }
            let listTeamTwo = [divTeamTwo, goal[0], goalScorer, assist, penalty]
            functionCallTeamTwo = goalHtmlTeamTwo(...listTeamTwo)
        }
        if (gameId === `g${game[4]}`) {
            document.querySelector('title').textContent = `MATCH ${game[4]}`
            let list = [gameContent, leftTeamName, teamOne[1], rightTeamName, teamTwo[1], game[2], game[3], game[4], date, score, penalties, fullTime, leftFlag, rightFlag, goals, highlight, game[5], game[6], teamNameId(teamOne[0]), teamNameId(teamTwo[0]), winnerTeamLeft, winnerTeamRight]
            gameProfileHtml(functionCallTeamOne, functionCallTeamTwo, ...list)
        }
    } 
}


// End Game Profiles








let clickedTeamm = document.querySelectorAll('.teamForProfile');
if (currentPage.includes("news-generate.html")) {
    clickedTeamm.forEach(element => {
        element.addEventListener("click", () => redirectToNewsPage(element.id));
    });
}

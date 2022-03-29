console.log("I am here")

const containerDiv = document.getElementById("vizContainer");
const url = "http://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashBoard";
const options = {
    hideTabs: true,
    onFirstInterative:function(){
        console.log("my dashboard is ready!");
    }
};

function initViz(){
    let viz = new tableau.viz(containerDiv, url, options)
}

document.addEventListener("DOMContentLoaded", initViz);
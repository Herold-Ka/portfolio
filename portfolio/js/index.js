var nb = 0;

function sideBar() {
    if (nb == 0) {
        nb++;
        if (window.matchMedia('screen and (max-width: 550px)')) {
            var sideBar = document.getElementById("idNavSide").style;
            var idNavUL = document.getElementById("idNavUL").style;
            document.getElementById("sidebarCollapse").style.display = "none";
            document.getElementById("Head").style.display = "none";
            document.getElementById("idNavSide").style.display = "block";
            document.getElementById("apropos").style.display = "none";
            document.getElementById("competence").style.display = "none";
            document.getElementById("portfolio").style.display = "none";
            document.getElementById("reseaux").style.display = "none";
            document.getElementById("idSidebar").style.height = "100%";
            document.getElementById("idSidebar").style.width = "100%";
            idNavUL.flexDirection = "column";
            idNavUL.margin = "auto";
            sideBar.margin = "auto";
        }
    } else if (nb >= 1) {
        nb = 0;
        if (window.matchMedia('screen and (max-width: 550px)')) {
            document.getElementById("sidebarCollapse").style.display = "block";
            document.getElementById("Head").style.display = "block";
            document.getElementById("idNavSide").style.display = "none";
            document.getElementById("apropos").style.display = "block";
            document.getElementById("competence").style.display = "block";
            document.getElementById("portfolio").style.display = "block";
            document.getElementById("reseaux").style.display = "block";
            document.getElementById("idSidebar").style.height = "40px";
            document.getElementById("idSidebar").style.width = "40px";
            document.getElementById("idHeader").style.height = "100vh";
            document.getElementById("idHeader").style.width = "100%";
        } 
    }
}
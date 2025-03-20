const menu = document.getElementById("menu");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeMenu = document.getElementById("closeMenu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
});


function toggleSearch() {
    // ซ่อนปุ่มค้นหาโรงแรม
    document.getElementById("hotel-search-btn").style.display = "none";
    
    // แสดงช่องค้นหา
    var searchContainer = document.getElementById("search-container");
    searchContainer.style.display = "flex";
}

function submitSearch() {
    // คุณสามารถเพิ่มฟังก์ชันค้นหาจริงที่นี่
    
    // ทำให้ปุ่มค้นหากลับมา
    document.getElementById("hotel-search-btn").style.display = "inline-block"; 
    
    // ซ่อนช่องค้นหา
    var searchContainer = document.getElementById("search-container");
    searchContainer.style.display = "none";
}

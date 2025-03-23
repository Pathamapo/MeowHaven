const menu = document.getElementById("menu"); //แฮมเบอร์เกอร์
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeMenu = document.getElementById("closeMenu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
});


function toggleSearch() { // ซ่อนปุ่มค้นหาโรงแรม
    document.getElementById("hotel-search-btn").style.display = "none";
    var searchContainer = document.getElementById("search-container"); // แสดงช่องค้นหา
    searchContainer.style.display = "flex";
}

function submitSearch() {
    document.getElementById("hotel-search-btn").style.display = "inline-block";  // ทำให้ปุ่มค้นหากลับมา
    var searchContainer = document.getElementById("search-container");
    searchContainer.style.display = "none";
}

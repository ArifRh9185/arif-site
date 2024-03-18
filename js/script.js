new TypeIt("#heading1", {
    loop:true,
    speed: 100,
    waitUntilVisible: true,

  })
    
    .type("Hai, I'm Arif Rahman ", { delay: 2500 })
    .pause(500)
    .delete(12)
    .type("Software Engineer ", {delay:2500})
    .go();
    
// Tangkap elemen tombol-tombol navigasi
const profileBtn = document.querySelector('#about-btn')
const projectsBtn = document.querySelector('#projects-btn');
const blogBtn = document.querySelector('#blog-btn');
const LearnBtn = document.querySelector('#learn-btn');
const roadmapBtn = document.querySelector('#roadmap-btn');
const dashboardBtn = document.querySelector('#dashboard-btn');
const homeBtn = document.querySelectorAll('#homeBtn');

$(document).ready(function(){
    // Event listener untuk tombol profile
    $(homeBtn).click(function(){
        showLoadingBar(); // Menampilkan loading bar saat klik
        $.ajax({
            url: "../content/index.html",
            cache: false,
            success: function(result){
                hideLoadingBar();
                $("#content").html(result);
            },
            error: function(){
                hideLoadingBar(); // Menyembunyikan loading bar jika ada kesalahan
            }
        });
    });


    $(profileBtn).click(function(){
        showLoadingBar(); // Menampilkan loading bar saat klik
        $.ajax({
            url: "../content/about.html",
            cache: false,
            success: function(result){
                hideLoadingBar();
                $("#content").html(result);
            },
            error: function(){
                hideLoadingBar(); // Menyembunyikan loading bar jika ada kesalahan
            }
        });
    });

    // Tambahkan event listener untuk tombol-tombol lainnya di sini seperti yang sebelumnya Anda lakukan
    $(projectsBtn).click(function(){
        showLoadingBar();
        $.ajax({
            url: "../content/projects.html",
            cache: false,
            success: function(result){
                hideLoadingBar();
                $("#content").html(result);
            },
            error: function(){
                hideLoadingBar(); // Menyembunyikan loading bar jika ada kesalahan
            }
        });
    });

    $(blogBtn).click(function(){
        showLoadingBar();
        $.ajax({
            url: "../content/blog.html",
            cache: false,
            success: function(result){
                hideLoadingBar();
                $("#content").html(result);
            },
            error: function(){
                hideLoadingBar(); // Menyembunyikan loading bar jika ada kesalahan
            }
        });
    });

    $(LearnBtn).click(function(){
        showLoadingBar();
        $.ajax({
            url: "../content/learn.html",
            cache: false,
            success: function(result){
                hideLoadingBar();
                $("#content").html(result);
            },
            error: function(){
                hideLoadingBar(); // Menyembunyikan loading bar jika ada kesalahan
            }
        });
        
    });
    $(roadmapBtn).click(function(){
        showLoadingBar();
        $.ajax({
            url: "../content/roadmap.html",
            cache: false,
            success: function(result){
                hideLoadingBar();
                $("#content").html(result);
            },
            error: function(){
                hideLoadingBar(); // Menyembunyikan loading bar jika ada kesalahan
            }
        });
    });
    $(dashboardBtn).click(function(){
        showLoadingBar();
        $.ajax({
            url: "../content/dashboard.html",
            cache: false,
            success: function(result){
                hideLoadingBar();
                $("#content").html(result);
            },
            error: function(){
                hideLoadingBar(); // Menyembunyikan loading bar jika ada kesalahan
            }
        });
    });

});
function showLoadingBar() {
    $("#loading-bar").show();
    $("#loading-bar-inner").animate({ width: "100%" }, 500); // Animasi loading bar
}

function hideLoadingBar() {
    $("#loading-bar-inner").stop().css({ width: 0 }); // Stop animasi dan reset lebar loading bar
    $("#loading-bar").fadeOut(200); // Menyembunyikan loading bar
}
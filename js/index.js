let navbarButton = document.getElementById('navbar-button')
let navbarResponsiveUI = document.getElementById('nav-res')

navbarButton.addEventListener('click',() => {
    navbarResponsiveUI.classList.toggle('top-14')
    navbarResponsiveUI.classList.toggle('-translate-y-48')
    // navbarResponsiveUI.classList.toggle('top-14')
    // navbarResponsiveUI.classList.toggle('inherit')
    // navbarResponsiveUI.classList.toggle('hidden')
    console.log('berhasil')
})

function clickFilter (id,){
    let i = document.getElementById('')
}

      function sendwhatsapp(makanan){
       var phonenumber = "+6285859164393";

       var nama = document.querySelector(".nama").value;
       var jurusan = document.querySelector(".jurusan").value;
       var jumlah = document.querySelector(".jumlah").value;
       var catatan = document.querySelector(".catatan").value;

       var url = "https://wa.me/" + phonenumber + "?text="
       +"*Name :* "+nama+"%0a"
       +"*Makanan :* "+makanan+"%0a"
       +"*Email :* "+jurusan+"%0a"
       +"*Country:* "+jumlah+"%0a"
       +"*Message :* "+catatan
       +"%0a%0a"
       +"This is an example of send HTML form data to WhatsApp";

       window.open(url, '_blank').focus();
     }

 const timelineData = [
    {
      year: "< 66.000.000 BC",
      description:
        "Enki bertemu dan berteman dengan teman dinosaurusnya bernama Azrealon"
    },
    {
      year: "+- 66.000.000 BC",
      description:
        "Meteor Vulkanite menghantam bumi yang memusnahkan kehidupan Dinoasaurus"
    },
    {
      year: "3004 BC",
      description:
        "Seseorang di Damascus membangun sebuah kapal besar"
    },
    {
      year:0,
      description:
        "Steve dan kawan-kawan menemukan reruntuhan Kuil Marduk dan terjadi peristiwa The Reborn"
    },
    {
      year: 20,
      description:
        "Helen, ibu dari Steve, meninggal dunia"
    },
    {
      year: 45,
      description:
        "Enki dan Zeus berbincang di salah satu kedai di Rome, Zeus memberi nama baru pada Enki yaitu Jupiter"
    },
    {
      year: 79,
      description:
        "Sebuah gunung di Pompeii erupsi lantaran Enki gagal bereksperimen"
    },
    {
      year: 547,
      description:
        "Raja Camelot mengadakan sayembara untuk menjadi penerus takhtanya dan Arthur Pendragon terpilih"
    },
    {
      year: 1447,
      description:
        "Blane kecil bertemu dengan Azrealon"
    },
    {
      year: 1450,
      description:
        "Steve bangkit dari tidur panjang dan dirasuki oleh Herobrine"
    },
    {
      year: 1481,
      description:
        "Kehancuran kerajaan Zerberus"
    },
    {
      year: 1483,
      description:
        "Rapat para Royal Knights Diamond dengan ksatria Diamond"
    },
    {
      year: 1484,
      description:
        "Saryu dan Liu menikah"
    },
    {
      year: 1485,
      description:
        "Ksatria Legendaris melakukan penyegelan terlarang kepada Herobrine, Lia meninggal sebab reruntuhan"
    },
    {
      year: 1499,
      description:
        "Blane, sang Ksatria Diamond, meninggal"
    },
    {
      year: 1500,
      description:
        "Herobrine bebas dari segelnya dan datang ke Vermilion untuk mengambil baru Ruby"
    },
    {
      year: 1501,
      description:
        "Samsul mulai berlatih dan menjelajah"
    },
    {
      year: 1503,
      description:
        "Royal Knights menjadi dalang terjadinya peristiwa pencurian sihir warga di 4 kerajaan"
    },
    {
      year: 0,
      description:0
    },
  ];
  
  const timeline = document.querySelector(".timeline ol");

  timelineData.map(item => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const time = document.createElement("time");
    const description = document.createElement("p");
  
    time.textContent = item.year;
    description.textContent = item.description;
  
    div.appendChild(time);
    div.appendChild(description);
    li.appendChild(div);
    timeline.appendChild(li);
  });

// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}



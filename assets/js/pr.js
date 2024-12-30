
const prData = [
  {
    url: "https://markets.financialcontent.com/stocks/article/globeprwire-2024-12-26-trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery",
    img: "1.svg"
  },
  {
    url: "https://www.numbercoin.net/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "2.png"
  },
  {
    url: "https://www.insureinformation.com/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "3.png"
  },
  {
    url: "https://www.investmentnewz.com/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "4.png"
  },
  {
    url: "https://www.currencygossip.com/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "5.png"
  },
  {
    url: "https://www.fundsgossip.com/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "6.png"
  },
  {
    url: "https://www.moneyinformation.org/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "7.png"
  },
  {
    url: "https://financewine.com/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "8.png"
  },
  {
    url: "https://moneyfaction.com/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "9.png"
  },
  {
    url: "https://marketskyline.com/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "10.png"
  },
  {
    url: "https://marketencore.com/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "11.png"
  },
  {
    url: "https://marketsounds.com/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "12.png"
  },
  {
    url: "https://getfincorp.com/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "13.png"
  },
  {
    url: "https://www.microtrustiva.com/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "14.png"
  },
  {
    url: "https://www.financeronin.com/2024/12/26/trapped-in-education-its-a-teachers-journey-through-burnout-racism-and-recovery/",
    img: "15.png"
  },
];

const prSlider = document.getElementById("prSlider");

prData.forEach((slide, index) => {
  const slideDiv = document.createElement("div");
  slideDiv.innerHTML = `<a href="${slide.url}" target="_blank">
  <img src="assets/images/pr/${slide.img}" alt="Pr ${index + 1}">
  </a>`;
  prSlider.appendChild(slideDiv);
});

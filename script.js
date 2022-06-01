const divGlobalCases = document.querySelectorAll(".global-cases-data");

apiRequestTotal = (total) => {
  const newP01 = document.createElement("span");
  const newP02 = document.createElement("span");
  newP01.innerHTML += total.TotalDeaths + "  Deaths";
  newP02.innerHTML += total.TotalConfirmed + "  Infections";
  divGlobalCases[0].appendChild(newP01);
  divGlobalCases[0].appendChild(newP02);
};

const globalbtn = document.querySelector(".global-btn");
globalbtn.addEventListener("click", () => {
   globalCases();
});

// in gang zetten van DutchCases
dutchCases();

const dutchCasesOutput = (provinceData) => {
  const provinceName = [];
  const provinceInfections = [];
  provinceData.forEach((element) => {
    provinceName.push(element.Province);
    provinceInfections.push(element.Confirmed);
  });
  makeChart(provinceName, provinceInfections);
};

let today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
today = dd + "/" + mm + "/" + yyyy;

const ctx = document.getElementById("myChart").getContext("2d");

const makeChart = (province, infected) => {
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        `${province[0]}`,
        `${province[1]}`,
        `${province[2]}`,
        `${province[3]}`,
        `${province[4]}`,
        `${province[5]}`,
        `${province[6]}`,
        `${province[7]}`,
        `${province[8]}`,
        `${province[9]}`,
        `${province[10]}`,
        `${province[11]}`,
      ],

      datasets: [
        {
          label: "",
          data: [
            infected[0],
            infected[1],
            infected[2],
            infected[3],
            infected[4],
            infected[5],
            infected[6],
            infected[7],
            infected[8],
            infected[9],
            infected[10],
            infected[11],
          ],

          backgroundColor: "gold",
          borderColor: "black",
          borderWidth: 1,
          hoverBorderwidth: 5,
          hoverBorderColor: "red",
        },
      ],
    },
    options: {
      elements: {
        bar: {
          borderRadius: 1,
        },
      },

      plugins: {
        title: {
          display: true,
          text: `Covid cases Netherlands             ${today}`,
          color: "white",
        },

        legend: {
          display: false,
          labels: {
            font: {
              size: 20,
            },
          },
        },
      },

      scales: {
        x: {
          // beginAtZero: true,
          ticks: {
            font: {
              size: 5,
            },
            color: "blue",
          },
        },

        yAxes: {
          // beginAtZero: true,
          ticks: {
            font: {
              size: 5,
            },
            color: "blue",
          },
        },
      },
    },
  });
};


const timecapsule = (datum) => {
  
  let month = datum.getMonth()
  let day = datum.getDate()

  if (month + 1 < 10){
    month = '0'+ (datum.getMonth()+1)}
 
  if (day < 10){
    day = '0' + datum.getDate()};
 
  const year = datum.getFullYear()
  
  return `${year}-${month}-${day}`
}



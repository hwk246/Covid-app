async function globalCases() {
  try {
    const globalNumber = await fetch("https://api.covid19api.com/world/total");
    const number = await globalNumber.json();
    apiRequestTotal(number);
  } catch (error01) {
    console.log(error01);
  }
}

async function dutchCases() {
  try {
    const xData = await fetch(
      "https://api.covid19api.com/live/country/netherlands/status/confirmed"
    );
    const jsdata = await xData.json();
    const yyyymmdd = timecapsule(new Date());
    const confirmedInfected = jsdata.filter(
      (date) =>
        date.Date ===`${yyyymmdd}T00:00:00Z` &&
        (date.Province === "Friesland" ||
          date.Province === "Groningen" ||
          date.Province === "Drenthe" ||
          date.Province === "Noord-Holland" ||
          date.Province === "Overijssel" ||
          date.Province === "Flevoland" ||
          date.Province === "Gelderland" ||
          date.Province === "Utrecht" ||
          date.Province === "Zuid-Holland" ||
          date.Province === "Noord-Brabant" ||
          date.Province === "Zeeland" ||
          date.Province === "Limburg")
    );
    dutchCasesOutput(confirmedInfected);
    return confirmedInfected;
  } catch (error02) {}
}

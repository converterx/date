function convertDate() {
  const inputDate = document.getElementById("inputDate").value;
  const usDate = document.getElementById("usDate");
  const euDate = document.getElementById("euDate");
  const isoDate = document.getElementById("isoDate");

  if (!inputDate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    usDate.textContent = "Invalid format";
    euDate.textContent = "Invalid format";
    isoDate.textContent = "Invalid format";
    return;
  }

  const [day, month, year] = inputDate.split("/");

  // Converter date format
  const usFormattedDate = `${month}/${day}/${year}`;
  const euFormattedDate = `${day}.${month}.${year}`;
  const isoFormattedDate = `${year}-${month}-${day}`;

  // Show results
  usDate.textContent = usFormattedDate;
  euDate.textContent = euFormattedDate;
  isoDate.textContent = isoFormattedDate;
}

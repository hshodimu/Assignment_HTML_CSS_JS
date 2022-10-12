function addMember() {
  const newMember = document.createElement("tr");

  newMember.innerHTML = `<tr><td>${memberID.value}</td><td>${memberFName.value}</td><td>${memberLName.value}</td><td>${memberPhone.value}</td><td>${memberAddress.value}</td></tr>`;

  table.appendChild(newMember);
}

function uploadFile() {
  document.getElementById("inputFile").addEventListener("change", function () {
    var fr = new FileReader();

    fr.onload = function () {
      const result = JSON.parse(fr.result);

      const newMember = document.createElement("tr");

      newMember.innerHTML = `<tr><td>${result.id}</td><td>${result.firstName}</td><td>${result.lastName}</td><td>${result.phone}</td><td>${result.address}</td></tr>`;

      table.appendChild(newMember);
    };

    fr.readAsText(this.files[0]);
  });
}

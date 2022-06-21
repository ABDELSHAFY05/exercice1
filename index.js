let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ];

  
  function show(){
    document.getElementById('container').style.display="block"
   
  }
    
  

  window.onload = () => {
    loadTableData(users);
  };
  

  function loadTableData(users){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let person of users){
        dataHtml += `<tr>
        <td>${person.id}</td>
        <td>${person.createdDate}</td>
        <td>${person.status}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.userName}</td>
        <td>${person.registrationNumber}</td>
        <td><a class="delete"><i class="fa fa-trash"></i></a></td>
        </tr>`;
    }
    tableBody.innerHTML = dataHtml;
  }


  const formEl = document.querySelector("form");
      const tbodyEl = document.querySelector("#tableData");
      const tableEl = document.querySelector("table");
      function onAddRow(e) {
        e.preventDefault();
        const id = document.getElementById("id").value;
        const date = document.getElementById("date").value;
        const etat = document.getElementById("etat").value;
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const username = document.getElementById("username").value;
        const matricule = document.getElementById("matricule").value;
        tbodyEl.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${date}</td>
                <td>${etat}</td>
                <td>${prenom}</td>
                <td>${nom}</td>
                <td>${username}</td>
                <td>${matricule}</td>
                <td><a class="delete"><i class="fa fa-trash"></i></a></td>
            </tr>
        `;
      }

      function onDeleteRow(e) {
        if (!e.target.classList.contains("delete")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      formEl.addEventListener("submit", onAddRow);
      tableEl.addEventListener("click", onDeleteRow);
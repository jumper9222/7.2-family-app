class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  addAge() {
    this.age ++
    reloadFamilyMember()
  }
  set changeName(newName) {
    this.name = newName
    reloadFamilyMember()
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;
  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMember();
}

function reloadFamilyMember() {
  const familyList = document.getElementById("familyMembers").tBodies[0];
  familyList.innerHTML = '';

    for (const [index, familyMember] of familyMembers.entries()) {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${familyMember.name}</td>
      <td>${familyMember.age}</td>
      <td>${familyMember.gender}</td>
      <td>
        <button onclick="familyMembers[${index}].addAge()">Add Age</button>
        <button onclick="changeName(${index})">Change Name</button>
      </td>
      `;
      familyList.appendChild(row);
  }
}

function changeName(index) {
  familyMembers[index].changeName = prompt('Enter new name:')
}
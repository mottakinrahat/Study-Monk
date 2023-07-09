document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var locationInput = document.getElementById("locationInput").value;
    var jobRoleInput = document.getElementById("jobRoleInput").value;
  
   
    var candidates = searchCandidates(locationInput, jobRoleInput);
  
    displayCandidates(candidates);
  });
  
  function searchCandidates(location, jobRole) {
   
    var candidates = [
      { name: "John Doe", location: "New York", jobRole: "Software Engineer" },
      { name: "Jane Smith", location: "San Francisco", jobRole: "Product Manager" },
      { name: "David Johnson", location: "London", jobRole: "Data Analyst" },
      { name: "Michel Warner", location: "Melbourne", jobRole: "Laravel Developer" },
      { name: "Sara lion", location: "Spain", jobRole: "Software Manager" },
      { name: "Alex Cook", location: "Chicago", jobRole: "Data Entry" },
      { name: "Christopher", location: "Sydney", jobRole: "Data Analyst" },
      { name: "Sophie", location: "French", jobRole: "Graphics Designer" },
      { name: "Freya", location: "Norway", jobRole: "React Developer" },
    ];
  
  
    var filteredCandidates = candidates.filter(function(candidate) {
      return candidate.location.toLowerCase().includes(location.toLowerCase()) &&
        candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
    });
  
    return filteredCandidates;
  }
  
  function displayCandidates(candidates) {
    var candidateList = document.getElementById("candidateList");
  
   
    candidateList.innerHTML = "";
  
    
    candidates.forEach(function(candidate) {
      var li = document.createElement("li");
      li.textContent = candidate.name + " - " + candidate.location + " - " + candidate.jobRole;
      candidateList.appendChild(li);
    });
  }
  
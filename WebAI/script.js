
// dohvati button
let  btnTop= document.getElementById("btnTop");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






// POLJE ZA DISPLAY MENU-A
const menuItems = [
  {
      title: "Goveđa juha s rezancima",
      description: "Kremasta juha od goveđeg mesa s dodatcima",
      price: "€10"
  },
  {
      title: "Piletina na žaru",
      description: "Piletina marinirana u začinima i pečena na žaru",
      price: "€12.0"
  },
  {
      title: "Rižoto s morskim plodovima",
      description: "Rižoto s morskim plodovima u kremastom umaku",
      price: "€15.0"
  },
  
  {
    title:"Pastrva na žaru s povrćem",
    description:"Svježa pastrva pečena na žaru, domaći kruh , povrće",
    price:"€14"
  },

  {
    title:"Pileća salata s avokadom",
    description:"Svježe pileće meso u umaku od avokada i kokosa",
    price:"€12"
  },

  {
    title:"Tjestenina s pesto umakom",
    description:"aldente i pesto umak , mljeveno meso, mladi peršin i rajčica",
    price:"€14"
  },

  {
    title:"Rižoto s plodovima mora",
    description:"Kremasti rižoto obogaćen svježim plodovima mora",
    price:"€15"
  },

  {
    title:"Paella s piletinom i povrćem",
    description:"Tradicionalno španjolsko jelo s pirjanom rižom i piletinom",
    price:"€14"
  },

  {
    title:"Teleći medaljoni s umakom od gljiva",
    description:"teleći medaljoni posluženi s umakom od šampinjona",
    price:"€18"
  },

  {
    title:"Filet mignon s umakom od vrganja",
    description:"filet mignon obložen hrskavom koricom, poslužen s umakom",
    price:"€14"
  },

  {
    title:"Dimljeni losos s krem sirom",
    description:"Komadići dimljenog lososa posluženi na tostu s krem sirom ",
    price:"€20"
  }
  // po potrebi dodat jos jela





];

// Function za generiranje menu- itema

function generateMenu() {
  const menuContainer = document.getElementById('menu-container');

  menuItems.forEach(item => {
      // Create a menu item div
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item', 'row', 'dropdown'); // Add dropdown class for hover

      // Create inner HTML for each item
      menuItem.innerHTML = `
          <div class="col-sm-8">
              <h4 class="menu-title">${item.title}</h4>
              <p class="menu-description">${item.description}</p>
          </div>
          <div class="col-sm-4 text-right">
              <h4 class="menu-price">${item.price}</h4>
          </div>
      `;

      // Append the new menu item to the container
      menuContainer.appendChild(menuItem);
  });
}

// Call the function to generate the menu
generateMenu();





//  Recenzije DOM- manipulacija , hvala chatgpt sto je pokazao filtriranje zvijezdica  //


document.addEventListener('DOMContentLoaded', function() {
  const filters = document.querySelectorAll('.filter');
  const reviews = document.querySelectorAll('.review');

  filters.forEach(filter => {
      filter.addEventListener('click', function() {
          const selectedStars = this.getAttribute('data-stars');
          
          // Remove active class from all filters
          filters.forEach(f => f.classList.remove('active'));
          
          // Add active class to the clicked filter
          this.classList.add('active');
          
          // Add active class to all previous filters up to the clicked one
          filters.forEach(f => {
              if (parseInt(f.getAttribute('data-stars')) <= parseInt(selectedStars)) {
                  f.classList.add('active');
              }
          });

          // Filter reviews based on the selected star rating
          reviews.forEach(review => {
              const reviewStars = review.getAttribute('data-stars');
              if (selectedStars === '0' || reviewStars === selectedStars) {
                  review.style.display = 'list-item';
              } else {
                  review.style.display = 'none';
              }
          });
      });
  });
});


// Rezervacija stola provjera jel dobro uhvati podatke


document.getElementById('reserveButton').addEventListener('click', function() {
  // Get form values
  const day = document.getElementById('daySelect').value;
  const hour = document.getElementById('hourSelect').value;
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const people = document.getElementById('people').value;

  // Verify and display data
  if (day === 'day-select' || hour === 'hour-select' || !name || !contact || !people) {
    alert('Molim Vas popunite sva polja.');
    return;
  }

  

  alert('Uspiješna rezervacija!');


  console.log('Reservation Details:', {
    day,
    hour,
    name,
    contact,
    people
  });
});










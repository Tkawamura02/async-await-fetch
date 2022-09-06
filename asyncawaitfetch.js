async function theLocation(city) {
    const res = await fetch('https://geocode.xyz/' + city + '?json=1');
  
    if (!res.ok) {
      setTimeout(() => {
        theLocation(city);
      }, 2500)
    } else {
      const data = await res.json();
      console.log(city.toUpperCase() + "'s latitude is: " + data.latt + ".");
      console.log(city.toUpperCase() + "'s longitude is: " + data.longt + ".");
    }
  
  }
  
  theLocation('seattle');
  theLocation('phoenix');

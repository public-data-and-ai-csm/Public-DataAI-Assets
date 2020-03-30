const fetch = require("node-fetch");
async function main(params) {

    if (!params.country) {
        return {error:"You must specify a country parameter." };
    }

    // Return the total country count
    else if (!params.state) {
        const data = await get_total_confirmed_country(params.country)
	    return { message: data };
    }

    // Return the total state count
    else if (!params.city) {
        const data = await get_total_confirmed_state(params.country,params.state)
	    return { message: data };
    }

     // Return city count
    else if (params.country && params.state && params.city) {
        const data = await get_total_confirmed_city(params.country,params.state,params.city)
	    return { message: data };
    }

    else return { error : "There's an error with your cloud function." };

}

//Now we will loop through the JSON, to find a country match
async function get_total_confirmed_country(country) {
    obj = await getCovidData()
    all_areas = obj['areas'] // start with all areas

    for(var i = 0; i < all_areas.length; i++) {
        // get the country
        if(all_areas[i]['id'] == country) {
          return all_areas[i]['totalConfirmed']

        }
    }
}

 //Now we will loop through the JSON, to find a state match
async function get_total_confirmed_state(country, state) {
      obj = await getCovidData()
    all_areas = obj['areas'] // start with all areas
    for(var i = 0; i < all_areas.length; i++) {
        // get the country
        if(all_areas[i]['id'] == country) {
            us_areas = all_areas[i]['areas']
            // get the state
            for(var j = 0; j < us_areas.length; j++) {
                if(us_areas[j]['displayName'] == state) {
                   return us_areas[j]['totalConfirmed']

                 }
            }
        }
    }
}



//Now we will loop through the JSON, to find a city match
async function get_total_confirmed_city(country,state,city) {
    obj = await getCovidData()
    all_areas = obj['areas'] // start with all areas
    for(var i = 0; i < all_areas.length; i++) {
        // get the country
        if(all_areas[i]['id'] == country) {
            us_areas = all_areas[i]['areas']
            // get the state
            for(var j = 0; j < us_areas.length; j++) {
                if(us_areas[j]['displayName'] == state) {
                    state_areas = us_areas[j]['areas']
                    for(var k = 0; k < state_areas.length; k++) {
                        // find the city's total deaths
                        if(state_areas[k]['displayName'] == city) {
                            city = state_areas[k]

                            return city['totalConfirmed']
                        }
                    }

                }
            }
        }
    }
}

// This gets the whole JSON dump from bing.com
async function getCovidData() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      response = await fetch("https://www.bing.com/covid/data", requestOptions)
      const data = await response.json();

    return data
}

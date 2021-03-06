import React from 'react'

export const listAreaDetails = (details, i) => {
	return (
		<div key={i}>
			<p style={{
				fontSize: '26px',
				marginBottom: '0px',
				marginTop: '4px',
				color: 'black',
				textAlign: 'center'
			}}>{details && details['name']}</p>
			<div style={{ textAlign: 'center', marginBottom: '5px' }} >
			---------------------------------------------------
			</div>

			{
				details['roam'] &&
				<div style={{marginBottom: '10px'}}>
					<h5 style={{color: 'darkslategray', fontStyle: 'italic'}}>Roaming</h5>
					{
						details['roam']['common'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Common: </span>
							<span>{pokemonArrToString(details['roam']['common'])}</span>
						</div>

					}
					{
						details['roam']['uncommon'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Uncommon: </span>
							<span>{pokemonArrToString(details['roam']['uncommon'])}</span>
						</div>

					}
					{
						details['roam']['rare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Rare: </span>
							<span>{pokemonArrToString(details['roam']['rare'])}</span>
						</div>

					}
					{
						details['roam']['veryrare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Very Rare: </span>
							<span>{pokemonArrToString(details['roam']['veryrare'])}</span>
						</div>

					}
					{
						details['roam']['extremelyrare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Extremely Rare: </span>
							<span>{pokemonArrToString(details['roam']['extremelyrare'])}</span>
						</div>

					}
					{
						details['roam']['legendary'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Legendary: </span>
							<span>{pokemonArrToString(details['roam']['legendary'])}</span>
						</div>

					}
				</div>
			}
			{
				details['fish'] &&
				<div style={{marginBottom: '10px'}}>
					<h5 style={{color: 'darkslategray', fontStyle: 'italic'}}>Fishing</h5>
					{
						details['fish']['common'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Common: </span>
							<span>{pokemonArrToString(details['fish']['common'])}</span>
						</div>

					}
					{
						details['fish']['uncommon'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Uncommon: </span>
							<span>{pokemonArrToString(details['fish']['uncommon'])}</span>
						</div>

					}
					{
						details['fish']['rare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Rare: </span>
							<span>{pokemonArrToString(details['fish']['rare'])}</span>
						</div>

					}
					{
						details['fish']['veryrare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Very Rare: </span>
							<span>{pokemonArrToString(details['fish']['veryrare'])}</span>
						</div>

					}
					{
						details['fish']['extremelyrare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Extremely Rare: </span>
							<span>{pokemonArrToString(details['fish']['extremelyrare'])}</span>
						</div>

					}
					{
						details['fish']['legendary'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Legendary: </span>
							<span>{pokemonArrToString(details['fish']['legendary'])}</span>
						</div>

					}
				</div>
			}
			{
				details['surf'] &&
				<div>
					<h5 style={{color: 'darkslategray', fontStyle: 'italic'}}>Surfing</h5>
					{
						details['surf']['common'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Common: </span>
							<span>{pokemonArrToString(details['surf']['common'])}</span>
						</div>

					}
					{
						details['surf']['uncommon'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Uncommon: </span>
							<span>{pokemonArrToString(details['surf']['uncommon'])}</span>
						</div>

					}
					{
						details['surf']['rare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Rare: </span>
							<span>{pokemonArrToString(details['surf']['rare'])}</span>
						</div>

					}
					{
						details['surf']['veryrare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Very Rare: </span>
							<span>{pokemonArrToString(details['surf']['veryrare'])}</span>
						</div>

					}
					{
						details['surf']['extremelyrare'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Extremely Rare: </span>
							<span>{pokemonArrToString(details['surf']['extremelyrare'])}</span>
						</div>

					}
					{
						details['surf']['legendary'] &&
						<div>
							<span style={{color: 'cornflowerblue'}}>Legendary: </span>
							<span>{pokemonArrToString(details['surf']['legendary'])}</span>
						</div>

					}
				</div>
			}
		</div>
	)
}

export const pokemonArrToString = (arr) => {
	let str = ''

	arr.map((e, i) => {
		let toAdd = ''

		if (i >= arr.length - 1) {
			toAdd = e
		} else {
			toAdd = e + ', '
		}

		str += toAdd
	})

	return str
}

export const JSONtoPokemonList = (JSON) => {
	let pokemonList = []
	let formattedPokemonList = []

	JSON.map(region => {
		Object.keys(region).map(area => {
			Object.keys(region[area]).map(type => {
				if (type === 'roam' || type === 'fish' || type === 'surf') {
					Object.keys(region[area][type]).map(rarity => {
						region[area][type][rarity].map(pokemon => {
							if (pokemonList.indexOf(pokemon) < 0) {
								pokemonList.push(pokemon)
							}
						})
					})
				}
			})
		})
	})

	pokemonList.sort().map(pokemon => {
		formattedPokemonList.push({value: pokemon, label: pokemon, clearableValue: false})
	})

	return formattedPokemonList
}

export const matchedAreas = (pokemon, regionJSON) => {
	// example output
	const out = {
		"route-1": {
			"roam": {
				"common": ['pikachu', 'pidgey']
			}
		}
	}

	let matchJSON = {}

	let matchRoam = false
	let matchFish = false
	let matchSurf = false

	regionJSON.map(region => {
		Object.keys(region).map((area, i) => {
			Object.keys(region[area]).map(type => {
				if (type === 'roam' || type === 'fish' || type === 'surf') {
					Object.keys(region[area][type]).map(rarity => {
						if (region[area][type][rarity].indexOf(pokemon) >= 0) {
							if (type === 'roam') matchRoam = true
							if (type === 'fish') matchFish = true
							if (type === 'surf') matchSurf = true
						}
					})
				}
			})

			// end of area
			if (matchRoam) {
				if (Object.keys(matchJSON).indexOf(area) >= 0) {
					matchJSON[area]["roam"] = region[area]["roam"]
				} else {
					matchJSON[area] = {"name": region[area]["name"]}
					matchJSON[area]["roam"] = region[area]["roam"]
				}
			}

			if (matchFish) {
				if (Object.keys(matchJSON).indexOf(area) >= 0) {
					matchJSON[area]["fish"] = region[area]["fish"]
				} else {
					matchJSON[area] = {"name": region[area]["name"]}
					matchJSON[area]["fish"] = region[area]["fish"]
				}
			}

			if (matchSurf) {
				if (Object.keys(matchJSON).indexOf(area) >= 0) {
					matchJSON[area]["surf"] = region[area]["surf"]
				} else {
					matchJSON[area] = {"name": region[area]["name"]}
					matchJSON[area]["surf"] = region[area]["surf"]
				}
			}

			matchRoam = false
			matchFish = false
			matchSurf = false
		})
	})

	return matchJSON
}

export const pokemonToRegionsFound = (pokemon, regionJSON) => {
	let regionsFound = []
	let matchFound = false

	regionJSON.map((region, i) => {
		Object.keys(region).map((area) => {
			Object.keys(region[area]).map(type => {
				if (type === 'roam' || type === 'fish' || type === 'surf') {
					Object.keys(region[area][type]).map(rarity => {
						if (region[area][type][rarity].indexOf(pokemon) >= 0) {
							matchFound = true
						}
					})
				}
			})

			// Verify which region was found
			if (matchFound) {
				if (region['pallet-town']) regionsFound.indexOf('Kanto') < 0 && regionsFound.push('Kanto')
				if (region['new-bark-town']) regionsFound.indexOf('Johto') < 0 && regionsFound.push('Johto')
				if (region['route-101']) regionsFound.indexOf('Hoenn') < 0 && regionsFound.push('Hoenn')
				if (region['twinleaf-town']) regionsFound.indexOf('Sinnoh') < 0 && regionsFound.push('Sinnoh')
				if (region['one-island']) regionsFound.indexOf('Sevii Islands') < 0 && regionsFound.push('Sevii Islands')
			}

			matchFound = false
		})
	})

	return regionsFound
}

import requests
def search_flights(departure_id, arrival_id, outbound_date, return_date, adults, children):
    api_key = "dca7a32ed603d6a3f038baf9587555b493cc7af0fd8c7ea9f0c70066e2366898"
    url = "https://serpapi.com/search"
    params = {
        "engine": "google_flights",
        "hl": "en",
        "gl": "us",
        "type": "1",
        "departure_id": departure_id,
        "arrival_id": arrival_id,
        "outbound_date": outbound_date,
        "return_date": return_date,
        "adults": adults,
        "children": children,
        "api_key": api_key
    }
    response = requests.get(url, params=params)
    return response.json()
def print_flight_info(flight_data):
    if "best_flights" in flight_data:
        print("Best Flights:")
        for flight in flight_data["best_flights"]:
            for f in flight["flights"]:
                print(f"Flight Number: {f['flight_number']}")
                print(f"Airline: {f['airline']}")
                print(f"Departure: {f['departure_airport']['name']} at {f['departure_airport']['time']}")
                print(f"Arrival: {f['arrival_airport']['name']} at {f['arrival_airport']['time']}")
                print(f"Duration: {f['duration']} minutes")
                print(f"Price: ${flight['price']}")
                print(f"Legroom: {f['legroom']}")
                print(f"Carbon Emissions: {flight['carbon_emissions']['this_flight']} grams")
                print(f"Extensions: {', '.join(f['extensions'])}")
                print("-" * 40)
    if "other_flights" in flight_data:
        print("Other Flights:")
        for flight in flight_data["other_flights"]:
            for f in flight["flights"]:
                print(f"Flight Number: {f['flight_number']}")
                print(f"Airline: {f['airline']}")
                print(f"Departure: {f['departure_airport']['name']} at {f['departure_airport']['time']}")
                print(f"Arrival: {f['arrival_airport']['name']} at {f['arrival_airport']['time']}")
                print(f"Duration: {f['duration']} minutes")
                print(f"Price: ${flight['price']}")
                print(f"Legroom: {f['legroom']}")
                print(f"Carbon Emissions: {flight['carbon_emissions']['this_flight']} grams")
                print(f"Extensions: {', '.join(f['extensions'])}")
                print("-" * 40)

    if "airports" in flight_data:
        print("Airports:")
        for airport in flight_data["airports"]:
            for dep in airport["departure"]:
                print(f"Departure Airport: {dep['airport']['name']} in {dep['city']}, {dep['country']}")
            for arr in airport["arrival"]:
                print(f"Arrival Airport: {arr['airport']['name']} in {arr['city']}, {arr['country']}")
            print("-" * 40)
def main():
    departure_id = "RPR"
    arrival_id = "DEL"
    outbound_date = "2024-11-15"
    return_date = "2024-11-22"
    adults = 2
    children = 1
    flight_data = search_flights(departure_id, arrival_id, outbound_date, return_date, adults, children)
    print_flight_info(flight_data)
if __name__ == "__main__":
    main()

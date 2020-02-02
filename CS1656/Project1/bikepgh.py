import sys 
from requests import get
import json
from math import cos, asin, sqrt
from collections import OrderedDict

infoList = []
statusList = []

def main():
    baseURL = sys.argv[1]
    command = sys.argv[2]
    station_infoURL = baseURL+'/station_information.json'
    station_statusURL = baseURL+'/station_status.json'
    
    parseData(station_infoURL, infoList)
    parseData(station_statusURL, statusList)

    if (command == "total_bikes"):
        displayTotalBikes()
    elif (command == "total_docks"):
        displayTotalDocks()
    elif (command == "percent_avail"):
        percentageDockAvailable(sys.argv[3])
    elif (command == "closest_stations"):
        threeClosest(sys.argv[3], sys.argv[4])
    elif (command == "closest_bike"):
        closestWAvailableBikes(sys.argv[3], sys.argv[4])
    elif (command == "station_bike_avail"):
        bikesAvailableatBikeStation(sys.argv[3], sys.argv[4])
    else:
        print("Input valid commands")

def parseData(url, list):
    response = get(url)
    allData = json.loads(response.content)
    dataData = allData.get("data")
    stationData = dataData.get("stations")
    
    for x in stationData:
        list.append(x)


def displayTotalBikes():
    total = 0
    for x in statusList:
       total = total + x.get("num_bikes_available")
    print("Command = total_bikes")
    print("Parameters = ")
    print("Output = ", total)

def displayTotalDocks():
    total = 0
    for x in statusList:
       total = total + x.get("num_docks_available")
    print("Command = total_docks")
    print("Parameters = ")
    print("Output = ", total)

def percentageDockAvailable(station_id):
    numBikes = 0
    numDocks = 0
    percentage = 0
    
    for x in statusList:
       if (x.get("station_id") == station_id):
           numBikes = x.get("num_bikes_available")
           numDocks = x.get("num_docks_available")
           break
    
    percentage = numDocks/(numBikes+numDocks)
    percentage = (int) (percentage * 100)
    print("Command = percent_avail")
    print("Parameters = ", station_id)
    print("Output = ", percentage, "%")

def threeClosest(latitude, longitude):
    print("Command = closest_stations")
    print("Parameters = ", latitude, " ", longitude)
    print("Output = ")

    closestDict = {}
   
    for x in infoList:
        dist = distance(float(latitude), float(longitude), float(x.get("lat")), float(x.get("lon")))
        closestDict[dist] = x
    
    closest  = OrderedDict(sorted(closestDict.items()))

    for n in range (3):
        item = closest.popitem(last = False)
        print(item[1].get("station_id"), " ", item[1].get("name"))

def closestWAvailableBikes(latitude, longitude):
    print("Command = closest_bike")
    print("Parameters = ", latitude, " ", longitude)

    closestDict = {}
   
    for x in infoList:
        dist = distance(float(latitude), float(longitude), float(x.get("lat")), float(x.get("lon")))
        closestDict[dist] = x
    
    closest  = OrderedDict(sorted(closestDict.items()))

    item = closest.popitem(last = False)
    
    for x in statusList:
        if (x.get("station_id")== item[1].get("station_id")):
            if (x.get("num_bikes_available")!= 0):
                item = closest.popitem(last = False)
            else:
                break
        
    print("Output = ", item[1].get("station_id"), " ", item[1].get("name"))


def bikesAvailableatBikeStation(latitude, longitude):
    print("Command = closest_stations")
    print("Parameters = ", latitude, " ", longitude)

    closestDict = {}

    for x in infoList:
        dist = distance(float(latitude), float(longitude), float(x.get("lat")), float(x.get("lon")))
        closestDict[dist] = x

    closest  = OrderedDict(sorted(closestDict.items()))
    item = closest.popitem(last = False)
    bikesAvailable = 0

    for x in statusList:
        if (x.get("station_id")== item[1].get("station_id")):
           bikesAvailable = x.get("num_bikes_available")


    print("Output = ", item[1].get("station_id"), ", ", bikesAvailable )

def distance(lat1, lon1, lat2, lon2):
    p = 0.017453292519943295
    a = 0.5 - cos((lat2-lat1)*p)/2 + cos(lat1*p)*cos(lat2*p) * (1-cos((lon2-lon1)*p)) / 2
    return 12742 * asin(sqrt(a))


if __name__ == "__main__":
    main()
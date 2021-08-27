#!/usr/bin/env python3

#Im ripping some website for a list of timezones 
import requests
from bs4 import BeautifulSoup
import geocoder

#Set requests
url = "https://www.utctime.net/time-zone-abbreviations"
r = requests.get(url)

#Set soup
soup = BeautifulSoup(r.content, "html.parser")

#this def can now be called from anywhere i think
def getTZList():
  #list that will contain tx dicts
  tz_list = []
  #Loop through website html to get timezone information
  #might move this to a local file as this information is not very dynamic
  for items in soup.find_all("tr")[1:]:
    abv = items.a.text
    name = items.find_all("td")[1].text
    tz_offset = items.find_all("td")[2].text
    tmp_dict = {abv: [name, tz_offset]}
    tz_list.append(tmp_dict)
  
  return tz_list

#Dunction that returns location [City, State Country]
def getLoc():
  g = geocoder.ip('me')
  loc = "{0}, {1} {2}".format(g.city, g.state, g.country)
  return loc
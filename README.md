# node.location
distance calculator using mongo $near
Just experimental for my projects.
Given 4 cordinates (lat,long lat,long -source and dest) the program will 
calculate the distance between the cordinates and give the distance in kilometers.

Eg 
Harishs@PC110IT-HP /cygdrive/c/nodeproject/node.location

$ node app 4.880828 52.318826 4.883779 52.362331
Distance is 4.841687717079701 kms

Here 4.880828 52.318826 is my place in amstelveen
This is paradiso -the church that runs as a club 4.883779 52.362331 the distance between them is 4 kms.Mongo already calcualtes
but i expose it by using the executedbCommand and providing the radius of the earth.We can also provide max distance to limit the data.
It is very amateur ,but a start :)
 
In the future I plan to use this to develop a fully blown api for listing events in ur city by distance. 


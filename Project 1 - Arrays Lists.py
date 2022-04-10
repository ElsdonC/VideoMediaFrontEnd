#Find the average temperature and how many days are greater than average


#ask how many days
n = int(input("how many days? "))

#ask for temperature
T = []
for i in range(1, n+1):
    T.append(float(input("What is day " + str(i) + "'s temperature? ")))

#find average
sum = 0
for i in T:
    sum += i
average = sum/n

#find days above average
x = 0
for i in T:
    if i > average:
        x += 1

#print to screen
print("The average temeprature is: " + str(average))
if x == 1:
    print("There is 1 day when the temperature is above average.")
else:
    print("There are " + str(x) + " days when the temperature is above average.")
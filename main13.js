/*
Trips and Users

The Trips table holds all taxi trips. 
Each trip has a unique Id, while Client_Id and Driver_Id are both foreign keys to the Users_Id at the Users table. 
Status is an ENUM type of (‘completed’, ‘cancelled_by_driver’, ‘cancelled_by_client’).

The Users table holds all users. 
Each user has an unique Users_Id, and Role is an ENUM type of (‘client’, ‘driver’, ‘partner’).

Write a SQL query to find the cancellation rate of requests made by unbanned users 
(both client and driver must be unbanned) between Oct 1, 2013 and Oct 3, 2013. 
The cancellation rate is computed by dividing the number of canceled (by client or driver) 
requests made by unbanned users by the total number of requests made by unbanned users.

For the above tables, 
your SQL query should return the following rows with the cancellation rate being rounded to two decimal places.
*/

/*

Trips table is main table
    id (unique)
    client_Id (connected to "Users" table)
    driver_Id (connected to "Drivers" table)
    completed
    cancelled_by_driver
    cancelled_by_client
*/
/*
User table is main table
    id (unique)
*/
/*
Drivers table is main table
    id (unique)
    client
    driver
    partner

*/

const query = `SELECT `



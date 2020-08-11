# Day_Planner
## Description

<p>In this project I created a day planner. The head of the page lists the current day of the week as well as the numeric day along with the month and year. Then in the main body of the page there are 9 business hours listed in their own row so that the user can click inside the input field next to each business hour and type out a task to do for that hour. The end user will then save the task by clicking the save button. This will store the task in local storage so if the page is refreshed the task will remain. each business hour will be color coordinated according to the end users current time. If the business hour has already past then the color will be grey. If the ends users current time is equal to the business hour then it will be red. If the business hour has yet to pass then the color will be green.</p>

-  I used a for loop to check the end users hour against the hour in the planner and set the color accordingly.
-  I used a function to get any stored tasks from local storage if any exists.
-  I used a click event on the save button elements to save the end users input tasks to local storage.

[Link to Day Planner Project](https://danielgerrald.github.io/Day_Planner/) <br>
[Link to a preview on how the Day Planner works](https://drive.google.com/file/d/1gxC4j0owCMl6GY9CFRbKJ5NYLg4GWL54/view)
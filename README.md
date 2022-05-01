## DSG Guess Who

One of the most important (and often difficult to implement) features of a team is camaraderie. Google defines that as "mutual trust and friendship among people who spend a lot of time together." This will often manifest itself naturally over time. Team building activities are useful and can help accelerate this natural outcome. During last week's Engineering Departmental Meeting, the team utilized a React App I built (in my free-time...PLCC schedule is not impacted) to play a "Product Team vs. Product Team" version of the classic game "Guess Who." This application was created with the explicit purpose of allowing team members of the larger team to have some fun, put faces to names and get to know team members on a more personal level.

Building camaraderie among a "team of teams" is particularly difficult since team members are not working together on a daily basis. In this case, the strategy was a similar strategy that I use to coach my U8 soccer team: Create an activity whereby participants are having fun and learning in such a way that participants don't realize they are learning.

The game is fairly simple:

- Team names and photos of all participants are input into teams.json file, grouped by product team (or other organizational unit).
- One person (or more) are chosen at random to be featured for their given product team. A series of "hints" are entered into the json file for this person.
- Run the application on a laptop and project in a conference room with all team members present. (it is not currently hosted in the cloud to help limit costs)
- Hints are revealed one-by-one.
- The most difficult hint is shown first. As additional hints are displayed, they becoming increasingly easier. (hints have a win and lose value that reflects their level of difficulty)
- If someone thinks they know who the person is, they yell out a guess. If they are correct, they receive the "win" value associated with the question. If they are incorrect, their point total is deducted by the "lose" value.
- Repeat until all teams are completed. (Teams cannot guess for their own team.
- Once all teams are completed, the team with the most points receive a couple dozen donuts the following day.

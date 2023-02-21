# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
### Assumptions 
- DB used is SQL
- Ticket 1 is the most suitable solution

### Ticket 1 - Investigation: Database update feasibility
A suitable solution would be to create a join table with the facilityId and AgentId to store the custom ID (stored for an agent by the facility). 
- Investigate the feasiblity of adding this in the entity structure and persisting this change to db schema. 
- Identify any data migration that might be needed for this change (eg. customIds might be getting stored in agent metadata right now)
- Identify any other better db schema.
#### Estimates
30 hours
### Acceptance Criteria
Report for the points listed above

### Ticket 2 - Entity structure update

#### Estimates
21 hours
### Acceptance Criteria
- Unit tests

### Ticket 3 - UI changes for facilities to add these values

#### Estimates
30 hours
### Acceptance Criteria
- Unit tests

### Ticket 4 - API implementation

#### Estimates
45 hours
### Acceptance Criteria
- Unit tests
- Update existing APIs 

(sorry running out of time for assignemnt)

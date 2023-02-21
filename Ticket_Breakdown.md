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
- Ticket aren't ordered

### Ticket 1 - Investigation: Database update feasibility
A suitable solution would be to create a join table with the facilityId and AgentId to store the custom ID (stored for an agent by the facility). 
- Investigate the feasiblity of adding this in the entity structure and persisting this change to db schema. 
- Identify any data migration that might be needed for this change (eg. customIds might be getting stored in agent metadata right now)
- Identify any other better db schema.
#### Estimates
30 hours
#### Acceptance Criteria
Report for the points listed above

### Ticket 2 - Entity structure update
Update 
#### Estimates
21 hours
#### Acceptance Criteria
- Unit tests
#### Dependencies
- Report from Ticket 1

### Ticket 3 - UI changes for facilities to add these values
The agent Id field should be updatable in the client facility application. Custom ID of the agent should be shown in all agent views for the client facility application.
#### Estimates
30 hours
#### Acceptance Criteria
- Unit tests
- Updated API calls (payload and response handling)
- Custom ID of the agent should be shown in all agent views for the client facility application.

#### Ticket 4 - API implementation
REST API to allow client facilities to add and update custom IDs. 
Ripple changes for the feature should be implemented as well (details listed in acceptance criteria)
#### Estimates
45 hours
#### Acceptance Criteria
- Unit tests
- REST API to allow client facilities to add and update custom IDs
- Delete join table records on deletion of facility or agent
- Internal DB ID should be used when customId is not defined
#### Dependencies
- Ticket 2

### Ticket 5 - Update getShiftByFacility method to reflect custom ID
The existing `getShiftByFacility` method should display the customID of the agent as well. 
The `generateReport` method should display the customId of agent instead of the internal DB id. 
#### Estimates
21 hours
#### Acceptance Criteria
- updated Unit tests in updated methods
- `getShiftByFacility` method should display the customID of the agent as well as internal db ID.
- Report should be from the perspective of a facility
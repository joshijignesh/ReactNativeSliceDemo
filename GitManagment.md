# Git Management Guidelines

## 1. Creating a Branch

🔴 **Important:** Always create branches from the `master` branch.

### Naming Branches

🔴 **Important:** Differentiate between Task, Feature, and Bug branches. These branches will be merged to `dev`, `staging`, and `master` in order to release specific variants as needed.

🔵 **Note:** Proper branch naming is crucial to maintain clarity and to understand the project's status.

**Rule:** 
- Begin with the ticket number.
- Follow the ticket number with a `-`.
- Add the ticket name after `-`, replacing spaces with `_` (UNDERSCORE).

**Formula:** 
`TICKET_NUMBER-TICKET_TITLE`

**Example:** 
If the ticket number is `BTC-001` and the ticket title is "Project setup", the branch name should be:

🔴 **Important:** `BTC-001-Project_setup`

## 2. Merging Branches 

Follow these steps for an organized software development and deployment:

1. **Merge into `dev` Branch:**
   - Merge feature branches into the `dev` branch to consolidate recent changes.
   - Allows for extensive testing in a controlled environment.

2. **Merge into `staging` Branch:**
   - After validation in `dev`, merge changes into `staging`.
   - `staging` simulates the production environment, allowing final code verification.

3. **Validation in `staging`:**
   - Perform thorough testing and QA in the `staging` branch.
   - Includes user acceptance, performance testing, etc.

4. **Preparation for Production:**
   - Once tests in `staging` are successful and approved, the code is ready for production.

5. **Merge into `master` Branch:**
   - Merge the validated changes from `staging` to `master`.
   - `master` represents the production-ready code.

🔴 **Important:** Following this systematic process ensures code stability, clear development-production distinction, and high software quality. This minimizes risks of errors and offers a structured deployment pathway.

## 3. Pre-Merge Checklist
**Reference To PR checklist**  [PR CheckList](PRCHECKLIST)


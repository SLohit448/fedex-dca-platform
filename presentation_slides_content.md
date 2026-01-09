# FedEx IDCAP – Intelligent DCA Management Platform
## Presentation Slides Content

### Slide 1 – Title & GitHub Repository
* **Title:** FedEx IDCAP – Intelligent DCA Management Platform
* **Subtitle:** Reimagining DCA Management through Digital & AI Solutions
* **GitHub Repo Link:** `[Insert your Repo Link]`
* **Visual:** Simple background with FedEx colors or modern AI/digital illustration

### Slide 2 – Goal & Context
* **Problem Statement:**
  * Manual case allocation via Excel/emails
  * Delayed feedback loops & poor accountability
  * Limited visibility and analytics
* **Objective:** Build a **scalable, intelligent, and secure DCA management platform** that:
  * Centralizes case allocation & tracking
  * Predicts recovery likelihoods using AI
  * Provides real-time dashboards and role-based portals

### Slide 3 – Key Pain Points
* Manual case allocation and tracking
* Minimal audit trail and unclear ownership
* Delayed feedback & poor governance
* Limited performance visibility

### Slide 4 – Proposed Solution
* **Centralized platform** for DCA management
* **AI-driven prioritization & recovery prediction**
* **Workflow automation** and RPA for legacy integration
* **Real-time dashboards** and KPIs
* **Role-based portals** for Admin & DCA users

### Slide 5 – Architecture Diagram
(See mermaid diagram in implementation plan)
* **Flow:** User -> React Frontend -> FastAPI Backend -> Database / AI Engine -> RPA -> Legacy Systems

### Slide 6 – Tech Stack
* **Backend:** Python FastAPI (APIs, AI integration)
* **Frontend:** React + Tailwind (Modern UI, dashboards)
* **Database:** SQLite (Storage of cases & analytics)
* **AI/ML:** Scikit-learn (Recovery scoring)
* **Automation:** RPA Mock Scripts (Legacy simulation)

### Slide 7 – Project Structure
* `/backend`: FastAPI APIs, DB models
* `/frontend`: React UI, dashboards
* `/ai_engine`: ML model training & inference
* `/rpa_mock`: Scripts for legacy interactions

### Slide 8 – Backend Components
* **Auth:** Mocked JWT + OAuth2 (Admin/DCA roles)
* **Core Modules:** Case Allocation, Workflow Engine
* **Database:** Case & audit-trail storage

### Slide 9 – AI/ML Module
* **Recovery Score Model:** Logistic Regression
* **Input Features:** Amount, Age, Customer Profile
* **Output:** Recovery likelihood (0–1) and priority ranking

### Slide 10 – Frontend / UI
* **Admin Dashboard:** Total debt overview, recovery rates, active agencies
* **DCA Portal:** Worklist, call/update actions
* **Design:** Clean typography, glassmorphism touches

### Slide 11 – Workflow & Automation
* **Automated Case Assignment:** Based on AI score
* **Notifications:** For escalations
* **RPA Integration:** Auto-sync with legacy systems

### Slide 12 – Analytics & KPIs
* **KPIs:** Recovery rates, overdue aging, DCA performance
* **Visuals:** Charts, trendlines

### Slide 13 – Verification Plan
* **Automated Tests:** Backend API tests
* **Manual:** End-to-end flow from Admin allocation to DCA action

### Slide 14 – Expected Outcomes
* Reduced overdue aging & escalations
* Improved recovery predictability
* Stronger governance & compliance

### Slide 15 – Value Proposition
* Centralized control
* AI-powered decision making
* Seamless collaboration

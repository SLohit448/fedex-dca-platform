# FedEx IDCAP – Intelligent DCA Management Platform

**GitHub Repository:** [https://github.com/SLohit448/fedex-dca-platform](https://github.com/SLohit448/fedex-dca-platform)

**Project Title:** Reimagining Debt Collection Agency (DCA) Management through Digital & AI Solutions

## Overview
This platform centralizes case allocation, prioritizes debt recovery using AI, and provides dashboards and portals for Admins and DCAs.

## Architecture
- **Backend**: Python (FastAPI)
- **Frontend**: React (Vite) + TailwindCSS
- **AI Engine**: Scikit-Learn (Recovery Prediction)
- **Database**: SQLite (SQLAlchemy)
- **RPA/Automation**: Custom scripts for legacy system integration

## Setup Instructions

### 1. Backend Setup
1.  Navigate to `/backend`:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3.  Run the server:
    ```bash
    uvicorn main:app --reload
    ```
    API will be available at `http://localhost:8000`. Documentation (Swagger UI) available at `http://localhost:8000/docs`.

### 2. Frontend Setup
1.  Navigate to `/frontend`:
    ```bash
    cd frontend
    ```
2.  Install Node dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
    Access the UI at `http://localhost:5173`.

### 3. AI & Automation
- **AI Model**: Located in `ai_engine/model.py`. The backend loads this model for scoring and case prioritization.
- **RPA Mock**: Located in `rpa_mock/connector.py`. Cases are scored and assigned based on recovery probability and workload.

## Features
- **Smart Allocation**: Cases are scored and assigned based on priority.
- **Admin Dashboard**: Real-time view of recovery KPIs.
- **DCA Portal**: Dedicated view for agents to manage tasks.
- **SLA Monitoring**: Automated tracking and notifications.
- **Audit Trails**: Full logging of case history and actions.
- **Prioritization Logic**: Ranking based on (Amount × Probability).

---
*Created for FedEx Hackathon / Internal Innovation Project*

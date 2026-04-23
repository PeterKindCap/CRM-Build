# Northstar CRM

A static, browser-openable venture capital CRM dashboard for an early-stage investment team. The product is designed as a dense internal tool for sourcing, founder relationship tracking, pipeline decisions, team activity, and conversion analytics.

Open `index.html` in a browser to use the dashboard. No install step is required in this workspace because Node/npm are not available locally.

## Product Requirements Summary

Northstar CRM helps a VC firm track companies from target sourcing through first touch, founder conversations, diligence, investment committee, term sheets, pass decisions, keep-warm monitoring, and portfolio onboarding.

Core workflows:

- Executive overview of CRM volume, newly added companies, same-day contact and meeting activity, active pipeline, funnel conversion, stage velocity, stale deals, and follow-up queue.
- Pipeline management through both a draggable board and dense table view.
- Team activity dashboard for outbound emails, replies, meetings, notes, intros, referrals, and individual contribution.
- Company detail pages with fundraising details, founders, timeline, meeting notes, internal comments, memo links, diligence checklist, decision log, relationship map, and next owner.
- Founder/contact intelligence with relationship history and previous companies.
- Analytics for conversion by source, sector, geography, team member, pass reason, and portfolio versus pipeline mix.
- Task queue and smart alerts for high-priority inactive deals, overdue follow-ups, and keep-warm reminders.

## Information Architecture

- Executive Dashboard: north-star metrics, funnel, stage timing, stale deals, follow-ups, active sectors.
- Pipeline Board: stage lanes, draggable company cards, owner, score, likelihood, tags, next action.
- Pipeline Table: spreadsheet-style operating view with filters, saved views, columns, and bulk stage updates.
- Company Detail: CRM timeline, notes, fundraising, founders, attachments/memo placeholders, checklist, relationship map, decision log.
- Founder / Contact: contact profile, relationship strength, shared paths, associated companies, prior interactions.
- Team Activity: activity feed, leaderboard, weekly trends, individual breakdown.
- Analytics: conversion rates, stage velocity, source/sector/geography charts, pass reasons, portfolio mix.
- Tasks: overdue, today, upcoming, high priority, keep-warm reminders, smart suggestions.
- Portfolio: simple post-investment tracking section.
- PRD + Schema: embedded requirements, component guidance, design direction, schema, and wireframes.

## Wireframe-Level Layouts

Executive dashboard:

- Top row: compact metric cards for total CRM count, additions, contacted today, meetings, active pipeline.
- Middle: conversion funnel and median days between stages.
- Bottom: stale deals, follow-ups, active sector heat map.

Pipeline board:

- Horizontal columns for each investment stage.
- Cards show logo, company, tags, notes, likelihood bar, next action, owner.
- Dragging a card updates stage, last interaction, and suggested next action.

Pipeline table:

- Dense rows for company, sector, geography, stage, round, check target, status, source, founders, last interaction, next action, owner, scores, and notes.
- Designed for future inline editing, saved views, bulk operations, and duplicate scanning.

Company detail:

- Header with company identity, tags, priority, likelihood.
- Main timeline and notes area.
- Side rail for fundraising, founders, diligence, and relationship map.
- Decision log supports structured proceed/pass reasoning.

Founder/contact:

- Contact identity, relationship strength, known-by count, response time.
- Timeline of interactions and associated companies.

Team activity:

- Daily activity summary, weekly reply trend, meeting bars, leaderboard, feed.

Analytics:

- Conversion metrics by stage.
- Conversion by source, sector, geography, pass reasons, portfolio/pipeline mix.

Tasks:

- Follow-up queue, overdue tasks, high-priority alerts, keep-warm reminders, suggested next steps.

## Recommended Components and States

- Navigation rail, searchable command input, dark mode toggle.
- Metric cards, status chips, tags, score pills, compact toolbars.
- Draggable kanban board, responsive table, side panels, checklist, timeline.
- Chart components for funnel, bars, trend line, heat map.
- States to add in production: loading, empty, no search results, sync error, duplicate warning, stale alert, task overdue, permission-restricted memo, archived/pass decision.

## Sample Database Schema

```sql
create table users (
  id uuid primary key,
  name text not null,
  email text unique not null,
  role text not null
);

create table pipeline_stages (
  id uuid primary key,
  name text not null,
  sort_order int not null,
  is_terminal boolean default false
);

create table companies (
  id uuid primary key,
  name text not null,
  website text,
  logo_url text,
  sector text,
  theme text,
  geography text,
  stage text,
  round_size numeric,
  check_size_target numeric,
  status text not null,
  pipeline_stage_id uuid references pipeline_stages(id),
  source_id uuid,
  owner_id uuid references users(id),
  priority_score int,
  investment_likelihood_score int,
  last_interaction_at timestamptz,
  next_action text,
  notes_preview text,
  created_at timestamptz default now()
);

create table contacts (
  id uuid primary key,
  name text not null,
  email text,
  linkedin_url text,
  title text,
  relationship_strength_score int,
  created_at timestamptz default now()
);

create table company_contacts (
  company_id uuid references companies(id),
  contact_id uuid references contacts(id),
  role text,
  is_founder boolean default false,
  primary key (company_id, contact_id)
);

create table interactions (
  id uuid primary key,
  company_id uuid references companies(id),
  contact_id uuid references contacts(id),
  user_id uuid references users(id),
  type text not null,
  channel text,
  occurred_at timestamptz not null,
  summary text,
  sentiment text
);

create table meetings (
  id uuid primary key,
  company_id uuid references companies(id),
  owner_id uuid references users(id),
  scheduled_at timestamptz,
  held_at timestamptz,
  note_template_id uuid,
  transcript_url text,
  notes text
);

create table tasks (
  id uuid primary key,
  company_id uuid references companies(id),
  owner_id uuid references users(id),
  title text not null,
  due_at timestamptz,
  status text not null,
  priority text not null
);

create table referrals (
  id uuid primary key,
  company_id uuid references companies(id),
  source_type text not null,
  source_name text not null,
  intro_strength int,
  requested_at timestamptz,
  completed_at timestamptz
);

create table decisions (
  id uuid primary key,
  company_id uuid references companies(id),
  stage text not null,
  outcome text not null,
  reason_code text,
  rationale text,
  decided_by uuid references users(id),
  decided_at timestamptz
);

create table tags (
  id uuid primary key,
  name text unique not null,
  category text
);

create table company_tags (
  company_id uuid references companies(id),
  tag_id uuid references tags(id),
  primary key (company_id, tag_id)
);

create table portfolio_entries (
  id uuid primary key,
  company_id uuid references companies(id),
  fund_id uuid,
  invested_at date,
  check_size numeric,
  ownership_percent numeric,
  reserve_amount numeric
);
```

## Frontend Design System Direction

- Typography: system UI or Inter, compact text scale, no decorative display treatment.
- Layout: left navigation, command/search topbar, dense cards, full-width data sections, responsive table overflow.
- Color: neutral base with teal action color, amber attention, red risk, blue status, green success.
- Shape: 7-8px radius, crisp borders, subtle shadow only where it aids hierarchy.
- Interaction: keyboard-friendly navigation targets, saved views, filters, bulk actions, drag/drop board, inline-edit-ready table.
- Dark mode: token-based colors with high contrast and low visual noise.

## Example Dummy Data

The app includes sample companies such as HelioGrid, FinPilot, KiteOps, AgentLane, CareLattice, and Mosaic Bio, with realistic VC fields:

- Sector/theme/geography
- Round size/check target
- Source channel and inbound/outbound/referred classification
- Founder names and relationship strength
- Pipeline stage, priority score, likelihood score
- Last interaction, next action, notes, stale deal status
- Interactions, tasks, team activity, funnel data, analytics inputs

## Suggested Production Stack

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui
- TanStack Table for dense CRM tables
- Recharts for funnel, cohort, and trend analytics
- dnd-kit for accessible drag/drop pipeline movement
- Postgres with Prisma or Drizzle
- Auth.js, Clerk, or WorkOS for auth and firm workspaces
- Background jobs for email/calendar sync, stale deal scoring, duplicate detection, and reminder generation
- Integrations: Gmail/Google Calendar, Slack, Notion/Docs, Airtable import, LinkedIn enrichment provider, data room links
